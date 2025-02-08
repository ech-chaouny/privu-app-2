import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  errors,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const Eye = icons.eye;
  const EyeHide = icons.eyeHide;
  return (
    <>
      <View
        className={`${otherStyles} flex-row w-full items-center border
      ${errors ? "border-red-600" : "border-white-300"} h-[53px] rounded-md px-4
      focus:border-black-100`}
      >
        {title == "phone" && (
          <View className="flex-row items-center h-full justify-center">
            <Image
              source={icons.france}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="font-pmedium mx-2">+33</Text>
          </View>
        )}
        <TextInput
          className="flex-1 font-pmedium text-black"
          placeholder={placeholder}
          value={value}
          placeholderTextColor="#9B9B9B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          autoCapitalize="none"
          keyboardType={
            title === "phone"
              ? "phone-pad"
              : title === "Email"
              ? "email-address"
              : "default"
          }
        />
        {title === "Password" && (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? (
              <Eye width={20} height={20} fill="#000" />
            ) : (
              <EyeHide width={20} height={20} fill="#000" />
            )}
          </TouchableOpacity>
        )}
      </View>
      {errors && (
        <Text className="text-red-600 text-xs font-pmedium mt-2 ml-2">
          {errors}
        </Text>
      )}
    </>
  );
};

export default FormField;
