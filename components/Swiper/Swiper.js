import React, { useRef, useState } from "react";
import {
  FlatList,
  Image,
  Animated,
  Pressable,
  Dimensions,
  View,
} from "react-native";
import Pagination from "./Pagination";
import { router } from "expo-router";
import { ResizeMode, Video } from "expo-av";
import { icons } from "../../constants";

const Swiper = ({ data, play, setPlay, containerStyle, pathName }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get("window");
  const videoRef = useRef([]);
  const Play = icons.play;

  return (
    <>
      <FlatList
        data={data}
        horizontal
        style={{ width: width }}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            {item.mime_type.startsWith("video/") ? (
              <>
                <Pressable
                  onPress={() => setPlay(item.id)}
                  className="z-10 absolute w-full h-full justify-center items-center bg-[#0000005e]"
                  style={{ width: width }}
                >
                  <Play width={48} height={48} />
                </Pressable>

                <Video
                  ref={(el) => (videoRef.current[item.id] = el)}
                  source={{ uri: `https://privu.fr/storage/${item.filename}` }}
                  style={{ width: width }}
                  resizeMode={ResizeMode.COVER}
                  // useNativeControls
                  // shouldPlay={play === item.id}
                  // onPlaybackStatusUpdate={(status) => {
                  //   if (status.didJustFinish) {
                  //     setPlay(null);
                  //     videoRef.current[item.id]?.replayAsync();
                  //   }
                  // }}
                />
              </>
            ) : (
              <Pressable
                onPress={() => router.push(pathName)}
                style={{ width: width }}
                className={containerStyle}
              >
                <Image
                  source={{ uri: item.url.full }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </Pressable>
            )}
          </>
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
      />
      <Pagination
        play={play}
        setPlay={setPlay}
        scrollX={scrollX}
        images={data}
      />
    </>
  );
};

export default Swiper;
