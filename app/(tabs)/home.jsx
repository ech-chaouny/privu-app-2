import { View, Text, ScrollView, Image, Platform } from "react-native";
import { Link } from "expo-router";
// import { TouchableRipple } from "react-native-paper";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { router } from "expo-router";

// import { categories } from "../../constants";
// import Listings from "../../components/Listings";
// import SearchBar from "../../components/SearchBar";

// import { useAlertContext } from "../../context/AlertContext";
// import { AnimatePresence } from "moti";
// import Toast from "../../components/Toast";

// import { useState } from "react";

const Home = () => {
  //   const { alert, hideAlert } = useAlertContext();
  //   const [openFilter, setOpenFilter] = useState(false);

  return (
    <View></View>
    //     <SafeAreaView className="bg-white h-screen">
    //       <SearchBar openFilter={openFilter} setOpenFilter={setOpenFilter} />
    //       <ScrollView contentContainerStyle={{ height: "auto" }}>
    //         <View className="relative w-full h-full pb-4 mb-12">
    //           <View className="flex-wrap flex-row justify-between gap-y-2 px-4">
    //             {categories.map((category, index) => (
    //               <View
    //                 key={index}
    //                 //onPress={() => router.push(`/categroy/${category.slug}`)}
    //                 className="border w-[32%] h-[95px] border-white-100 rounded-lg overflow-hidden"
    //               >
    //                 <TouchableRipple
    //                   className="w-full h-full justify-center items-center px-2"
    //                   onPress={() => router.push(`/search?c=${category.id}`)}
    //                 >
    //                   <>
    //                     <Image
    //                       source={category.image}
    //                       className="w-10 h-10"
    //                       resizeMode="contain"
    //                     />
    //                     <Text className="text-[10px] text-center font-psemibold mt-1">
    //                       {category.name}
    //                     </Text>
    //                   </>
    //                 </TouchableRipple>
    //               </View>
    //             ))}
    //           </View>
    //           {/* <Listings
    //             title={"Annonces Par Vidéo"}
    //             category={null}
    //             parent={14}
    //             catSlug="immobilier"
    //           /> */}
    //           <Listings
    //             title={"Immobilières Populaires"}
    //             category={null}
    //             parent={14}
    //           />
    //           <Listings title={"Voitures Populaires"} category={2} parent={1} />
    //           <Listings
    //             title={"Multimédia Populaires"}
    //             category={null}
    //             parent={9}
    //           />
    //           <Listings
    //             title={"Electromenagers Populaires"}
    //             category={null}
    //             parent={30}
    //           />
    //         </View>
    //       </ScrollView>
    //       <AnimatePresence mode="wait">
    //         {alert.show && (
    //           <Toast
    //             {...alert}
    //             hideAlert={hideAlert}
    //             style={Platform.OS === "ios" ? "bottom-[90px]" : "bottom-[68px]"}
    //           />
    //         )}
    //       </AnimatePresence>
    //       {/* <Filter openFilter={openFilter} setOpenFilter={setOpenFilter} /> */}
    //     </SafeAreaView>
  );
};

export default Home;
