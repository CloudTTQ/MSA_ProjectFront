import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import HomeButton from "../../components/HomeButton";
import { router } from "expo-router";

const home = () => {
  return (
    <SafeAreaView className="bg-primary-white h-full">
      <ScrollView>
        <View className="w-full px-4">
          <CustomButton title="Doctor" primary={true} containerStyles="w-full mt-7 h-[200px]" textStyles="text-4xl" />
          <CustomButton
            title="Medicamente"
            primary={true}
            containerStyles="w-full mt-7 h-[200px]"
            textStyles="text-4xl"
            handlePress={() => router.push("/medication_page")}
          />
        </View>
      </ScrollView>
      <HomeButton />
    </SafeAreaView>
  );
};

export default home;
