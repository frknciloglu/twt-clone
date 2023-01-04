import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAF1dLILwXlfsDksSLnGB9mwLpsepl2s1U",
  authDomain: "twitter-clone-git-f06e6.firebaseapp.com",
  projectId: "twitter-clone-git-f06e6",
  storageBucket: "twitter-clone-git-f06e6.appspot.com",
  messagingSenderId: "997177474562",
  appId: "1:997177474562:web:8c2ed7fb77191d375ab11b",
  measurementId: "G-L9KJJNL5ZY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const db = getAnalytics(app);
export default db;
