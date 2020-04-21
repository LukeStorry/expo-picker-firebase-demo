import React from "react";
import { Text, View, Picker, Button } from "react-native";

export default function Form() {
  const [firstOption, setFirstOption] = React.useState("");
  const [secondOption, setSecondOption] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const submit = () => {
    console.log({ firstOption, secondOption });
    if (!submitted) setSubmitted(true);
    if ((firstOption !== "") & (secondOption !== "")) {
      //   firebase
      // .firestore()
      // .collection("registrations")
      //     .doc(`user-${userId}`)
      // firebase.store().collection("username").set({
      //   selection: dropdownSelection,
      //   loc: location,
      //   selection: dropdownSelection,
      // }).then(() =>
      // alert(`Submitted ${firstOption} and ${secondOption} :)`);
      // ).catch((err) =>
      // alert(`Failed due to ${err} :(`);
      // )
      alert("sent!");
    }
  };
  return (
    <View>
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
    </View>
  );
}
