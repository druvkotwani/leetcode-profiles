import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Add Firestore module import

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQ-_Qp-x7ljcWnzB7jtqkyppO0LxGCYfo",
    authDomain: "leetcodeprofilesdata.firebaseapp.com",
    projectId: "leetcodeprofilesdata",
    storageBucket: "leetcodeprofilesdata.appspot.com",
    messagingSenderId: "166010246628",
    appId: "1:166010246628:web:9ec1a07562ce11d09d23f1",
    measurementId: "G-K62NLZLQ5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a Firestore instance
const firestore = getFirestore(app);

export { app, analytics, firestore }; // Export Firestore instance along with others if needed