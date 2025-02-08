import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Platform,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { TouchableRipple } from "react-native-paper";
import { icons } from "../../constants";
import categories from "../../data/categories.json";
import { AnimatePresence, MotiView } from "moti";
import { Easing } from "react-native-reanimated";

const Categories = ({ isOpen, setIsOpen, params, setParams, setValues }) => {
  const Cancel = icons.cancel;
  const ArrowLeft = icons.ArrowLeft;

  useEffect(() => {
    if (params.c) {
      const catgeoryName = categories.find((cat) => cat.id == params.c);
      setValues((e) => ({ ...e, cat: catgeoryName?.name }));
    }
  }, []);
  const scrollViewRef = useRef(null);

  return (
    <AnimatePresence mode="wait">
      {isOpen === "category" && (
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
          <View className="pl-5 flex-row items-center justify-between w-full">
            <Text className="text-lg uppercase font-psemibold">Category</Text>
            <Pressable onPress={() => setIsOpen(false)} className="py-6 px-5">
              <Cancel width={15} height={15} />
            </Pressable>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={20}
            ref={scrollViewRef}
          >
            {categories?.map((category, index) => (
              <View
                key={index}
                className={`${
                  params.c == category.id ? "border-b border-[#eee]" : ""
                }`}
              >
                <TouchableRipple
                  className={`${
                    params.c == category.id ? "bg-[#eee]" : ""
                  } px-5`}
                  onPress={() => {
                    setParams((prev) => {
                      const newParams =
                        params.c === category.id
                          ? { c: null, sc: null } // Reset when the same category is selected
                          : { c: category.id, sc: null };

                      // Remove all keys that start with "cf"
                      Object.keys(prev).forEach((key) => {
                        if (key.startsWith("cf")) {
                          delete prev[key];
                        }
                      });

                      return { ...prev, ...newParams };
                    });

                    setValues((prev) => ({
                      ...prev,
                      cat: params.c === category.id ? null : category.name,
                      subcat: null,
                    }));
                  }}
                >
                  <View className="flex-row w-full h-[72px] items-center border-b border-[#eee]">
                    <View className="flex-1 flex-row items-center">
                      <Image
                        source={{
                          uri: category.picture,
                        }}
                        className="w-10 h-10"
                        resizeMode="contain"
                      />
                      <Text className="text-sm font-pmedium ml-3">
                        {category.name}
                      </Text>
                    </View>
                    {category?.children.length > 0 && (
                      <ArrowLeft
                        width={15}
                        height={15}
                        className={`${
                          params.c == category.id ? "-rotate-90" : "rotate-180"
                        } stroke-black stroke-1 opacity-70`}
                      />
                    )}
                  </View>
                </TouchableRipple>
                {params.c == category.id &&
                  category.children?.map((child, index) => (
                    <TouchableRipple
                      key={index}
                      className={`${
                        params.sc === child.id ? "bg-[#eee]" : ""
                      } pl-9`}
                      onPress={() => {
                        setParams((prev) => {
                          // Remove all keys that start with "cf"
                          const filteredParams = Object.fromEntries(
                            Object.entries(prev).filter(
                              ([key]) => !key.startsWith("cf")
                            )
                          );

                          return {
                            ...filteredParams,
                            sc: child.id,
                          };
                        });

                        setValues((prev) => ({
                          ...prev,
                          subcat: child.name,
                        }));

                        setIsOpen(null);
                      }}
                    >
                      <View className="flex-1 flex-row items-center h-16">
                        <Image
                          source={{
                            uri: child.picture,
                          }}
                          className="w-9 h-9"
                          resizeMode="contain"
                        />
                        <Text className="text-sm font-pmedium ml-3">
                          {child.name}
                        </Text>
                      </View>
                    </TouchableRipple>
                  ))}
              </View>
            ))}
          </ScrollView>
        </MotiView>
      )}
    </AnimatePresence>
  );
};

export default Categories;
