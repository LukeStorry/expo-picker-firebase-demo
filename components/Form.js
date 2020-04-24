import React from "react";
import { Text, View, Picker, Button } from "react-native";
import firebase from "firebase";
import "@firebase/firestore";

export default function Form({ docRef }) {
  const [firstOption, setFirstOption] = React.useState("");
  const [secondOption, setSecondOption] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const submit = () => {
    console.log({ firstOption, secondOption });
    if (!submitted) setSubmitted(true);
    if (firstOption === "" || secondOption === "") return;

    const newChoices = { firstOption, secondOption, time: new Date() };

    firebase
      .firestore()
      .runTransaction((transaction) => {
        return transaction.get(docRef).then((doc) => {
          if (!doc.exists) {
            transaction.set(docRef, { choices: [newChoices] });
          } else {
            const previousChoices = doc.data()?.choices || [];
            transaction.update(docRef, {
              choices: [newChoices, ...previousChoices],
            });
          }
        });
      })
      .then(() => setMessage(`Submitted ${firstOption} and ${secondOption} :)`))
      .catch((err) => setMessage(`Failed due to ${err} :(`));
  };

  return (
    <View
      style={{
        flex: 0.3,
        backgroundColor: "#aaeeff",
        padding: 30,
        width: "100%",
        justifyContent: "space-around",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>New Choice</Text>

      <Text style={{ color: "red" }}>
        {submitted && firstOption === "" && "You must select a First Option."}
      </Text>
      <Picker
        selectedValue={firstOption}
        onValueChange={(value) => setFirstOption(value)}
      >
        <Picker.Item label="First Option" value="" />
        <Picker.Item label="Choice 1" value="1" />
        <Picker.Item label="Choice 2" value="2" />
        <Picker.Item label="Choice 3" value="3" />
      </Picker>

      <Text style={{ color: "red" }}>
        {submitted && secondOption === "" && "You must select a Second Option."}
      </Text>

      <Picker
        selectedValue={secondOption}
        onValueChange={(value) => setSecondOption(value)}
      >
        <Picker.Item label="Second Option" value="" />

        <Picker.Item label="Choice A" value="a" />
        <Picker.Item label="Choice B" value="b" />
        <Picker.Item label="Choice C" value="c" />
      </Picker>

      <Button title="Submit" onPress={submit} />
      <Text> {message} </Text>
    </View>
  );
}
