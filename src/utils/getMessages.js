import { onSnapshot, collection, where, query } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getMessages = (userName, callback) => {
  const q = query(collection(db, "messages"), where("to", "==", userName));

  const unsuscribe = onSnapshot(q, callback);

  return unsuscribe;
};
