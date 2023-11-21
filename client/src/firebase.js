import firebase from 'firebase/app';
import 'firebase/firestore'; // Import any other Firebase services you plan to use

const firebaseConfig = {
    apiKey: "AIzaSyDQ-_Qp-x7ljcWnzB7jtqkyppO0LxGCYfo",
    authDomain: "leetcodeprofilesdata.firebaseapp.com",
    projectId: "leetcodeprofilesdata",
    storageBucket: "leetcodeprofilesdata.appspot.com",
    messagingSenderId: "166010246628",
    appId: "1:166010246628:web:9ec1a07562ce11d09d23f1",
    measurementId: "G-K62NLZLQ5G"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
