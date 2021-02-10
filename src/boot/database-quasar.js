// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
// export default async (/* { app, router, Vue ... } */) => {
//   // something to do
// }

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
//add your apikey, appId and measurementId
const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "quasar-63ac6.firebaseapp.com",
  projectId: "quasar-63ac6",
  storageBucket: "quasar-63ac6.appspot.com",
  messagingSenderId: "xxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxxx",
  measurementId: "xxxxxxxxx"
};
// Initialize Firebase

const fireApp = firebase.initializeApp(firebaseConfig);
//fireApp.initializeApp(firebaseConfig);
firebase.analytics();

const dataAuth = fireApp.auth()
const db = fireApp.firestore()
 export {
  fireApp,dataAuth,db
 }
