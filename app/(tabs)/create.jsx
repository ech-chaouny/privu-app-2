// import {
//   View,
//   Text,
//   ScrollView,
//   Pressable,
//   ActivityIndicator,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import SearchInput from "../../components/SearchInput";
// import { IconButton, TouchableRipple } from "react-native-paper";
// import { icons } from "../../constants";
// import jsonData from "../../data/cities.json";
// import { router } from "expo-router";

const Create = () => {
  //   const [cities, setCities] = useState(jsonData);
  //   const [value, setValue] = useState("");
  //   const [selected, setSelected] = useState(null);
  //   const removeAccents = (str) =>
  //     str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove accents
  //   const handleChange = (e) => {
  //     setValue(e);
  //     const normalizedInput = removeAccents(e.toLowerCase());
  //     const filteredCities = jsonData.filter((city) =>
  //       removeAccents(city.name.toLowerCase()).includes(normalizedInput)
  //     );
  //     setCities(filteredCities);
  //   };
  //   return (
  //     <SafeAreaView className="bg-white h-full w-full">
  //       <IconButton
  //         className="absolute right-3 top-10"
  //         icon="close"
  //         onPress={() => router.replace("/")}
  //       />
  //       <View className="flex-col mt-16 px-4">
  //         <Text className="text-xl font-psemibold">Sélectionnez une ville</Text>
  //         <Text className="text-sm font-pmedium text-white-200">
  //           Où devrions-nous placer votre annonce ?
  //         </Text>
  //         <SearchInput
  //           containerStyle="rounded-[99px] h-[45px] px-4 mt-5"
  //           placeHolder={"Rechercher une ville"}
  //           handleChange={handleChange}
  //           value={value}
  //         />
  //       </View>
  //       <View className="flex-col mt-2">
  //         {cities.length === 0 ? (
  //           <View className="w-full items-center mt-10 px-5">
  //             <Text className="text-sm font-psemibold text-white-200">
  //               Cette ville n'existe pas.
  //             </Text>
  //             <Text className="text-sm font-psemibold text-white-200">
  //               Essayez d'entrer un autre nom de ville !
  //             </Text>
  //           </View>
  //         ) : (
  //           cities.slice(0, 10).map((city, index) => (
  //             <TouchableRipple
  //               key={index}
  //               onPress={() => {
  //                 {
  //                   setSelected(city.id),
  //                     router.push({
  //                       pathname: "create/category-step",
  //                       params: {
  //                         city_id: city.id,
  //                         city_name: city.name,
  //                         city_lat: city.latitude,
  //                         city_long: city.longitude,
  //                       },
  //                     });
  //                 }
  //               }}
  //               className={`px-5 ${selected == city.id ? "bg-[#eee]" : ""}`}
  //             >
  //               <View className="border-b border-[#eee] py-4 px-2">
  //                 <Text className="text-sm font-pmedium">{city.name}</Text>
  //               </View>
  //             </TouchableRipple>
  //           ))
  //         )}
  //       </View>
  //     </SafeAreaView>
  //   );
};

export default Create;
