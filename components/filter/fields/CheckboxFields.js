import { View, Text, Pressable } from "react-native";
import React from "react";

const CheckboxFields = ({ data, title, field_id, setParams, params }) => {
  return (
    <View className="border-b border-[#eee] py-6 mx-5">
      <View className="flex-row items-center gap-x-2">
        <Text className="font-psemibold text-base">{title}</Text>
      </View>
      <View className="flex-row flex-wrap gap-2 items-center mt-3">
        {data.map((v, index) => (
          <Pressable
            key={index}
            onPress={() =>
              setParams((prevParams) => {
                const prevChecked = prevParams[`cf[${field_id}]`] || [];
                return {
                  ...prevParams,
                  [`cf[${field_id}]`]: prevChecked.includes(v.id)
                    ? prevChecked.filter((id) => id !== v.id) // Uncheck
                    : [...prevChecked, v.id], // Check
                };
              })
            }
            className={`${
              params.includes(v.id) ? "bg-[#ffd49b49] border-[#ac6100]" : ""
            } rounded-3xl py-2 px-4 border duration-150`}
          >
            <Text
              className={`${
                params.includes(v.id) ? "text-[#ac6100]" : ""
              } font-psemibold text-[15px]`}
            >
              {v.value}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default CheckboxFields;
