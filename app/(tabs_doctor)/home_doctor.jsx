import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfilePopup from "../../components/ProfilePopup";

import { getPacients, getUsers } from "../../lib/database";
import { router } from "expo-router";
import HomeButton from "../../components/HomeButton";
import LogOutButton from "../../components/LogOutButton";

const ProfileTabs = ({ list }) => {
  return (
    <View className="w-full items-center">
      {list.map((profile, index) => (
        <ProfilePopup
          key={index}
          name={profile.fullName}
          icon={profile.icon}
          isOnline={profile.isOnline}
          unreadMessages={profile.unreadMessages}
          handlePress={() => {
            router.push(`/profile_page/${profile.id}`);
          }}
          containerStyles="w-full m-4"
        />
      ))}
    </View>
  );
};

const home = () => {
  const profileList = getPacients();
  return (
    <SafeAreaView className="bg-primary-white h-full">
      <View className="flex-row items-center justify-between">
        <Text className="text-secondary px-4 font-pbold text-3xl">Pacienti: {profileList.length}</Text>
        <View className="flex-row">
          <LogOutButton />
        </View>
      </View>
      <ScrollView>
        <View className="px-4 pt-4">
          <ProfileTabs list={profileList} />
        </View>
      </ScrollView>
      <HomeButton />
    </SafeAreaView>
  );
};

export default home;
