import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import ReactNativeModal from "react-native-modal";
import { TouchableRipple } from "react-native-paper";

const Sort = ({ openSort, setOpenSort, params, setParams, setCurrentPage }) => {
  const data = [
    { name: "Défaut", value: null },
    { name: "Date plus récent", value: "dateDesc" },
    { name: "Date plus anciet", value: "dateAsc" },
    { name: "Prix ​​plus cher", value: "priceDesc" },
    { name: "Prix moins cher", value: "priceAsc" },
  ];

  return (
    <ReactNativeModal
      isVisible={openSort}
      onBackButtonPress={() => setOpenSort(false)}
      onBackdropPress={() => setOpenSort(false)}
      className="justify-end m-0"
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      animationOutTiming={200}
    >
      <View className="bg-white pt-2 rounded-t-2xl max-h-[500px]">
        <View className="bg-white-100 w-10 h-1 rounded-full self-center" />
        <View className="pl-6 pb-2 flex-row items-center justify-between w-full pt-3">
          <Text className="text-lg font-pbold">Trier</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} className="w-full">
          {data.map((item, index) => (
            <TouchableRipple
              key={index}
              onPress={() => {
                setParams((e) => ({ ...e, orderBy: item.value }));
                setOpenSort(false);
                setCurrentPage(1);
              }}
            >
              <View
                className={`${item.value == params.orderBy ? "bg-[#eee]" : ""}
                   px-5 w-full h-[70px] border-b border-[#eee] justify-center`}
              >
                <Text
                  className={`${
                    item.value == params.orderBy
                      ? "font-psemibold"
                      : "font-pregular"
                  }  px-2`}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableRipple>
          ))}
        </ScrollView>
      </View>
    </ReactNativeModal>
  );
};

export default Sort;
