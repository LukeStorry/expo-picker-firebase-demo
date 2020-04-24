import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import Login from "./components/Login";
import Form from "./components/Form";
import ChoiceList from "./components/ChoiceList";
import * as firebase from "firebase";

export default function App() {
  const [user, setUser] = React.useState(null);
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

  firebase.auth().onAuthStateChanged(setUser);
  if (!user)
    return (
      <View style={s.root}>
        <Login />
      </View>
    );

  const userDoc = firebase.firestore().collection("users").doc(user.email);

  return (
    <View style={s.root}>
      <View style={{ flexDirection: "row", padding: 20 }}>
        <Text style={{ marginRight: 30 }}>{`Logged in as: ${user.email}`}</Text>
        <Button title="Sign Out" onPress={() => firebase.auth().signOut()} />
      </View>
      <Form docRef={userDoc} />
      <ChoiceList docRef={userDoc} />
    </View>
  );
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
