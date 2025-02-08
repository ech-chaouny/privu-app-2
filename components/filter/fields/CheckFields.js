import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Checkbox from "expo-checkbox";

const CheckFields = ({ field_id, title, params, handleFieldsValue }) => {
  const [isChecked, setChecked] = useState(params);

  const toggleChecked = () => {
    setChecked((prev) => {
      const newValue = !prev;
      return newValue;
    });
    handleFieldsValue(field_id, !isChecked ? 1 : ""); // Use the new value
  };

  return (
    <Pressable
      onPress={toggleChecked}
      className="flex-row items-center gap-x-2 w-40 px-5 mt-5"
    >
      <Checkbox
        value={isChecked} // `value` instead of `status`
        onValueChange={toggleChecked}
        color={isChecked ? "black" : undefined}
      />
      <Text className="text-[15px] font-pmedium">{title}</Text>
    </Pressable>
  );
};

export default CheckFields;
