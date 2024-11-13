import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { icons } from "../constants";

const MedicinePopup = ({ name, frequency, dosage, takenToday, containerStyles, handlePress }) => {
  const [tintColor, setTintColor] = useState(takenToday ? "green" : "red");

  const changeTintColor = () => {
    const newColor = tintColor === "red" ? "green" : "red";
    setTintColor(newColor);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        changeTintColor();
        handlePress();
      }}
      className={`bg-primary-white rounded-xl min-h-[62px] justify-between items-center flex-row shadow-lg shadow-black p-4 ${containerStyles}`}
    >
      <View>
        <Text className={`text-secondary font-pbold text-2xl`}>{name}</Text>
        <Text className={`text-secondary font-pregular text-xl`}>-De cate ori pe zi: {frequency}</Text>
        <Text className={`text-secondary font-pregular text-xl`}>-Cate doze la administrare: {dosage}</Text>
      </View>
      <View>
        <Image source={icons.heart} tintColor={tintColor} className="w-12 h-12" resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );
};

export default MedicinePopup;
