import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { TouchableRipple } from "react-native-paper";
import { icons } from "../../../constants";
import ReactNativeModal from "react-native-modal";
import Checkbox from "expo-checkbox";

const SelectFields = ({ data, title, field_id, params, setParams }) => {
  const ArrowLeft = icons.ArrowLeft;
  const Cancel = icons.cancel;
  const [active, setActive] = useState(null);

  const [isChecked, setChecked] = useState(params);

  const toggleChecked = (f_id) => {
    setChecked((prev) =>
      prev.includes(f_id)
        ? prev.filter((id) => id !== f_id) // Uncheck the post
        : [...prev, f_id]
    );
  };
  return (
    <View>
      <Pressable
        onPress={() => setActive(title)}
        className="flex-row items-center border-b border-[#eee] py-6 mx-5"
      >
        <View className="flex-row items-center gap-x-1 mb-0.5 flex-1">
          <Text className="font-psemibold text-base">{title}</Text>
          {params.length >= 1 ? (
            <View className="bg-red-600 rounded-full h-5 w-5 items-center justify-center">
              <Text className="text-white font-pmedium text-xs">
                {params.length}
              </Text>
            </View>
          ) : null}
        </View>
        <ArrowLeft
          width={16}
          height={16}
          className="rotate-180 stroke-black stroke-1 opacity-70"
        />
      </Pressable>
      {/* Annee-Modele */}
      <ReactNativeModal
        isVisible={active === title}
        onBackButtonPress={() => setActive(null)}
        onBackdropPress={() => setActive(null)}
        className="justify-end m-0"
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        animationOutTiming={300}
      >
        <View className="bg-white py-3 rounded-t-lg max-h-[500px]">
          <View className="pl-6 pb-2 flex-row items-center justify-between w-full">
            <Text className="text-base uppercase font-psemibold">{title}</Text>
            <Pressable onPress={() => setActive(null)} className="py-4 px-6">
              <Cancel width={15} height={15} />
            </Pressable>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} className="w-full">
            {data.map((item, index) => (
              <TouchableRipple
                key={index}
                onPress={() => {
                  setParams((prevParams) => {
                    const prevChecked = prevParams[`cf[${field_id}]`] || [];

                    return {
                      ...prevParams,
                      [`cf[${field_id}]`]: prevChecked.includes(item.id)
                        ? prevChecked.filter((id) => id !== item.id) // Uncheck
                        : [...prevChecked, item.id], // Check
                    };
                  });
                  toggleChecked(item.id);
                }}
              >
                <View
                  className={`flex-row items-center px-5 w-full h-16 border-b border-[#eee]`}
                >
                  <Checkbox
                    value={isChecked.includes(item.id)}
                    onValueChange={() => toggleChecked(item.id)}
                    color={isChecked ? "black" : undefined}
                  />
                  <Text className="font-pmedium px-3">{item.value}</Text>
                </View>
              </TouchableRipple>
            ))}
          </ScrollView>
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default SelectFields;
