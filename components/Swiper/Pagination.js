import React, { useEffect, useState } from "react";
import { View, Animated, StyleSheet, Dimensions, Text } from "react-native";
import { icons } from "../../constants";

const Pagination = ({ play, images, scrollX }) => {
  const { width } = Dimensions.get("window");
  const [number, setNumber] = useState(1);
  const ImageIcon = icons.image;
  useEffect(() => {
    const listenerId = scrollX.addListener(({ value }) => {
      const index = Math.floor(value / width + 0.5);
      setNumber(index + 1);
    });

    // Cleanup the listener when the component unmounts
    return () => {
      scrollX.removeListener(listenerId);
    };
  }, [scrollX, width]);
  return (
    <>
      <View style={styles.paginationContainer}>
        {images.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [7, 12, 7],
            extrapolate: "clamp",
          });

          const dotColor = scrollX.interpolate({
            inputRange,
            outputRange: ["#ffffff9a", "#fff", "#ffffff9a"],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.paginationDot,
                {
                  width: dotWidth,
                  backgroundColor: dotColor,
                },
              ]}
            />
          );
        })}
      </View>
      <View className="flex-row absolute bottom-3 left-3 bg-[#00000070] rounded-md px-2 py-1">
        <ImageIcon width={15} height={15} />
        <Text className="ml-2 text-xs font-pmedium text-white">
          {number}/{images.length}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 18,
    width: "100%",
  },
  paginationDot: {
    height: 7,
    borderRadius: 10,
    marginHorizontal: 3.5,
  },
});

export default Pagination;
