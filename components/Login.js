import React from "react";
import { Text, View, TextInput, Button } from "react-native";

import * as firebase from "firebase";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordEntered, setPasswordEntered] = React.useState(false);
  const [loginError, serLoginError] = React.useState(false);

  const passwordIsValid = (password != "") & (password.length > 8);

  const login = () => {
    if (!passwordIsValid) return;
    
    console.log(email, password);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => serLoginError(error.message));
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        textContentType="emailAddress"
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        selectedValue={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        selectedValue={password}
        onChangeText={setPassword}
        onBlur={() => setPasswordEntered(true)}
      />

      <Button title="Login" onPress={login} />

      <Text style={{ color: "red" }}>
        {passwordEntered &&
          !passwordIsValid &&
          "You must enter a password longer than 8 characters."}
        {loginError}
      </Text>
    </View>
  );
}
