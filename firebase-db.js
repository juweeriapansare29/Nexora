import { db } from "./firebase-config.js";
import {
    collection,
    addDoc,
    getDocs
} from "firebase/firestore";

console.log("Nexora Firebase connected:", db);

export {
    db,
    collection,
    addDoc,
    getDocs
};