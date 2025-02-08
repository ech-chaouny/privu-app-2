import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title, handlePress, containerStyle, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-primary-100 rounded-lg min-h-[50px] justify-center items-center ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className="text-black-100 font-psemibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
