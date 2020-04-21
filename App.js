import React from "react";
import { StyleSheet, View } from "react-native";
import * as firebase from "firebase";

import Form from "./components/Form";
import Login from "./components/Login";

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyApKqbh57QOX2p5ZkzTP-SGNbo7IMQ8W3I",
    authDomain: "expo-picker-firebase-demo.firebaseapp.com",
    databaseURL: "https://expo-picker-firebase-demo.firebaseio.com",
    projectId: "expo-picker-firebase-demo",
    storageBucket: "expo-picker-firebase-demo.appspot.com",
    messagingSenderId: "619987206404",
    appId: "1:619987206404:web:c47ebcd4f6c45dcce71051",
    measurementId: "G-QL54484KSQ",
  };

  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

  console.log(firebase.auth);


  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
