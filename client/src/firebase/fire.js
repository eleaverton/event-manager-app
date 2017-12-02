import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBzQgBrwi4n--HUeIHap9BInecSmfGZwSA",
  authDomain: "fantasyleague-932e1.firebaseapp.com",
  databaseURL: "https://fantasyleague-932e1.firebaseio.com",
  projectId: "fantasyleague-932e1",
  storageBucket: "fantasyleague-932e1.appspot.com",
  messagingSenderId: "300882421573"
};

firebase.initializeApp(config);

export const db = firebase.database();
export const storage = firebase.storage();
