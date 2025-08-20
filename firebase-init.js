import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue, set, get } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB_HwGHTZKOXhkeBeme4poGX9G03cDiWkw",
  authDomain: "obs-text-navegador-chat.firebaseapp.com",
  databaseURL: "https://obs-text-navegador-chat-default-rtdb.firebaseio.com",
  projectId: "obs-text-navegador-chat",
  storageBucket: "obs-text-navegador-chat.firebasestorage.app",
  messagingSenderId: "358373445140",
  appId: "1:358373445140:web:130e3a8ed1e33949402101"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const chatRef = ref(database, 'chatState');

export { chatRef, onValue, set, get };