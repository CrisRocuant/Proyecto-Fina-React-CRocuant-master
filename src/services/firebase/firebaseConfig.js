import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCctuzifuWFo_EK3KwUXhLoKIj9ikolL28",
    authDomain: "vinilos-venta.firebaseapp.com",
    projectId: "vinilos-venta",
    storageBucket: "vinilos-venta.appspot.com",
    messagingSenderId: "235599449146",
    appId: "1:235599449146:web:3fbc12e2ee6a926ae33903"
  };







// Initialize Firebase
const app = initializeApp(firebaseConfig);




export const db = getFirestore (app)

