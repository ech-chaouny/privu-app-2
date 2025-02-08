import { SplashScreen, Stack } from "expo-router";
import "./globals.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Proximanova-Black": require("../assets/fonts/proximanova-black.otf"),
    "Proximanova-ExtraBold": require("../assets/fonts/proximanova-extrabold.otf"),
    "Proximanova-Bold": require("../assets/fonts/proximanova-bold.otf"),
    "Proximanova-SemiBold": require("../assets/fonts/proximanova-semibold.otf"),
    "Proximanova-Medium": require("../assets/fonts/proximanova-medium.otf"),
    "Proximanova-Regular": require("../assets/fonts/proximanova-regular.ttf"),
    "Proximanova-Light": require("../assets/fonts/proximanova-light.otf"),
  });
  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      {/*<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  <Stack.Screen name="create" options={{ headerShown: false }} />
  <Stack.Screen
    name="edit/[post_id]"
    options={{ headerShown: false }}
  />
  <Stack.Screen name="edit/pictures" options={{ headerShown: false }} />
  <Stack.Screen name="account" options={{ headerShown: false }} />
  <Stack.Screen name="details/[id]" options={{ headerShown: false }} />
  <Stack.Screen name="search/index" options={{ headerShown: false }} />
  <Stack.Screen name="details/Modal" options={{ headerShown: false }} /> */}
    </Stack>
  );
}
