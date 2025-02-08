import React from "react";
import { Text, View } from "react-native";
import ReactNativeModal from "react-native-modal";
// import { Button } from "react-native-paper";

const Progress = ({ active, setActive }) => {
  return (
    <ReactNativeModal
      isVisible={active}
      animationIn="slideInUp"
      className="justify-end m-0"
      backdropOpacity={0.5}
      onBackdropPress={() => setActive(false)}
    >
      <View className="relative bg-white px-7 py-10 items-center rounded-t-[28px] min-h-[260px]">
        <View className="absolute inset-y-0 bg-[#b3b3b3] w-10 h-[2.5px] rounded-full top-3" />
        <Text className="text-center text-xl text-red-600 font-psemibold tracking-tight">
          En cours de maintenance
        </Text>
        <Text className="text-center text-base font-pmedium w-72 text-[#7c7c7e] mt-2">
          Cette fonctionnalité est temporairement indisponible. Merci de revenir
          plus tard.
        </Text>
        <View className="w-full mt-8">
          {/* <Button
            buttonColor="#eeeeee"
            textColor="white"
            className="rounded-lg py-1"
            onPress={() => {
              setActive(false);
            }}
          >
            <Text className="text-black-100 text-sm font-psemibold">
              Fermer
            </Text>
          </Button> */}
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default Progress;
