import React from "react";
import { StyleSheet, Text, View, Picker, Button } from "react-native";

export default function App() {
  const [module, setModule] = React.useState("");
  const [practice, setPractice] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const submit = () => {
    console.log({ module, practice });
    if (!submitted) setSubmitted(true);

    if ((module !== "") & (practice !== "")) {
      alert("sent!");
      //   firebase
      // .firestore()
      // .collection("registrations")
      //     .doc(`user-${userId}`)

      // firebase.store().collection("username").set({
      //   selection: dropdownSelection,
      //   loc: location,
      //   selection: dropdownSelection,
      // }).then(() =>
      // alert(`Submitted ${module} and ${practice} :)`);
      // ).catch((err) =>
      // alert(`Failed due to ${err} :(`);
      // )
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "red" }}>
        {submitted && module === "" && "You must select a Module."}
      </Text>
      <Picker
        selectedValue={module}
        onValueChange={(value) => setModule(value)}
      >
        <Picker.Item label="Module" value="" />
        <Picker.Item label="Module 1" value="module1" />
        <Picker.Item label="module 2" value="module2" />
        <Picker.Item label="module 3" value="module3" />
      </Picker>

      <Text style={{ color: "red" }}>
        {submitted && practice === "" && "You must select a Gp Practice."}
      </Text>

      <Picker
        selectedValue={practice}
        onValueChange={(value) => setPractice(value)}
      >
        <Picker.Item label="GP Practice" value="" />

        <Picker.Item label="practice 1" value="practice1" />
        <Picker.Item label="practice 2" value="practice2" />
        <Picker.Item label="practice 3" value="practice3" />
      </Picker>

      <Button title="Submit" onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
