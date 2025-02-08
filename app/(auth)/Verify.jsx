import {
  View,
  Text,
  Modal,
  Image,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from "react-native";
import React, { useState } from "react";
// import { IconButton } from "react-native-paper";
// import { images } from "../../constants";
// import axios from "axios";
// import { useAlertContext } from "../../context/AlertContext";
// import Alert from "../../components/Alert";
// import { AnimatePresence } from "moti";
// import { router } from "expo-router";
// import Toast from "../../components/Toast";

const Verify = ({ isOpen, setIsOpen, url }) => {
  // const { alert, showAlert, hideAlert } = useAlertContext();

  // const [loading, setLoading] = useState(false);

  // const sendEmail = async () => {
  //   setLoading(true);
  //   //send email
  //   try {
  //     const respone = await axios.get(url, {
  //       headers: {
  //         Accept: "application/json",
  //         "X-AppType": "docs",
  //         "X-AppApiToken": "Z2hFM2VNZ1NMQkFyQk5lNmxDc0xaSDlCdk1kODdaUXA=",
  //       },
  //     });
  //     setLoading(false);
  //     if (respone.data.success === true) {
  //       showAlert({
  //         show: true,
  //         text: respone.data.message,
  //         type: "success",
  //       });
  //       setTimeout(() => {
  //         hideAlert();
  //       }, 4000);
  //     }
  //   } catch (error) {
  //     console.log(error.respone);
  //   }
  // };
  return (
    <></>
    // <Modal
    //   visible={isOpen}
    //   animationType="slide"
    //   presentationStyle="pageSheet"
    //   onRequestClose={() => {
    //     setIsOpen(false);
    //     router.replace("/");
    //   }}
    //   className="h-full w-full bg-white"
    // >
    //   <View className="w-full items-end mt-5 px-2">
    //     <IconButton
    //       icon={"close"}
    //       onPress={() => {
    //         setIsOpen(false);
    //         router.replace("/");
    //       }}
    //     />
    //   </View>
    //   <View className="mt-3 justify-center items-center px-5">
    //     <Image
    //       source={images.verify_email}
    //       className="w-60 h-40"
    //       resizeMode="contain"
    //     />
    //     <Text
    //       className="font-pbold text-center text-2xl w-80"
    //       style={{ lineHeight: 30 }}
    //     >
    //       Nous vous avons envoyé un e-mail de confirmation
    //     </Text>
    //     <Text
    //       className="text-center font-pmedium text-base w-80 mt-6"
    //       style={{ lineHeight: 20 }}
    //     >
    //       Cliquez sur le lien dans l'e-mail pour vérifier votre compte
    //     </Text>
    //     <Text
    //       className="text-center font-pmedium text-base w-[300px] mt-4"
    //       style={{ lineHeight: 20 }}
    //     >
    //       Nous l'avons envoyé à partir de l'adresse e-mail{" "}
    //       <Text className="text-base font-psemibold">noreply@privu.ma</Text>
    //     </Text>
    //     <TouchableOpacity
    //       activeOpacity={0.7}
    //       onPress={() => sendEmail()}
    //       className="mt-4"
    //     >
    //       <Text className="text-center font-psemibold text-blue-500 text-base">
    //         Re-envoyer le lien
    //       </Text>
    //     </TouchableOpacity>
    //   </View>
    //   <AnimatePresence mode="wait">
    //     {alert.show && (
    //       <Toast
    //         {...alert}
    //         hideAlert={hideAlert}
    //         style={Platform.OS === "ios" ? "bottom-[90px]" : "bottom-[68px]"}
    //       />
    //     )}
    //   </AnimatePresence>
    //   {loading && (
    //     <View className="absolute top-0 left-0 w-full h-full bg-white opacity-80 justify-center items-center">
    //       <ActivityIndicator size="large" color="#FFA930" />
    //     </View>
    //   )}
    // </Modal>
  );
};

export default Verify;
