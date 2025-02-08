import React from "react";
import { View, Text, Platform } from "react-native";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";
import { IconButton } from "react-native-paper";

const Alert = ({ type, text, hideAlert }) => {
  return (
    <MotiView
      from={{
        opacity: 0,
        translateY: 20,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      exit={{
        opacity: 0,
        translateY: 20,
      }}
      transition={{
        type: "timing",
        duration: 300,
        easing: Easing.inOut(Easing.cubic),
      }}
      className={`w-full  absolute left-0 z-20 ${
        Platform.OS === "ios" ? "bottom-8" : "bottom-0"
      }`}
    >
      <View
        className="flex-row justify-between items-center py-3 pl-5 pr-2"
        style={{ backgroundColor: type === "danger" ? "#FF0000" : "#0BC148" }}
      >
        <Text className="text-white text-sm font-pmedium w-[80%]">{text}</Text>
        <IconButton
          icon={"close"}
          iconColor="white"
          onPress={() => hideAlert()}
        />
      </View>
    </MotiView>
  );
};

export default Alert;
