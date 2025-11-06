import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh8-ShRYLH9o0DRCly4fweSJluNzhKgFY",
  authDomain: "luriv-dev.firebaseapp.com",
  projectId: "luriv-dev",
  storageBucket: "luriv-dev.firebasestorage.app",
  messagingSenderId: "334128577143",
  appId: "1:334128577143:web:40fb4a455cb4032166e472",
  measurementId: "G-7H5W5369JR"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Analytics only in browser
let analytics
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app)
}

export { app, analytics }
