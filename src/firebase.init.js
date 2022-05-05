import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCks-_7_qo3nZU5QkzKfDVkO1nHyU5Lvdo",
  authDomain: "inventory-management-a11-ec4a6.firebaseapp.com",
  projectId: "inventory-management-a11-ec4a6",
  storageBucket: "inventory-management-a11-ec4a6.appspot.com",
  messagingSenderId: "370146909643",
  appId: "1:370146909643:web:2cffda08e43b0ad55a6a4e"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;