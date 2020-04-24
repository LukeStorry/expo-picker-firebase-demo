import React, { useEffect } from "react";
import { Text, View } from "react-native";
import "@firebase/firestore";

export default function ChoiceList({ docRef }) {
  const [choices, setChoices] = React.useState([]);

  useEffect(
    () => docRef.onSnapshot((doc) => setChoices(doc.data()?.choices || [])),
    []
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ffeeaa",
        padding: 30,
        width: "100%",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Previous Choices</Text>

      {choices.map((choice, key) => (
        <Text key={key}>
          {`${choice.time.toDate().toString().slice(4, 21)} - First Option: ${
            choice.firstOption
          }, Second Option: ${choice.secondOption}`}
        </Text>
      ))}
    </View>
  );
}
