import { icons } from "../constants";

const userList = [
  //TEMPORARY LIST TO TEST FEATURES BEFORE BACKEND IS PLEMENTED
  { id: 1, name: "Ionut Lenghel", isPacient: false, icon: icons.eye, isOnline: true, unreadMessages: 3 },
  { id: 2, name: "Adolf Hitler", isPacient: false, icon: icons.eye, isOnline: true, unreadMessages: 7 },
  { id: 3, name: "Jerry", isPacient: true, icon: icons.eye, isOnline: false, unreadMessages: 4 },
  { id: 4, name: "Tom", isPacient: true, icon: icons.eye, isOnline: true, unreadMessages: 0 },
  { id: 5, name: "Laurentiu", isPacient: true, icon: icons.eye, isOnline: false, unreadMessages: 0 },
  { id: 6, name: "Rici", isPacient: false, icon: icons.eye, isOnline: true, unreadMessages: 1 },
  { id: 7, name: "Stefan", isPacient: true, icon: icons.eye, isOnline: false, unreadMessages: 0 },
  { id: 8, name: "Alex", isPacient: true, icon: icons.eye, isOnline: false, unreadMessages: 0 },
  { id: 9, name: "Mihai", isPacient: true, icon: icons.eye, isOnline: false, unreadMessages: 0 },
  { id: 10, name: "Nibbles", isPacient: false, icon: icons.eye, isOnline: false, unreadMessages: 0 },
];

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
