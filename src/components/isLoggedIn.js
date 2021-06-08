import firebase from "firebase/app";

export const isLoggedIn = () => {
  var user = firebase.auth().currentUser;
  return user ? true : false;
};
