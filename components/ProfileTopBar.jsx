import { View, Text, Image } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { TouchableOpacity } from "react-native";

const ProfileTopBar = ({ user }) => {
  return (
    <View className="bg-primary-red w-full h-[190px] shadow-xl shadow-black">
      <TouchableOpacity activeOpacity={0.7} className="px-4 justify-left items-center flex-row pt-6">
        <Image source={user.icon} className="w-16 h-16 mr-4" resizeMode="contain" />
        <Text className="text-4xl font-psemibold text-primary-white">{user.fullName}</Text>
      </TouchableOpacity>
      <View className="px-4 justify-between items-center flex-row pt-8">
        <CustomButton title="Apel Audio" primary={false} textStyles="text-3xl px-4" containerStyles="shadow-lg shadow-black" />
        <CustomButton title="Apel Video" primary={false} textStyles="text-3xl px-4" containerStyles="shadow-lg shadow-black" />
      </View>
    </View>
  );
};

export default ProfileTopBar;
