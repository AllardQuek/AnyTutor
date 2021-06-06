import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyMRn7355gwb01Wl0atRHQOVz0WPywjTs",
  authDomain: "tidal-discovery-274613.firebaseapp.com",
  databaseURL: "https://tidal-discovery-274613.firebaseio.com",
  projectId: "tidal-discovery-274613",
  storageBucket: "tidal-discovery-274613.appspot.com",
  messagingSenderId: "870889457920",
  appId: "1:870889457920:web:4d680c88ee3041828acbe5",
};

// Initialize Firebase
const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;
