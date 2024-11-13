import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { getUserById } from "../../lib/database";
import HomeButton from "../../components/HomeButton";

const profile_page = () => {
  const { profileId } = useLocalSearchParams();
  const user = getUserById(Number(profileId));

  return (
    <SafeAreaView className="h-full bg-primary-white">
      <ScrollView>
        <View className="justify-center items-center">
          <Text className="text-secondary text-4xl">{user.fullName}</Text>
          <Text className="text-secondary text-2xl">{user.id}</Text>
          <Text className="text-secondary text-2xl">{user.unreadMessages}</Text>
        </View>
      </ScrollView>
      <HomeButton />
    </SafeAreaView>
  );
};

export default profile_page;
