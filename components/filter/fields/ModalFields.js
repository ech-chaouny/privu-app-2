import {
  View,
  Text,
  Modal,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableRipple } from "react-native-paper";
import { icons } from "../../../constants";
import SearchInput from "../../../components/SearchInput";
import { AnimatePresence, MotiView } from "moti";
import { Easing } from "react-native-reanimated";

const ModalFields = ({
  fieldsData,
  title,
  Icon,
  field_id,
  field_child_id,
  field_value,
  child_value,
  setFields,
  setParams,
  handleFieldsValue,
}) => {
  const [isVisible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(field_value ? true : false);

  const [data, setData] = useState(fieldsData);
  const [searchValue, setSearchValue] = useState("");

  const ArrowLeft = icons.ArrowLeft;
  const Cancel = icons.cancel;

  const field = fieldsData.find((item) => item.id === Number(field_value));
  const child =
    field && field.children.find((item) => item.id === Number(child_value));
  const [childData, setChildData] = useState();

  const removeAccents = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove accents

  const handleChange = (e) => {
    setSearchValue(e);
    const normalizedInput = removeAccents(e.toLowerCase());

    const filteredFields = fieldsData.filter((field) =>
      removeAccents(field.value.toLowerCase()).includes(normalizedInput)
    );
    setData(filteredFields);
  };
  const handleChangeChild = (e) => {
    setSearchValue(e); // Update the search input state
    const normalizedInput = removeAccents(e.toLowerCase());

    if (field) {
      // Filter the children of the selected field
      const filteredChildren = field.children.filter((child) =>
        removeAccents(child.value.toLowerCase()).includes(normalizedInput)
      );

      // Update the data to show only the filtered children
      setChildData(filteredChildren);
    }
  };
  return (
    <>
      <Pressable
        onPress={() => setVisible(true)}
        className="flex-row items-center border-b border-[#eee] py-6 mx-5"
      >
        <View className="flex-row items-center gap-x-2 mb-0.5 flex-1">
          {/* <Icon width={25} height={25} /> */}
          <Text className="font-psemibold text-base">
            {field_value !== "" && child_value === ""
              ? `${field.value} - Modèle`
              : field_value && child_value !== ""
              ? `${field.value} - ${child.value}`
              : title}
          </Text>
        </View>
        <ArrowLeft
          width={16}
          height={16}
          className="rotate-180 stroke-black stroke-1 opacity-70"
        />
      </Pressable>
      {/* Marque - Modele  */}
      <Modal
        visible={isVisible}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
        presentationStyle="pageSheet"
      >
        <View className="pl-5 flex-row items-center justify-between w-full mt-2">
          <Text className="text-base uppercase font-psemibold">
            {!isOpen ? "Marque" : "Modèle"}
          </Text>
          <Pressable onPress={() => setVisible(false)} className="py-4 px-5">
            <Cancel width={15} height={15} />
          </Pressable>
        </View>
        <SearchInput
          containerStyle="rounded-[99px] h-[45px] px-4 mt-2 mx-4 mb-2"
          placeHolder={"Rechercher"}
          handleChange={!isOpen ? handleChange : handleChangeChild}
          value={searchValue}
        />
        <View
          className={`flex-row ${
            !isOpen ? "justify-end" : "justify-between"
          } w-full items-center px-6 mb-2`}
        >
          {isOpen && (
            <Pressable
              className="flex-row items-center gap-x-1 py-2"
              onPress={() => {
                setSearchValue("");
                setIsOpen(false);
              }}
            >
              <ArrowLeft className="stroke-black" width={16} height={16} />
              <Text className="uppercase font-psemibold ">retour</Text>
            </Pressable>
          )}
          <Pressable
            className="py-2"
            onPress={() => {
              setFields((prevFields) => {
                // Filter the fields, removing the one that matches the `field_id` or `field_child_id`
                const updatedFields = prevFields.filter(
                  (field) =>
                    field.field_id !== field_id &&
                    field.field_id !== field_child_id
                );
                return updatedFields;
              });

              setParams((prevParams) => {
                const updatedParams = Object.keys(prevParams).reduce(
                  (result, key) => {
                    if (
                      !(
                        key === `cf[${field_id}]` ||
                        key === `cf[${field_child_id}]`
                      )
                    ) {
                      result[key] = prevParams[key]; // Retain all other keys
                    }
                    return result;
                  },
                  {}
                );
                return updatedParams;
              });
              setSearchValue("");
              setIsOpen(false);
            }}
          >
            <Text className="font-psemibold uppercase">Effacer</Text>
          </Pressable>
        </View>
        <ScrollView>
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <MotiView
                from={{ left: "0%" }}
                animate={{ left: "0%" }}
                exit={{ left: "-100%" }}
                className="w-full"
              >
                {data?.slice(0, 15).map((brand, index) => (
                  <TouchableRipple
                    key={index}
                    className={`${
                      Number(field_value) === brand.id ? "bg-[#eee]" : ""
                    } px-5`}
                    onPress={() => {
                      handleFieldsValue(field_id, brand.id);
                      setFields((prevFields) => {
                        // Filter the fields, removing the one that matches the `field_id` or `field_child_id`
                        const updatedFields = prevFields.filter(
                          (field) => field.field_id !== field_child_id
                        );
                        return updatedFields;
                      });
                      setSearchValue("");
                      setData(fieldsData);
                      setIsOpen(true);
                    }}
                  >
                    <View className="flex-row w-full h-16 items-center border-b border-[#eee]">
                      <View className="flex-1 flex-row items-center">
                        <Text className="text-sm font-psemibold ml-3">
                          {brand.value}
                        </Text>
                      </View>
                      {brand.children.length > 0 && (
                        <ArrowLeft
                          width={15}
                          height={15}
                          className="rotate-180 stroke-black stroke-1 opacity-30"
                        />
                      )}
                    </View>
                  </TouchableRipple>
                ))}
              </MotiView>
            ) : (
              <Children
                setChildData={setChildData}
                childData={childData}
                child_value={child_value}
                field_child_id={field_child_id}
                handleFieldsValue={handleFieldsValue}
                field={field}
                setVisible={setVisible}
                setSearchValue={setSearchValue}
              />
            )}
          </AnimatePresence>
        </ScrollView>
      </Modal>
    </>
  );
};
const Children = ({
  childData,
  setChildData,
  field,
  setVisible,
  child_value,
  field_child_id,
  handleFieldsValue,
  setSearchValue,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (field) {
      setChildData(field?.children);
    }
    setLoading(false);
  }, [field]);
  return (
    <View className="w-full">
      {childData == undefined || loading ? (
        <View className="mt-52">
          <ActivityIndicator size={"large"} color="#000" />
        </View>
      ) : (
        childData.map((child, index) => (
          <TouchableRipple
            key={index}
            className={`${
              Number(child_value) === child.id ? "bg-[#eee]" : ""
            } px-5`}
            onPress={() => {
              handleFieldsValue(field_child_id, child.id);
              setVisible(false);
              setSearchValue("");
            }}
          >
            <View className="w-full h-16 border-b border-[#eee] justify-center">
              <Text className="text-sm font-psemibold ml-3">{child.value}</Text>
            </View>
          </TouchableRipple>
        ))
      )}
    </View>
  );
};
export default ModalFields;
