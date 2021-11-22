const dbKey = {
  apiKey: "AIzaSyBS1nsoKLHWv2QPl-cQYk9IgDcJCOwCjmw",
  authDomain: "ramdev-database.firebaseapp.com",
  projectId: "ramdev-database",
  databaseURL: "https://ramdev-database-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "ramdev-database.appspot.com",
  messagingSenderId: "592606984452",
  appId: "1:592606984452:web:f6516775d21c40caff3851",
  measurementId: "G-SPGK6WYCFF"
};

// Initialize Firebase
firebase.initializeApp(dbKey);

const analytics = firebase.analytics();
const fsdb = firebase.firestore();
const rtdb = firebase.database();
const storage = firebase.storage();