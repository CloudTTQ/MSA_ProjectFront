import { StatusBar } from "expo-status-bar";
import React from "react";
import { Stack } from "expo-router";

const tabs_pacient = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="home_pacient" options={{ headerShown: false }} />
        <Stack.Screen name="medication_page" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#F7F7F7" style="dark" />
    </>
  );
};

export default tabs_pacient;
