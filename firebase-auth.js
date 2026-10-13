import { auth } from "./firebase-config.js";
import {
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

export {
    auth,
    signInWithEmailAndPassword,
    signOut
};