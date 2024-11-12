import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

import { icons } from "../constants";

const ProfilePopup = ({ name, icon, isOnline, unreadMessages, containerStyles, handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`bg-primary-white rounded-xl min-h-[62px] justify-between items-center flex-row shadow-lg shadow-black p-4 ${containerStyles}`}
    >
      <View className="items-center flex-row">
        <View>
          <Image source={icon} tintColor={"secondary"} resizeMode="contain" className="w-10 h-10" />
          {isOnline && (
            <Image
              source={icons.plus}
              tintColor={"green"}
              resizeMode="contain"
              className="w-4 h-4 absolute -bottom-1.5 -right-1"
            />
          )}
        </View>
        <Text className={`text-secondary font-psemibold text-xl pl-4`}>{name}</Text>
      </View>
      {unreadMessages > 0 && (
        <View>
          <Image source={icons.plus} tintColor={"red"} resizeMode="contain" className="w-6 h-6" />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ProfilePopup;
