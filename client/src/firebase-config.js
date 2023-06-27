import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0REJpRQaJEBn_dWRX4t_6aKdFg94_HZw",
    authDomain: "ntx-test-f06c6.firebaseapp.com",
    projectId: "ntx-test-f06c6",
    storageBucket: "ntx-test-f06c6.appspot.com",
    messagingSenderId: "189099093325",
    appId: "1:189099093325:web:b456678c868a6804d65b04",
    measurementId: "G-23G4XLZQSZ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);



