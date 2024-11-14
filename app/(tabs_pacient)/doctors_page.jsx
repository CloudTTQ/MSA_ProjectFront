import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfilePopup from "../../components/ProfilePopup";

import { getDoctors, getPacients, getUsers } from "../../lib/database";
import { router } from "expo-router";
import HomeButton from "../../components/HomeButton";

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

const doctors_page = () => {
  const profileList = getDoctors();
  return (
    <SafeAreaView className="bg-primary-white h-full">
      <Text className="text-secondary px-4 font-pbold text-3xl">Doctori: {profileList.length}</Text>
      <ScrollView>
        <View className="px-4 pt-4">
          <ProfileTabs list={profileList} />
        </View>
      </ScrollView>
      <HomeButton isPacient={true} />
    </SafeAreaView>
  );
};

export default doctors_page;
