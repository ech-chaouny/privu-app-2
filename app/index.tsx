import { Image, Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../constants";
import { Link, Redirect, useRouter } from "expo-router";
import SocialLinks from "../components/SocialLinks";
import Progress from "../components/Progress";
import { useEffect, useState } from "react";

import * as SecureStore from "expo-secure-store";
import * as webBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

// andriod

webBrowser.maybeCompleteAuthSession();

export default function Index() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId:
      "1020760646859-mkr4vbsie792hhoovrdkblte18bs2qn7.apps.googleusercontent.com",
    androidClientId:
      "1020760646859-ud0aeo4qhpnvfa18rcpp6bq4o2eg1ok0.apps.googleusercontent.com",
    iosClientId:
      "1020760646859-390i6832b7botodqh8fdkf8mm8p3ol00.apps.googleusercontent.com",
  });
  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  async function handleSignInWithGoogle() {
    // const user = await SecureStore.getItemAsync("@user");
    const user = null;
    if (!user) {
      if (response?.type === "success") {
        await getUserInfo(response.authentication?.accessToken);
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  }
  const getUserInfo = async (token: any) => {
    if (!token) return null;
    try {
      const response = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const user = await response.json();
      // await SecureStore.setItemAsync("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerStyle={{ height: "auto" }}>
        <View className="relative w-full h-full py-5 items-center px-5">
          <Image
            source={images.logo}
            className="w-[140px] h-[50px]"
            resizeMode="contain"
          />
          {/* <IconButton
            icon="close"
            onPress={() =>
              router.canGoBack() ? router.dismiss() : router.replace("/home")
            }
            iconColor={"#6A6A6A"}
            size={24}
            className="absolute right-3 top-4"
          /> */}

          <View className="items-center mb-5 mt-5">
            <Image
              source={images.card}
              className="w-28 h-[200px] "
              resizeMode="contain"
            />
            <Text className="text-lg text-center font-pbold">
              S 'identifier pour poster une annonce
            </Text>
          </View>
          {/* <SocialLinks
            title={"Continuer avec Facebook"}
            handlePress={() => {}}
            Icon={icons.facebook}
            containerStyle="w-full"
          /> */}
          <Text>{JSON.stringify(userInfo)}</Text>
          <SocialLinks
            title={"Continuer avec Google"}
            handlePress={() => promptAsync()}
            Icon={icons.google}
            containerStyle="w-full mt-3"
          />
          {/* {Platform.OS === "ios" ? ( */}
          <SocialLinks
            title={"Continuer avec Apple"}
            handlePress={() => {
              setActive(true);
            }}
            Icon={icons.apple}
            containerStyle="w-full mt-3"
          />
          {/* ) : null} */}

          <SocialLinks
            title={"Continuer avec Email"}
            handlePress={() => router.push("(auth)/sign-in")}
            Icon={icons.email}
            containerStyle="w-full mt-3"
          />

          <Link
            href="(auth)/sign-up"
            className="mt-8 text-sm text-center font-psemibold text-[#dd2911]"
          >
            Je n'ai pas de compte? Crée-en un
          </Link>
          <Text className="text-white-200 font-pregular text-[10px] mt-5 text-center">
            En me connectant, J'accepte les{" "}
            <Link className="text-[#1C5CC5] underline" href="#">
              Termes et Conditions
            </Link>{" "}
            et la{" "}
            <Link className="text-[#1C5CC5] underline" href="#">
              Politique de confidentialité
            </Link>
          </Text>
        </View>
        <Progress active={active} setActive={setActive} />
      </ScrollView>
      {/* {isLoading && (
        <View className="absolute top-0 bg-white opacity-100 w-full h-full justify-center items-center ">
          <ActivityIndicator size="large" />
          <Text className="font-pmedium mt-2">Chargement...</Text>
        </View>
      )} */}
    </SafeAreaView>
  );
}
