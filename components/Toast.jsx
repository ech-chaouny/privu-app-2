import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";
import { IconButton } from "react-native-paper";

const Toast = ({ type, text, hideAlert, style }) => {
  return (
    <MotiView
      from={{
        opacity: 0,
        translateX: 20,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      exit={{
        opacity: 0,
        translateX: 20,
      }}
      transition={{
        type: "timing",
        duration: 200,
        easing: Easing.inOut(Easing.cubic),
      }}
      className={`absolute w-[365px] right-2 z-20 ${style}`}
    >
      <View
        className="flex-row justify-between items-center rounded-md py-2 pl-4"
        style={[
          styles.shadowProp,
          {
            backgroundColor:
              type === "danger"
                ? "#FF0000"
                : type === "black"
                ? "#34373B"
                : "#0BC148",
          },
        ]}
      >
        <Text className="text-white text-sm font-pmedium w-[82%]">{text}</Text>
        <IconButton
          size={22}
          icon={"close"}
          className="h-6"
          iconColor="white"
          onPress={() => hideAlert()}
        />
      </View>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.22,
    shadowRadius: 3,
  },
});

export default Toast;
