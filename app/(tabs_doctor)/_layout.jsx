import { StatusBar } from "expo-status-bar";
import React from "react";
import { Stack } from "expo-router";

const tabs_doctor = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="home_doctor" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#F7F7F7" style="dark" />
    </>
  );
};

export default tabs_doctor;
