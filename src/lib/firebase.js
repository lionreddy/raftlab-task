import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyABfT0HvlH2Fa8BLjLhS5HHojh1xWCIIk8",
  authDomain: "social-media-task-raftlabs.firebaseapp.com",
  projectId: "social-media-task-raftlabs",
  storageBucket: "social-media-task-raftlabs.appspot.com",
  messagingSenderId: "102482061581",
  appId: "1:102482061581:web:67e212467569ce33132844"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
