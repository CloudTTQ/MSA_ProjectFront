import { icons } from "../constants";

const userList = [
  //TEMPORARY LIST TO TEST FEATURES BEFORE BACKEND IS PLEMENTED
  { id: 1, fullName: "Ionut Lenghel", isPacient: false, icon: icons.eye, isOnline: true, unreadMessages: 3 },
  { id: 2, fullName: "Adolf Hitler", isPacient: false, icon: icons.eye, isOnline: true, unreadMessages: 7 },
  { id: 3, fullName: "Jerry", isPacient: true, icon: icons.eye, isOnline: false, unreadMessages: 4 },
  { id: 4, fullName: "Tom", isPacient: true, icon: icons.eye, isOnline: true, unreadMessages: 0 },
  { id: 5, fullName: "Laurentiu", isPacient: true, icon: icons.eye, isOnline: false, unreadMessages: 0 },
  { id: 6, fullName: "Rici", isPacient: false, icon: icons.eye, isOnline: true, unreadMessages: 1 },
  { id: 7, fullName: "Stefan", isPacient: true, icon: icons.eye, isOnline: false, unreadMessages: 0 },
  { id: 8, fullName: "Alex", isPacient: true, icon: icons.eye, isOnline: false, unreadMessages: 0 },
  { id: 9, fullName: "Mihai", isPacient: true, icon: icons.eye, isOnline: false, unreadMessages: 0 },
  { id: 10, fullName: "Nibbles", isPacient: false, icon: icons.eye, isOnline: false, unreadMessages: 0 },
];

export const getLoggedUser = () => {
  return userList[0];
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
