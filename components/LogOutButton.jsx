import { Image, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import { icons } from "../constants";

const LogOutButton = () => {
  return (
    <TouchableOpacity className="items-center flex-row" onPress={() => router.replace("/")}>
      <Text className="text-2xl text-primary-red font-psemibold pr-4">Log Out</Text>
      <Image source={icons.logout} className="w-10 h-10" resizeMode="contain" tintColor={"red"} />
    </TouchableOpacity>
  );
};

export default LogOutButton;
