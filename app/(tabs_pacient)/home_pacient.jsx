import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import HomeButton from "../../components/HomeButton";
import { router } from "expo-router";
import LogOutButton from "../../components/LogOutButton";
import { getLoggedUser_Pacient } from "../../lib/database";

const home = () => {
  const loggedUser = getLoggedUser_Pacient();

  return (
    <SafeAreaView className="bg-primary-white h-full">
      <ScrollView>
        <View className="w-full px-4">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-secondary font-pregular text-3xl">Buna ziua</Text>
              <Text className="text-secondary font-psemibold text-3xl">{loggedUser.fullName}</Text>
            </View>

            <View className="flex-row">
              <LogOutButton />
            </View>
          </View>
          <CustomButton
            title="Doctori"
            primary={true}
            containerStyles="w-full mt-7 h-[200px]"
            textStyles="text-4xl"
            handlePress={() => router.push("/doctors_page")}
          />
          <CustomButton
            title="Medicamente"
            primary={true}
            containerStyles="w-full mt-7 h-[200px]"
            textStyles="text-4xl"
            handlePress={() => router.push("/medication_page")}
          />
        </View>
      </ScrollView>
      <HomeButton isPacient={true} />
    </SafeAreaView>
  );
};

export default home;
