import { View, Text, ScrollView, Pressable, Platform } from "react-native";
import React, { useState } from "react";
import { AnimatePresence } from "moti";
import { SafeAreaView } from "react-native-safe-area-context";
import { MotiView } from "moti";
import jsonData from "../../data/cities.json";
import { TouchableRipple } from "react-native-paper";
import SearchInput from "../SearchInput";
import { icons } from "../../constants";
import { Easing } from "react-native-reanimated";

const Cities = ({ isOpen, setIsOpen, params, setParams, setValues }) => {
  const Cancel = icons.cancel;

  const [cities, setCities] = useState(jsonData);
  const [value, setValue] = useState("");

  const removeAccents = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove accents

  const handleChange = (e) => {
    setValue(e);
    const normalizedInput = removeAccents(e.toLowerCase());

    const filteredCities = jsonData.filter((city) =>
      removeAccents(city.name.toLowerCase()).includes(normalizedInput)
    );
    setCities(filteredCities);
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen === "city" && (
        <MotiView
          from={{ left: "100%" }}
          animate={{ left: "0%" }}
          exit={{ left: "100%" }}
          transition={{
            type: "timing",
            duration: 200,
            easing: Easing.inOut(Easing.cubic),
          }}
          className={`bg-white h-screen w-full absolute top-0 ${
            Platform.OS === "ios" ? "" : "pt-8"
          }`}
        >
          <View className="pl-5 flex-row items-center justify-between w-full mt-3">
            <Text className="text-lg uppercase font-psemibold">Ville</Text>
            <Pressable onPress={() => setIsOpen(false)} className="py-4 px-5">
              <Cancel width={15} height={15} />
            </Pressable>
          </View>
          <SearchInput
            containerStyle="rounded-[99px] h-[45px] px-4 mt-2 mx-4 mb-2"
            placeHolder={"Rechercher"}
            handleChange={handleChange}
            value={value}
          />
          <View className="flex-col mt-2">
            {cities.length === 0 ? (
              <View className="w-full items-center mt-10 px-5">
                <Text className="text-sm font-psemibold text-white-200">
                  Cette ville n'existe pas.
                </Text>
                <Text className="text-sm font-psemibold text-white-200">
                  Essayez d'entrer un autre nom de ville !
                </Text>
              </View>
            ) : (
              <>
                <TouchableRipple
                  onPress={() => {
                    setParams((e) => ({ ...e, l: null }));
                    setValues((e) => ({ ...e, city: null }));
                    setIsOpen(false);
                  }}
                  className={`px-5 ${params.l == null ? "bg-[#eee]" : ""}`}
                >
                  <View className="border-b border-[#eee] py-5 px-2">
                    <Text
                      className={`${
                        params.l == null ? "font-psemibold" : "font-pmedium"
                      } text-base`}
                    >
                      Toutes Villes
                    </Text>
                  </View>
                </TouchableRipple>
                {cities.slice(0, 8).map((city, index) => (
                  <TouchableRipple
                    key={index}
                    onPress={() => {
                      setParams((e) => ({ ...e, l: city.id }));
                      setValues((e) => ({ ...e, city: city.name }));
                      setIsOpen(false);
                    }}
                    className={`px-5 ${params.l == city.id ? "bg-[#eee]" : ""}`}
                  >
                    <View className="border-b border-[#eee] py-5 px-2">
                      <Text
                        className={`${
                          params.l == city.id
                            ? "font-psemibold"
                            : "font-pmedium"
                        } text-base`}
                      >
                        {city.name}
                      </Text>
                    </View>
                  </TouchableRipple>
                ))}
              </>
            )}
          </View>
        </MotiView>
      )}
    </AnimatePresence>
  );
};

export default Cities;
