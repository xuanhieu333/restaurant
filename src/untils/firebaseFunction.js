// import { async } from "@firebase/util";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "FoodItem", `${Date.now()}`), data, {
    merge: true,
  });
};

export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
