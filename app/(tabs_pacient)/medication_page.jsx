import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeButton from "../../components/HomeButton";
import MedicinePopup from "../../components/MedicinePopup";
import CustomButton from "../../components/CustomButton";
import { getAssignedMedicine, setMedicineTakenToday } from "../../lib/database";

const MedicineTabs = ({ list }) => {
  return (
    <View className="w-full items-center">
      {list.map((medicine, index) => (
        <MedicinePopup
          key={index}
          name={medicine.name}
          frequency={medicine.frequency}
          dosage={medicine.dosage}
          takenToday={medicine.takenToday}
          handlePress={() => {
            setMedicineTakenToday(medicine.id);
          }}
          containerStyles="w-full m-4"
        />
      ))}
    </View>
  );
};

const medication_page = () => {
  const medicineList = getAssignedMedicine();
  return (
    <SafeAreaView className="bg-primary-white h-full">
      <Text className="text-secondary px-4 text-3xl font-pbold">Medicamente: {medicineList.length}</Text>
      <ScrollView>
        <View className="px-4 pt-4">
          <MedicineTabs list={medicineList} />
        </View>
      </ScrollView>
      <View className="h-[200px] bg-primary-white p-4">
        <CustomButton title="Arata prescriptia medicului" primary={true} textStyles="text-4xl" containerStyles="h-full" />
      </View>
      <HomeButton isPacient={true} />
    </SafeAreaView>
  );
};

export default medication_page;
