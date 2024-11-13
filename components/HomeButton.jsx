import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { icons } from "../constants";
import { router } from "expo-router";
import { useRoute } from "@react-navigation/native";

const HomeButton = ({ isPacient }) => {
  const isOnHomePage = useRoute().name;

  return (
    <TouchableOpacity
      className="bg-primary-white h-[100px] w-full"
      activeOpacity={0.7}
      onPress={() =>
        isOnHomePage !== "home_doctor" && isOnHomePage !== "home_pacient"
          ? isPacient
            ? router.replace("/home_pacient")
            : router.replace("/home_doctor")
          : ""
      }
    >
      <View className="h-1 w-full bg-secondary"></View>
      <View className="justify-center items-center h-full flex-row">
        <Text className="text-3xl text-primary-red font-pbold pr-4">Acasa</Text>
        <Image source={icons.home} tintColor={"red"} className="w-10 h-10" resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );
};

export default HomeButton;
