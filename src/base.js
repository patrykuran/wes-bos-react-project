import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCmHVuJukOguYFypMPcKZxPU7FksneULNQ",
    authDomain: "catch-of-the-day-react-p-418d9.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-react-p-418d9.firebaseio.com",
    projectId: "catch-of-the-day-react-p-418d9",
    storageBucket: "catch-of-the-day-react-p-418d9.appspot.com",
    messagingSenderId: "438098083789"
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
