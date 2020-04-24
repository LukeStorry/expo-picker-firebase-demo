import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import * as firebase from "firebase";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailEntered, setEmailEntered] = React.useState(false);
  const [passwordEntered, setPasswordEntered] = React.useState(false);
  const [loginError, setLoginError] = React.useState(false);

  const passwordIsValid = (password != "") & (password.length > 8);
  const emailIsValid = (email != "") & (email.length > 4) & email.includes("@");

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/user-not-found") {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((error) => setLoginError(error.message));
        } else setLoginError(error.message);
      });
  };

  return (
    <View
      style={{
        backgroundColor: "#42cdef",
        justifyContent: "space-around",
        alignItems: "center",
        maxHeight: 300,
        flex: 1,
        width: "100%",
        padding: 30,
        marginBottom: 50,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Log In</Text>
      <TextInput
        placeholder="Email"
        textContentType="emailAddress"
        style={{ height: 40, borderColor: "gray", borderWidth: 1, padding: 5 }}
        value={email}
        onBlur={() => setEmailEntered(true)}
        onChangeText={setEmail}
      />
      <Text style={{ color: "red" }}>
        {emailEntered && !emailIsValid && "You must enter a valid email."}
      </Text>

      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={{ height: 40, borderColor: "gray", borderWidth: 1, padding: 5 }}
        value={password}
        onChangeText={setPassword}
        onBlur={() => setPasswordEntered(true)}
      />
      <Text style={{ color: "red" }}>
        {passwordEntered &&
          !passwordIsValid &&
          "You must enter a password longer than 8 characters."}
      </Text>

      <Button
        title="Login / Register"
        onPress={login}
        disabled={!passwordIsValid && !emailIsValid}
      />

      <Text
        onPress={() =>
          firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(console.log)
            .catch((error) => setLoginError(error.message))
        }
      >
        Forgotten Password
      </Text>

      <Text style={{ color: "red" }}> {loginError} </Text>
    </View>
  );
}
