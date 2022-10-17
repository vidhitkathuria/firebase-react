import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "fir-react-app-fd8c4.firebaseapp.com",
  projectId: "fir-react-app-fd8c4",
  storageBucket: "fir-react-app-fd8c4.appspot.com",
  messagingSenderId: "358417690196",
  appId: "1:358417690196:web:ead07fe3e08ded90fe47c1",
};
const app = initializeApp(firebaseConfig);
