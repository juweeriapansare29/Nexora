import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";

const firebaseConfig = {
  apiKey: "AIzaSyDb5c-A7c6l-1nGd9G5cIHyttmgffK7Vro",
  authDomain: "nexora-3454b.firebaseapp.com",
  projectId: "nexora-3454b",
  storageBucket: "nexora-3454b.firebasestorage.app",
  messagingSenderId: "170377494592",
  appId: "1:170377494592:web:8808112872d10f4461dfa5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const ai = getAI(app, {
  backend: new GoogleAIBackend()
});

const chatModel = getGenerativeModel(ai, {
  model: "gemini-3.5-flash-lite",
  generationConfig: {
    temperature: 0.7,
    maxOutputTokens: 600
  }
});

export { app, db, auth, ai, chatModel };