import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import React, { useEffect, useState } from "react";

import { icons } from "../constants";

import { router } from "expo-router";
import { TouchableRipple } from "react-native-paper";
import axios from "../utils/axios";

const Listings = ({ title, category, parent }) => {
  const RightArrow = icons.rightArrow;
  const Location = icons.location;
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState();

  const LimitedWords = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  useEffect(() => {
    getPosts(category, parent);
  }, []);

  const getPosts = async (category, parent) => {
    try {
      const response = await axios.get(`listings/${category}/${parent}`);
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <View className="mt-4 px-4">
          <View className="bg-slate-200 w-32 h-5 rounded-full mb-2"></View>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            keyExtractor={(_, index) => String(index)}
            renderItem={() => (
              <View className="mr-4 py-2">
                <View className="rounded-t-lg bg-slate-200 w-36 h-24 mb-2"></View>
                <View className="rounded-full bg-slate-200 h-3 w-32"></View>
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ) : (
        <>
          <View className="flex-row items-center mt-4 pl-4">
            <Text className="text-base font-psemibold flex-1">{title}</Text>
            <TouchableRipple
              onPress={() => router.push(`/search?c=${parent}&sc=${category}`)}
              className="h-8 w-12 items-center justify-center"
            >
              <RightArrow />
            </TouchableRipple>
          </View>
          <View className="mt-2">
            <FlatList
              data={posts}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <TouchableHighlight
                  //underlayColor="#9B9B9B"
                  onPress={() => router.push(`/details/${item.id}`)}
                  style={styles.shadowProp}
                  className="w-36 rounded-lg bg-white ml-4 mb-2"
                >
                  <View>
                    <Image
                      source={{
                        uri: item.picture.url.full,
                      }}
                      className="w-36 h-24 rounded-t-lg"
                      resizeMode="cover"
                    />
                    <View className="px-2 py-2 bg-white rounded-b-lg">
                      <Text className="text-base font-psemibold text-primary-100">
                        {item.price_formatted}
                      </Text>
                      <Text className="font-psemibold">
                        {LimitedWords(item.title, 14)}
                      </Text>
                      <View className="flex-row items-center mt-0.5">
                        {category == 311 ? (
                          <>
                            {/* <Text className="font-pregular text-xs text-white-200 ">
                              {item.postValues[1]?.field_id == 3
                                ? item.postValues[1]?.value
                                : "Non trouvé"}
                            </Text>
                            <Text className="font-pbold h-[3px] w-[3px] rounded-full bg-white-200 mx-1" />
                            <Text className="font-pregular text-xs text-black-200">
                              {item.postValues[2]?.field_id == 93
                                ? `${item.postValues[2]?.value} km`
                                : "Non trouvé"}
                            </Text> */}
                          </>
                        ) : (
                          <>
                            {/* <Location height={12} width={12} className="mr-1 mb-.5" /> */}
                            <Text className="font-pregular text-xs text-black-200">
                              {LimitedWords(item.city?.name, 18)}
                            </Text>
                          </>
                        )}
                      </View>
                    </View>
                  </View>
                </TouchableHighlight>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              ListFooterComponent={
                <View className="w-36 h-36 justify-center items-center">
                  <TouchableRipple
                    onPress={() =>
                      router.push(`/search?c=${parent}&sc=${category}`)
                    }
                    className="bg-white rounded-full shadow-md p-4"
                  >
                    <RightArrow />
                  </TouchableRipple>
                  <Text className="font-pmedium mt-1">Voir tout</Text>
                </View>
              }
            />
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.22,
    shadowRadius: 3,
    elevation: 3.5,
  },
});
export default Listings;
