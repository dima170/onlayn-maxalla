
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2zTJ_GHo6wrsXqIjCW7zfFRxlNQKR6FE",
  authDomain: "onlayn-mahalla.firebaseapp.com",
  projectId: "onlayn-mahalla",
  storageBucket: "onlayn-mahalla.firebasestorage.app",
  messagingSenderId: "246359143549",
  appId: "1:246359143549:web:33c5f7db534e856dd46d14",
  measurementId: "G-Q5RZHJ43PV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.register = async function () {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if (!name || !phone) {
    alert("Iltimos, barcha maydonlarni to‘ldiring!");
    return;
  }

  try {
    await addDoc(collection(db, "users"), {
      name: name,
      phone: phone,
      createdAt: new Date()
    });
    document.getElementById("register-form").style.display = "none";
    document.getElementById("menu").style.display = "block";
  } catch (e) {
    alert("Xatolik yuz berdi: " + e.message);
  }
}
