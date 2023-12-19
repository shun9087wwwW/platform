import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 初期化
const firebaseConfig = {
  apiKey: "AIzaSyCkg16oMdWxZ_tRfADAJM56_d0bobQAOCk",
  authDomain: "portfolio-3c53a.firebaseapp.com",
  projectId: "portfolio-3c53a",
  storageBucket: "portfolio-3c53a.appspot.com",
  messagingSenderId: "1085907892100",
  appId: "1:1085907892100:web:e89426e663d7f91f340fd1",
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);

// アプリ内でfirebaseを使用できるようにする
export const db = getFirestore(app);

// storageを使用できるようにする
export const firestorage = getStorage(app);
