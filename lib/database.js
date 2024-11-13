import { icons } from "../constants";

const userList = [
  //TEMPORARY LIST TO TEST FEATURES BEFORE BACKEND IS PLEMENTED
  {
    id: 1,
    fullName: "Ionut Lenghel",
    isPacient: false,
    icon: icons.profile,
    isOnline: true,
    unreadMessages: 3,
    email: "ionut@shao.com",
    phone: "0725 555 555",
    address: "Shao Avenue 37",
    specialization: "Shawarmar",
    availableHours: "9-17",
  },
  {
    id: 2,
    fullName: "Adolf Hitler",
    isPacient: false,
    icon: icons.profile,
    isOnline: true,
    unreadMessages: 7,
    email: "hitler@poland.com",
    phone: "0726 666 666",
    address: "Stalingrad 24",
    specialization: "Warmonger",
    availableHours: "9-20",
  },
  {
    id: 3,
    fullName: "Jerry",
    isPacient: true,
    icon: icons.profile,
    isOnline: false,
    unreadMessages: 4,
    email: "jerry@show.com",
    phone: "0722 222 223",
    address: "Richerson 45",
    age: "10",
    healthConditions: "Catisis",
  },
  {
    id: 4,
    fullName: "Tom",
    isPacient: true,
    icon: icons.profile,
    isOnline: true,
    unreadMessages: 0,
    email: "tom@show.com",
    phone: "0722 222 222",
    address: "Richerson 45",
    age: "10",
    healthConditions: "Mousephobia",
  },
  {
    id: 5,
    fullName: "Laurentiu",
    isPacient: true,
    icon: icons.profile,
    isOnline: true,
    unreadMessages: 0,
    email: "laoo@boss.com",
    phone: "0711 111 111",
    address: "Timisoara 23",
    age: "22",
    healthConditions: "Too much Tuica",
  },
  { id: 6, fullName: "Rici", isPacient: false, icon: icons.profile, isOnline: true, unreadMessages: 1 },
  { id: 7, fullName: "Stefan", isPacient: true, icon: icons.profile, isOnline: true, unreadMessages: 0 },
  { id: 8, fullName: "Alex", isPacient: true, icon: icons.profile, isOnline: false, unreadMessages: 0 },
  { id: 9, fullName: "Mihai", isPacient: true, icon: icons.profile, isOnline: false, unreadMessages: 0 },
  { id: 10, fullName: "Nibbles", isPacient: false, icon: icons.profile, isOnline: false, unreadMessages: 0 },
];

const medicineList = [
  //frequency: how many times a day, dosage: how many in each take, duration: how many weeks
  { id: 1, name: "Paracetamol", assignedTo: 3, prescriptionId: 4, frequency: 2, dosage: 1, takenToday: true },
  { id: 2, name: "Paracetamol", assignedTo: 3, prescriptionId: 4, frequency: 2, dosage: 2, takenToday: false },
  { id: 3, name: "Aspenter", assignedTo: 5, prescriptionId: 1, frequency: 2, dosage: 2, takenToday: false },
  { id: 4, name: "Aspirina", assignedTo: 5, prescriptionId: 1, frequency: 2, dosage: 1, takenToday: true },
  { id: 5, name: "Shawarma", assignedTo: 5, prescriptionId: 1, frequency: 1, dosage: 3, takenToday: false },
  { id: 6, name: "NeuroFluid", assignedTo: 5, prescriptionId: 1, frequency: 2, dosage: 2, takenToday: false },
  { id: 7, name: "Dulcolax", assignedTo: 5, prescriptionId: 1, frequency: 2, dosage: 1, takenToday: true },
  { id: 8, name: "Duoden", assignedTo: 5, prescriptionId: 1, frequency: 1, dosage: 3, takenToday: false },
  { id: 9, name: "Nurofen", assignedTo: 5, prescriptionId: 1, frequency: 2, dosage: 2, takenToday: false },
  { id: 10, name: "Omeprazole", assignedTo: 5, prescriptionId: 1, frequency: 2, dosage: 1, takenToday: true },
  { id: 11, name: "Lisinopril", assignedTo: 5, prescriptionId: 1, frequency: 1, dosage: 3, takenToday: false },
];

export const getLoggedUser_Doctor = () => {
  return userList[0];
};

export const getLoggedUser_Pacient = () => {
  return userList[4];
};

export const getUsers = () => {
  return userList;
};

export const getPacients = () => {
  return userList.filter((user) => user.isPacient);
};

export const getDoctors = () => {
  return userList.filter((user) => !user.isPacient);
};

export const getUserById = (id) => {
  return userList.find((user) => user.id === id);
};

export const getAssignedMedicine = () => {
  const loggedUser = getLoggedUser_Pacient();
  return medicineList.filter((medicine) => medicine.assignedTo === loggedUser.id);
};

export const setMedicineTakenToday = (medicineId) => {
  medicineList.find((medicine) => medicine.id === medicineId).takenToday = !medicineList.find(
    (medicine) => medicine.id === medicineId
  ).takenToday;
};
