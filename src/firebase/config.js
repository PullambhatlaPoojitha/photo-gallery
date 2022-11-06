import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD574goQs8tyDxm2gPGALVJRp9q7Ftg1xI",
  authDomain: "photo-gallery-bed0a.firebaseapp.com",
  projectId: "photo-gallery-bed0a",
  storageBucket: "photo-gallery-bed0a.appspot.com",
  messagingSenderId: "605050101400",
  appId: "1:605050101400:web:a5de9c47c95902df78faed",
  measurementId: "G-Z710GL9GNS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };