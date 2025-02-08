import {
  ActivityIndicator,
  Image,
  Keyboard,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../../constants";
import FormField from "./FormField";
import CustomButton from "../../components/CustomButton";
import { Link, Redirect, router } from "expo-router";
import { loadUser, login } from "../../services/AuthService";
import AuthContext from "../../context/AuthContext";
// import { IconButton } from "react-native-paper";
// import Alert from "../../components/Alert";
// import { AnimatePresence } from "moti";
// import { useAlertContext } from "../../context/AlertContext";
import Verify from "./Verify";

const SignIn = () => {
  //   const { setUser } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("");

  //   const { alert, showAlert, hideAlert } = useAlertContext();
  const submit = async () => {
    // setIsLoading(true);
    // Keyboard.dismiss();
    // setErrors({});
    // try {
    //   //login && getToken
    //   await login({
    //     email: form.email,
    //     password: form.password,
    //     device_name: `${Platform.OS} ${Platform.Version}`,
    //   });
    //   //getUser
    //   const user = await loadUser();
    //   setUser(user);
    //   showAlert({
    //     show: true,
    //     text: "Connecté avec succès",
    //     type: "success",
    //   });
    //   setTimeout(() => {
    //     hideAlert();
    //   }, 4000);
    //   setIsLoading(false);
    // } catch (error) {
    //   if (error.response.status === 422) {
    //     setErrors(error.response.data.errors);
    //   } else if (error.response.status === 400) {
    //     showAlert({
    //       show: true,
    //       text: error.response.data.message,
    //       type: "danger",
    //     });
    //     setTimeout(() => {
    //       hideAlert();
    //     }, 4000);
    //   } else if (error.response.data.extra.error.type == "unverified") {
    //     setIsOpen(true);
    //     setUrl(error.response.data.extra.error.button.url);
    //   }
    //   setIsLoading(false);
    // }
  };
  return (
    <SafeAreaView className="bg-white h-full">
      {/* <ScrollView contentContainerStyle={{ height: "100%" }}> */}
      {/* <IconButton
        icon={"arrow-left"}
        className="top-2"
        onPress={() => router.back()}
      /> */}
      {/* <BackIcon width={33} height={33} /> */}
      <View className="relative w-full justify-start items-start px-5 mt-8">
        <Image
          source={images.logo}
          className="w-[140px] h-[50px]"
          resizeMode="contain"
        />
        <Text className="text-xl font-psemibold mt-8">
          Connectez-vous avec email
        </Text>
        <FormField
          title="Email"
          placeholder="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-6"
          keyboardType="email-address"
          errors={errors.email}
        />
        <FormField
          title="Password"
          placeholder="Mote de passe"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-4"
          errors={errors.password}
        />
        <Link
          href="#"
          className="mt-5 text-sm text-center font-pmedium text-[#dd2911]"
        >
          Mot de passe oublié?
        </Link>
        <CustomButton
          title={"S'identifier"}
          handlePress={submit}
          containerStyle="w-full mt-5 disbaled"
          isLoading={isLoading}
        />
      </View>
      <Verify isOpen={isOpen} setIsOpen={setIsOpen} url={url} />
      {/* </ScrollView> */}
      {/* <AnimatePresence mode="wait">
        {alert.show && <Alert {...alert} hideAlert={hideAlert} />}
      </AnimatePresence> */}
      {isLoading && (
        <View className="absolute top-0 bg-white opacity-100 w-full h-full justify-center items-center ">
          <ActivityIndicator size="large" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SignIn;
