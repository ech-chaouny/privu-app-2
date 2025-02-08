// import {
//   View,
//   Text,
//   Image,
//   FlatList,
//   Pressable,
//   Platform,
//   ActivityIndicator,
//   TouchableOpacity,
// } from "react-native";
// import React, { useCallback, useEffect, useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { getToken } from "../../services/TokenService";
// import axios from "../../utils/axios";
// import { icons } from "../../constants";
// import { router, useRouter, useSegments } from "expo-router";
// import { useAlertContext } from "../../context/AlertContext";
// import { AnimatePresence } from "moti";
// import Toast from "../../components/Toast";
// import SearchInput from "../../components/SearchInput";

const Favoris = () => {
  //   const segments = useSegments();
  //   const router = useRouter();
  //   const Clock = icons.Clock;
  //   const Location = icons.location;
  //   const Camera = icons.Camera;
  //   const Video = icons.videoIcon;
  //   const HeartRed = icons.heartRed;
  //   const [posts, setPosts] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const { alert, showAlert, hideAlert } = useAlertContext();
  //   useEffect(() => {
  //     // Check if the current segment matches this page
  //     if (segments[segments.length - 1] === "favoris") {
  //       getSavedPost();
  //     }
  //   }, [segments]);
  //   const getSavedPost = async () => {
  //     const token = await getToken();
  //     try {
  //       const response = await axios.get("savedPosts", {
  //         params: {
  //           embed: "post,city,pictures",
  //           sort: "created_at",
  //         },
  //         headers: {
  //           Authorization: `Bearer ${token}`, // Include the token here
  //         },
  //       });
  //       setPosts(response.data.result.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error response:", error.response);
  //     }
  //   };
  //   const handleSave = async (post_id) => {
  //     const token = await getToken();
  //     setPosts((prevPosts) =>
  //       prevPosts.filter((post) => post.post_id !== post_id)
  //     );
  //     try {
  //       const response = await axios.post(
  //         "/savedPosts",
  //         { post_id },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`, // Include the token here
  //           },
  //         }
  //       );
  //       if (response.data.success) {
  //         showAlert({
  //           show: true,
  //           text: response.data.message,
  //           type: "black",
  //         });
  //         setTimeout(() => {
  //           hideAlert();
  //         }, 4000);
  //       }
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   };
  //   //Limited Words in description
  //   const LimitedWords = (text, length) => {
  //     if (text.length <= length) return text;
  //     return text.substring(0, length) + "...";
  //   };
  //   return (
  //     <SafeAreaView className="bg-white w-full h-full">
  //       <View className="bg-white w-full py-3.5 flex-row items-center justify-center border-b border-[#dddddd] px-4">
  //         <Text className="text-lg font-psemibold tracking-tight">
  //           Mes favories
  //         </Text>
  //       </View>
  //       <View className="px-3">
  //         <View className={`flex-row items-center w-full py-3`}>
  //           <SearchInput
  //             containerStyle={"w-full flex-1 rounded-lg h-[50px] px-4"}
  //             placeHolder="Recherchez vos annonces enregistrées"
  //           />
  //         </View>
  //         <FlatList
  //           data={posts}
  //           keyExtractor={(item) => String(item.id)}
  //           numColumns={2}
  //           className="h-full"
  //           renderItem={({ item }) => (
  //             <TouchableOpacity
  //               activeOpacity={0.7}
  //               onPress={() => router.push(`/details/${item.post.id}`)}
  //               className="relative rounded-lg bg-white w-[48%] mb-3" // Adjusted for grid layout
  //             >
  //               <View>
  //                 <Image
  //                   source={{
  //                     uri: item.post.picture.url.full,
  //                   }}
  //                   className="w-full h-32 rounded-lg" // Full width of container
  //                 />
  //                 <View className="flex-row absolute top-24 z-10 left-3 ">
  //                   <View className="flex-row items-end gap-x-1 bg-[#00000070] rounded-[4px] p-1">
  //                     <Camera width={18} height={18} />
  //                     <Text className="text-xs font-psemibold text-white">
  //                       {item.post.count_pictures}
  //                     </Text>
  //                     {/* <Video width={18} height={18} />
  //                     <Text className="text-xs font-psemibold text-white">
  //                       {item.post.count_videos}
  //                     </Text> */}
  //                   </View>
  //                 </View>
  //                 <Pressable
  //                   onPress={() => handleSave(item?.post_id)}
  //                   className={`absolute top-2 right-3 z-10 bg-[#ffffffbe] h-7 w-7 items-center justify-center shadow-xl rounded-full`}
  //                 >
  //                   <HeartRed width={18} height={18} />
  //                 </Pressable>
  //                 <View className="py-2 bg-white">
  //                   <Text className="font-pbold text-[#131313]">
  //                     {LimitedWords(item.post.title, 24)}
  //                   </Text>
  //                   <Text className="text-base font-psemibold text-primary-200">
  //                     {item.post.price_formatted}
  //                   </Text>
  //                   <View className="flex-row items-center mt-0.5">
  //                     <Location width={16} height={16} />
  //                     <Text className="ml-1 font-pregular text-xs text-white-200 ">
  //                       {item.post.city?.name}
  //                     </Text>
  //                   </View>
  //                 </View>
  //               </View>
  //             </TouchableOpacity>
  //           )}
  //           showsVerticalScrollIndicator={false}
  //           columnWrapperStyle={{ justifyContent: "space-between" }} // Ensures proper spacing between columns
  //         />
  //       </View>
  //       {loading && (
  //         <View className="bg-[#ffffff8f] h-screen w-full items-center justify-center absolute top-0 left-0 z-10">
  //           <ActivityIndicator size={"large"} />
  //         </View>
  //       )}
  //       <AnimatePresence mode="wait">
  //         {alert.show && (
  //           <Toast
  //             {...alert}
  //             hideAlert={hideAlert}
  //             style={Platform.OS === "ios" ? "bottom-[20px]" : "bottom-[10px]"}
  //           />
  //         )}
  //       </AnimatePresence>
  //     </SafeAreaView>
  //   );
};

export default Favoris;
