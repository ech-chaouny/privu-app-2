// import {
//   ActivityIndicator,
//   Keyboard,
//   Platform,
//   ScrollView,
//   Text,
//   View,
// } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import axios from "../../utils/axios";
// import FormField from "./FormField";
// import CustomButton from "../../components/CustomButton";
// import { Link, router } from "expo-router";
// import { IconButton } from "react-native-paper";
// import Alert from "../../components/Alert";
// import { AnimatePresence } from "moti";
// import { useAlertContext } from "../../context/AlertContext";
// import Verify from "./Verify";

// const SignUp = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     password_confirmation: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [isOpen, setIsOpen] = useState(false);
//   const [url, setUrl] = useState("");

//   const { alert, showAlert, hideAlert } = useAlertContext();
//   const submit = async () => {
//     setIsLoading(true);
//     Keyboard.dismiss();
//     setErrors({});
//     try {
//       //login && getToken
//       const response = await axios.post("/users", {
//         country_code: "FR",
//         language_code: "fr",
//         name: form.name,
//         email: form.email,
//         phone: form.phone,
//         phone_country: "fr",
//         password: form.password,
//         accept_terms: true,
//         password_confirmation: form.password_confirmation,
//         device_name: `${Platform.OS} ${Platform.Version}`,
//       });
//       if (response.data.success === true) {
//         setUrl(
//           `https://privu.fr/api/users/${response.data.result.id}/verify/resend/email`
//         );
//         setIsOpen(true);
//       }
//     } catch (error) {
//       if (error.response.status === 422) {
//         setErrors(error.response.data.errors);
//       } else if (error.response.status === 400) {
//         showAlert({
//           show: true,
//           text: error.response.data.message,
//           type: "danger",
//         });
//         setTimeout(() => {
//           hideAlert();
//         }, 4000);
//       }
//       setIsLoading(false);
//     }
//   };
//   return (
//     <SafeAreaView className="bg-white h-full">
//       {/* <ScrollView contentContainerStyle={{ height: "100%" }}> */}
//       <IconButton
//         icon={"arrow-left"}
//         className="top-2"
//         onPress={() => router.back()}
//       />
//       {/* <BackIcon width={33} height={33} /> */}
//       <ScrollView className="h-full pt-4">
//         <View className="relative w-full justify-start items-start px-5">
//           {/* <Image
//           source={images.logo}
//           className="w-[140px] h-[50px]"
//           resizeMode="contain"
//         /> */}
//           <Text className="w-full text-[22px] text-center font-psemibold">
//             Créer un compte
//           </Text>
//           <FormField
//             title="Name"
//             placeholder="Nom & Prénom"
//             value={form.name}
//             handleChangeText={(e) => setForm({ ...form, name: e })}
//             otherStyles="mt-6"
//             keyboardType="nom-prenom"
//             errors={errors.name}
//           />
//           <FormField
//             title="Email"
//             placeholder="Email"
//             value={form.email}
//             handleChangeText={(e) => setForm({ ...form, email: e })}
//             otherStyles="mt-4"
//             keyboardType="email-address"
//             errors={errors.email}
//           />
//           <FormField
//             title="phone"
//             placeholder="Numéro de téléphone"
//             value={form.phone}
//             handleChangeText={(e) => setForm({ ...form, phone: e })}
//             otherStyles="mt-4"
//             keyboardType="email-address"
//             errors={errors.phone}
//           />
//           <FormField
//             title="Password"
//             placeholder="Mote de passe"
//             value={form.password}
//             handleChangeText={(e) => setForm({ ...form, password: e })}
//             otherStyles="mt-4"
//             errors={errors.password}
//           />
//           <FormField
//             title="Password"
//             placeholder="Confirmation Mot de passe"
//             value={form.password_confirmation}
//             handleChangeText={(e) =>
//               setForm({ ...form, password_confirmation: e })
//             }
//             otherStyles="mt-4"
//             errors={errors.password_confirmation}
//           />
//           <CustomButton
//             title={"S'inscrire"}
//             handlePress={submit}
//             containerStyle="w-full mt-5 disbaled"
//             isLoading={isLoading}
//           />
//           <Text className="text-white-200 font-pregular w-full text-xs mt-5 text-center pb-10">
//             En me connectant, J'accepte les{" "}
//             <Link className="text-[#1C5CC5] underline" href="#">
//               Termes et Conditions
//             </Link>{" "}
//             et la{" "}
//             <Link className="text-[#1C5CC5] underline" href="#">
//               Politique de confidentialité
//             </Link>
//           </Text>
//         </View>
//       </ScrollView>
//       <Verify isOpen={isOpen} setIsOpen={setIsOpen} url={url} />
//       {/* </ScrollView> */}
//       <AnimatePresence mode="wait">
//         {alert.show && <Alert {...alert} hideAlert={hideAlert} />}
//       </AnimatePresence>
//       {isLoading && (
//         <View className="absolute top-0 bg-white opacity-100 w-full h-full justify-center items-center ">
//           <ActivityIndicator size="large" />
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// export default SignUp;
