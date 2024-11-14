import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { getUserById } from "../../lib/database";
import HomeButton from "../../components/HomeButton";
import ProfileTopBar from "../../components/ProfileTopBar";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../../components/CustomButton";

const profile_page = () => {
  const { profileId } = useLocalSearchParams();
  const user = getUserById(Number(profileId));

  return (
    <SafeAreaView className="h-full bg-primary-white">
      <ProfileTopBar user={user} />
      <ScrollView>
        <View className="justify-center items-left px-4">
          <View className="flex-row pt-6">
            <Text className="font-pbold text-2xl pr-2">Email:</Text>
            <Text className="font-pregular text-2xl">{user.email}</Text>
          </View>
          <View className="flex-row pt-6">
            <Text className="font-pbold text-2xl pr-2">Varsta:</Text>
            <Text className="font-pregular text-2xl">{user.age}</Text>
          </View>
          <View className="flex-row pt-6">
            <Text className="font-pbold text-2xl pr-2">Adresa:</Text>
            <Text className="font-pregular text-2xl">{user.address}</Text>
          </View>
        </View>
      </ScrollView>
      {user.isPacient && (
        <View className="p-4">
          <CustomButton
            title="Incarca prescriptia medicala"
            primary={true}
            textStyles="text-4xl px-4"
            containerStyles="h-[100px]"
          />
        </View>
      )}

      <HomeButton isPacient={user.isPacient ? false : true} />
    </SafeAreaView>
  );
};

export default profile_page;
