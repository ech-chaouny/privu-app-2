// import {
//   View,
//   Text,
//   Image,
//   Pressable,
//   ScrollView,
//   ActivityIndicator,
//   Platform,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import React, { useState } from "react";
// import { useContext } from "react";
// import AuthContext from "../../context/AuthContext";
// import { router } from "expo-router";
// import { Button, IconButton, TouchableRipple } from "react-native-paper";
// import { logout } from "../../services/AuthService";
// import { icons, images, profile } from "../../constants";
// import SearchBar from "../../components/SearchBar";
// import ReactNativeModal from "react-native-modal";
// import { AnimatePresence } from "moti";

// import * as ImagePicker from "expo-image-picker";

// import { useAlertContext } from "../../context/AlertContext";
// import Toast from "../../components/Toast";
// import axios from "../../utils/axios";
// import { getToken } from "../../services/TokenService";

const Profile = () => {
  //   const { user, setUser } = useContext(AuthContext);
  //   const [loading, setLoading] = useState(false);
  //   const [loadingImage, setLoadingImage] = useState(false);
  //   // if (!user && !userLoading) return <Redirect href={"/"} />;
  //   const [confirmation, setConfirmation] = useState(false);
  //   const [active, setActive] = useState(false);
  //   const CheckBadge = icons.CheckBadge;
  //   const Annonces = icons.ListClipboard;
  //   const Search = icons.SearchFolder;
  //   const BackIcon = icons.ArrowLeft;
  //   const Logout = icons.Logout;
  //   const handleLogout = async () => {
  //     try {
  //       setConfirmation(false);
  //       setLoading(true);
  //       await logout(user.id);
  //       setUser(null);
  //       router.replace("/home");
  //     } catch (error) {
  //       console.log(error.response.data);
  //       setLoading(false);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   function formatDates(dateString) {
  //     const date = new Date(dateString);
  //     const options = { year: "numeric", month: "long" };
  //     return date.toLocaleDateString("en-US", options);
  //   }
  //   const { alert, hideAlert } = useAlertContext();
  //   const pickImage = async (selectOption) => {
  //     let result;
  //     if (selectOption === "gallery") {
  //       result = await ImagePicker.launchImageLibraryAsync({
  //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //         quality: 1,
  //       });
  //     } else if (selectOption === "camera") {
  //       const { status } = await ImagePicker.requestCameraPermissionsAsync();
  //       if (status !== "granted") {
  //         return;
  //       }
  //       result = await ImagePicker.launchCameraAsync({
  //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //         quality: 1,
  //       });
  //     }
  //     if (!result.canceled) {
  //       setLoadingImage(true);
  //       const token = await getToken();
  //       try {
  //         const photo = {
  //           uri: result.assets[0].uri,
  //           name: result.assets[0].fileName,
  //           type: result.assets[0].mimeType,
  //         };
  //         // console.log("Picture:", data);
  //         const response = await axios.put(`/users/${user.id}/photo`, photo, {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });
  //         console.log(response.data);
  //         setActive(false);
  //         setLoadingImage(false);
  //       } catch (error) {
  //         if (error.response) {
  //           console.log("Error response data:", error.response.data);
  //         }
  //       }
  //     }
  //   };
  //   return (
  //     <SafeAreaView className="h-screen w-full">
  //       {user ? (
  //         <ScrollView showsVerticalScrollIndicator={false} className="px-4 pt-5">
  //           <View className="bg-white rounded-xl">
  //             <View
  //               // style={styles.shadowProp}
  //               className="flex-col items-center w-full p-4"
  //             >
  //               <View className="relative">
  //                 <Image
  //                   source={{ uri: user.photo_url }}
  //                   className="w-[100px] h-[100px] rounded-full"
  //                 />
  //                 <View className="bg-white absolute z-0 h-[30px] w-[30px] rounded-full -bottom-1 right-0" />
  //                 <IconButton
  //                   icon={"pencil"}
  //                   iconColor="white"
  //                   containerColor="black"
  //                   size={18}
  //                   onPress={() => setActive(true)}
  //                   className="h-[26px] w-[26px] absolute z-10 -bottom-2 -right-1"
  //                 />
  //               </View>
  //               <View className="mt-4 ml-4">
  //                 <Text className="text-balck text-lg font-psemibold">
  //                   {user.name}
  //                 </Text>
  //                 {/* <View className="flex-row items-center mt-1">
  //                   <Text className="text-sm font-pmedium mr-1.5">
  //                   Email vérifié
  //                   </Text>
  //                   <CheckBadge width={18} height={18} />
  //                 </View> */}
  //                 <Text className="text-[13px] font-pmedium mt-1 text-[#939699] ml-0.5">
  //                   Rejoint en {formatDates(user.created_at)}
  //                 </Text>
  //               </View>
  //             </View>
  //             <Pressable
  //               onPress={() => router.push("/account/my_ads")}
  //               className="flex-row items-center justify-between w-full p-4 border-t border-[#eee]"
  //             >
  //               <View className="flex-row flex-1 gap-x-3 items-center">
  //                 <Annonces width={22} height={22} />
  //                 <Text className={`font-psemibold text-black text-base`}>
  //                   Mes annonces
  //                 </Text>
  //               </View>
  //               <BackIcon
  //                 width={16}
  //                 height={16}
  //                 className="rotate-180 stroke-black stroke-1 opacity-40"
  //               />
  //             </Pressable>
  //             <Pressable
  //               onPress={() => router.push("/account/my_search")}
  //               className="flex-row items-center justify-between w-full p-4 border-t border-[#eee]"
  //             >
  //               <View className="flex-row flex-1 items-center gap-x-3">
  //                 <Search width={22} height={22} />
  //                 <Text className={`font-psemibold text-black text-base`}>
  //                   Mes recherches
  //                 </Text>
  //               </View>
  //               <BackIcon
  //                 width={16}
  //                 height={16}
  //                 className="rotate-180 stroke-black stroke-1 opacity-40"
  //               />
  //             </Pressable>
  //           </View>
  //           <View className="bg-white rounded-xl mt-8 overflow-hidden">
  //             {profile.slice(0, 4).map((item, index) => (
  //               <TouchableRipple
  //                 onPress={() =>
  //                   item.title == "Déconnexion"
  //                     ? setConfirmation(true)
  //                     : router.push(item.url)
  //                 }
  //                 key={index}
  //                 className="flex-row items-center justify-between w-full py-4 px-4"
  //               >
  //                 <>
  //                   <View className="flex-row items-center flex-1 gap-x-3">
  //                     {item.icon}
  //                     <Text
  //                       className={`font-psemibold text-${item.color} text-base`}
  //                     >
  //                       {item.title}
  //                     </Text>
  //                   </View>
  //                   {item.title !== "Déconnexion" ? (
  //                     <BackIcon
  //                       width={14}
  //                       height={14}
  //                       className="rotate-180 stroke-black stroke-1 opacity-40"
  //                     />
  //                   ) : null}
  //                 </>
  //               </TouchableRipple>
  //             ))}
  //           </View>
  //           <View className="bg-white rounded-xl mt-8 overflow-hidden">
  //             {profile.slice(4, 8).map((item, index) => (
  //               <TouchableRipple
  //                 onPress={() =>
  //                   item.title == "Déconnexion"
  //                     ? setConfirmation(true)
  //                     : router.push(item.url)
  //                 }
  //                 key={index}
  //                 className="flex-row items-center justify-between w-full py-4 px-4"
  //               >
  //                 <>
  //                   <View className="flex-row items-center flex-1 gap-x-3">
  //                     {item.icon}
  //                     <Text
  //                       className={`font-psemibold text-base text-${item.color}`}
  //                     >
  //                       {item.title}
  //                     </Text>
  //                   </View>
  //                   {item.title !== "Déconnexion" ? (
  //                     <BackIcon
  //                       width={14}
  //                       height={14}
  //                       className="rotate-180 stroke-black stroke-1 opacity-40"
  //                     />
  //                   ) : null}
  //                 </>
  //               </TouchableRipple>
  //             ))}
  //           </View>
  //         </ScrollView>
  //       ) : (
  //         <View className="bg-white h-full">
  //           <SearchBar containerStyle={"border-b border-[#e0e0e0]"} />
  //           <View className="items-center justify-center px-4 mt-16">
  //             <Text className="text-center text-2xl font-pbold">
  //               Opps , Vous devez vous connecter ❗
  //             </Text>
  //             <Text className="text-center text-base font-psemibold w-72 text-black-200 mt-2">
  //               Connectez-vous pour une expérience plus personnalisée.
  //             </Text>
  //             <Image
  //               source={images.loginCard}
  //               alt="login-image"
  //               className="w-64 h-64"
  //               resizeMode="contain"
  //             />
  //             <Button
  //               buttonColor="#F7B431"
  //               textColor="white"
  //               className="rounded-lg mt-5 px-8 py-1"
  //               onPress={() => router.push("/")}
  //             >
  //               <Text className="text-black-100 text-sm font-psemibold">
  //                 Se Connecter
  //               </Text>
  //             </Button>
  //           </View>
  //         </View>
  //       )}
  //       <ReactNativeModal
  //         isVisible={confirmation == true}
  //         animationIn="slideInUp"
  //         useNativeDriver={true}
  //         hideModalContentWhileAnimating={true}
  //         animationOutTiming={300}
  //       >
  //         <View className="bg-white px-7 py-9 justify-center items-center rounded-[28px] min-h-[300px]">
  //           <View className="bg-[#eeeeee] rounded-full p-4">
  //             <Logout height={30} width={30} className="rotate-180" />
  //           </View>
  //           <Text className="text-center text-xl font-psemibold tracking-tight mt-6">
  //             Es-tu sûr?
  //           </Text>
  //           <Text className="text-center text-base font-pmedium w-72 text-[#7c7c7e] mt-2">
  //             es-tu sûr de vouloir te déconnecter
  //           </Text>
  //           <View className="flex-row items-center justify-between w-full mt-8">
  //             <Button
  //               buttonColor="black"
  //               className="rounded-lg py-1 w-[49%]"
  //               onPress={() => handleLogout()}
  //             >
  //               <Text className="text-white text-sm font-psemibold">OK</Text>
  //             </Button>
  //             <Button
  //               buttonColor="#eeeeee"
  //               textColor="white"
  //               className="rounded-lg py-1 w-[49%]"
  //               onPress={() => setConfirmation(false)}
  //             >
  //               <Text className="text-black-100 text-sm font-psemibold">
  //                 Annuler
  //               </Text>
  //             </Button>
  //           </View>
  //         </View>
  //       </ReactNativeModal>
  //       <ReactNativeModal
  //         isVisible={active}
  //         animationIn="slideInUp"
  //         className="justify-end m-0"
  //         backdropOpacity={0.5}
  //         onBackdropPress={() => setActive(false)}
  //       >
  //         <View className="flex-1 justify-end">
  //           <View className="relative bg-white px-7 py-10 items-center rounded-t-[28px] min-h-[260px]">
  //             <View className="absolute inset-y-0 bg-[#b3b3b3] w-10 h-[2.5px] rounded-full top-3" />
  //             <Text className="text-center text-xl font-psemibold tracking-tight">
  //               Changer la photo de profil
  //             </Text>
  //             <Text className="text-center text-base font-pmedium w-72 text-[#7c7c7e] mt-2">
  //               Tu peux changer ta photo de profil à tout moment
  //             </Text>
  //             <View className="flex-row items-center justify-between w-full mt-8">
  //               <Button
  //                 buttonColor="black"
  //                 className="rounded-lg py-1 w-[49%]"
  //                 onPress={() => {
  //                   // setActive(false);
  //                   pickImage("gallery");
  //                 }}
  //               >
  //                 <Text className="text-white text-sm font-psemibold">
  //                   Galerie
  //                 </Text>
  //               </Button>
  //               <Button
  //                 buttonColor="#eeeeee"
  //                 textColor="white"
  //                 className="rounded-lg py-1 w-[49%]"
  //                 onPress={() => {
  //                   // setActive(false);
  //                   pickImage("camera");
  //                 }}
  //               >
  //                 <Text className="text-black-100 text-sm font-psemibold">
  //                   Appareil photo
  //                 </Text>
  //               </Button>
  //             </View>
  //           </View>
  //         </View>
  //       </ReactNativeModal>
  //       {loading && (
  //         <View className="absolute top-0 bg-white opacity-40 w-full h-full justify-center items-center ">
  //           <ActivityIndicator size="large" />
  //         </View>
  //       )}
  //       <AnimatePresence mode="wait">
  //         {alert.show && (
  //           <Toast
  //             {...alert}
  //             hideAlert={hideAlert}
  //             style={Platform.OS === "ios" ? "bottom-[90px] " : "bottom-[68px]"}
  //           />
  //         )}
  //       </AnimatePresence>
  //     </SafeAreaView>
  //   );
};

export default Profile;
