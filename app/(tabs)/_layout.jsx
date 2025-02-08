import { View, Text, Image, Platform } from "react-native";
import React, { useContext } from "react";
import { Tabs, router } from "expo-router";
import { icons } from "../../constants";
// import AuthContext from "../../context/AuthContext";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center w-12">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${
          focused
            ? "font-pmedium text-[#2C2C2C]"
            : "font-pregular text-white-200 "
        } text-xs mt-0.5`}
      >
        {name}
      </Text>
    </View>
  );
};
const TabsLayout = () => {
  // const { user } = useContext(AuthContext);

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#2C2C2C",
        tabBarInactiveTintColor: "#b4b4b4",
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: "#EAEAEA",
          height: Platform.select({
            ios: 85,
            android: 60,
          }),
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Accueil"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favoris"
        options={{
          title: "Favoris",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.heart}
              color={color}
              name="Favoris"
              focused={focused}
            />
          ),
        }}
        // listeners={() => ({
        //   tabPress: (e) => {
        //     if (!user) {
        //       e.preventDefault();
        //       router.push("/");
        //     }
        //   },
        // })}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={"#FFA930"}
              name="Vendre"
              focused={focused}
            />
          ),
        }}
        // listeners={() => ({
        //   tabPress: (e) => {
        //     if (!user) {
        //       e.preventDefault();
        //       router.push("/");
        //     }
        //   },
        // })}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.chat}
              color={color}
              name="Chat"
              focused={focused}
            />
          ),
        }}
        // listeners={() => ({
        //   tabPress: (e) => {
        //     if (!user) {
        //       e.preventDefault();
        //       router.push("/");
        //     }
        //   },
        // })}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.user}
              color={color}
              name="Compte"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
