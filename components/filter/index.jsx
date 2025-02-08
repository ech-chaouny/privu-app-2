import {
  View,
  Text,
  Modal,
  TextInput,
  Switch,
  TouchableOpacity,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";

import { IconButton } from "react-native-paper";
import { icons } from "../../constants";
import Cities from "./Cities";
import Categories from "./Categories";
import Fields from "./fields/Fields";
import { SafeAreaView } from "react-native-safe-area-context";

const Filter = ({
  openFilter,
  setOpenFilter,
  params,
  setCurrentPage,
  setParams,
  setLoading,
  getPosts,
}) => {
  const ArrowLeft = icons.ArrowLeft;
  const [isOpen, setIsOpen] = useState(null);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [values, setValues] = useState({});
  const paramCount = Object.keys(params).filter(
    (key) =>
      key !== "op" &&
      key !== "perPage" &&
      params[key] !== null &&
      params[key] !== "" &&
      params[key] !== 0 &&
      !(Array.isArray(params[key]) && params[key].length === 0) &&
      key !== "orderBy" &&
      key !== "sc"
  ).length;

  const [fields, setFields] = useState([]);

  return (
    <Modal
      visible={openFilter}
      animationType="slide"
      presentationStyle="pageSheet"
      statusBarTranslucent={true}
      onRequestClose={() => setOpenFilter(false)}
    >
      <SafeAreaView className="h-full w-full">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex-row items-center justify-between pr-5 border-b border-[#eee]">
            <IconButton
              icon={"close"}
              onPress={async () => {
                Alert.alert(
                  "",
                  'Le filtre n\'est pas appliqué, mais les paramètres sont conservés. Cliquez sur "Lancer la Recherche" pour appliquer.',
                  [
                    {
                      text: "Cancel",
                      style: "cancel",
                    },
                    { text: "OK", onPress: () => setOpenFilter(false) },
                  ]
                );
              }}
            />
            <View className="flex-row items-center">
              <Text className="text-base font-psemibold">Filters</Text>
              {paramCount > 0 && (
                <View className="bg-black rounded-full h-6 w-6 items-center justify-center ml-1">
                  <Text className="text-white font-psemibold">
                    {paramCount}
                  </Text>
                </View>
              )}
            </View>
            <Pressable
              onPress={() => {
                setParams({ op: "search", perPage: 20 });
                setCurrentPage(1);
                setValues({});
              }}
            >
              <Text className="text-base font-psemibold text-red-600">
                Effacer
              </Text>
            </Pressable>
          </View>
          <Pressable
            onPress={() => setIsOpen("city")}
            className="flex-row items-center border-b border-[#eee] py-6 mx-5"
          >
            <Text className="font-psemibold text-base flex-1">Ville</Text>
            <Text className="font-pmedium text-sm text-white-200">
              {values.city ? values.city : "Toutes Villes"}
            </Text>
            <ArrowLeft
              width={16}
              height={16}
              className="rotate-180 stroke-black stroke-1 opacity-70 ml-2"
            />
          </Pressable>
          <Pressable
            onPress={() => setIsOpen("category")}
            className="flex-row items-center border-b border-[#eee] py-6 mx-5"
          >
            <Text className="font-psemibold text-base flex-1">Categorie</Text>
            <Text
              className="font-pmedium text-sm text-white-200"
              style={{ maxWidth: 220 }}
            >
              {values.cat && values.subcat
                ? `${values.cat} - ${values.subcat}`
                : values.cat
                ? values.cat
                : "Toutes les categories"}
            </Text>
            <ArrowLeft
              width={16}
              height={16}
              className="rotate-180 stroke-black stroke-1 opacity-70 ml-2"
            />
          </Pressable>
          {/* fields filter */}
          <Fields
            category_id={Number(params.sc)}
            fields={fields}
            setParams={setParams}
            params={params}
            setFields={setFields}
          />
          <View className="border-b border-[#eee] py-6 mx-5">
            <Text className="font-psemibold text-base">Prix (Dhs)</Text>
            <View className="flex-row items-center justify-between mt-3">
              <TextInput
                className="border border-[#a5a5a5] rounded-lg p-3.5 w-[48%] placeholder:font-pmedium"
                placeholder="Min"
                value={values.minPrice}
                onChangeText={(text) =>
                  setValues({ ...values, minPrice: text })
                } // Essential for real-time updates
                keyboardType="number-pad"
                onSubmitEditing={() =>
                  setParams({ ...params, minPrice: values.minPrice })
                }
                onEndEditing={() => {
                  setParams({ ...params, minPrice: values.minPrice });
                }}
              />
              <TextInput
                className="border border-[#a5a5a5] rounded-lg p-3.5 w-[48%] placeholder:font-pmedium"
                placeholder="Max"
                value={values.maxPrice}
                onChangeText={(text) =>
                  setValues({ ...values, maxPrice: text })
                }
                keyboardType="number-pad"
                returnKeyType="done"
                onSubmitEditing={() =>
                  setParams({ ...params, maxPrice: values.maxPrice })
                }
                onEndEditing={() => {
                  setParams({ ...params, maxPrice: values.maxPrice });
                }}
              />
            </View>
          </View>
          <View className="border-b border-[#eee] py-6 mx-5">
            <Text className="font-psemibold text-base">Tags</Text>
            <TextInput
              className="border border-[#a5a5a5] rounded-lg p-3.5 w-full placeholder:font-pmedium mt-3"
              placeholder="Rechercher des mots-clés"
            />
          </View>
          <View className="flex-row items-center border-b border-[#eee] py-4 mx-5">
            <Text className="font-psemibold text-base flex-1">
              Annonces avec videos
            </Text>
            <Switch
              value={isSwitchOn}
              color="#0066ff"
              onValueChange={() => {
                setIsSwitchOn(!isSwitchOn);
                setParams({ ...params, videos: isSwitchOn ? 0 : 1 });
              }}
            />
          </View>
        </ScrollView>

        <View className={`bg-white w-full border-t border-[#e9e9e9] px-3 py-3`}>
          <Pressable
            className="rounded-md py-3 bg-primary flex-row items-center justify-center px-2"
            onPress={async () => {
              setOpenFilter(false);
              setCurrentPage(1);
              await getPosts(params, false);
            }}
          >
            <Text className="text-black-100 w-full text-center font-psemibold text-[15px]">
              Lancer la Recherche
            </Text>
          </Pressable>
        </View>
        <Cities
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          params={params}
          setParams={setParams}
          setValues={setValues}
        />
        <Categories
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          params={params}
          setParams={setParams}
          setValues={setValues}
        />
      </SafeAreaView>
    </Modal>
  );
};

export default Filter;
