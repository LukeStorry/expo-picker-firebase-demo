import React from "react";
import { StyleSheet, View } from "react-native";
import Form from "./components/Form";

export default function App() {
  return (
    <View style={styles.container}>
      <Form />
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
