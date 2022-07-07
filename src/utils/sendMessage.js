import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const sendMessage = async (message) => {
  const messagesRef = collection(db, "messages");
  addDoc(messagesRef, message);
};
