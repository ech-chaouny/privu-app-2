import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { Redirect, router, Stack } from "expo-router";
// import AuthContext from "../../context/AuthContext";

const AuthLayout = () => {
  // const { user, isLoading } = useContext(AuthContext);
  // if (user || isLoading) return <Redirect href="/home" />;

  return (
    <>
      <Stack>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default AuthLayout;
