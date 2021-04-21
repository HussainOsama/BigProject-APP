import React, { useState } from "react";
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  AuthOther,
  Message,
} from "../styled";
import authStore from "../../stores/authStore";

function Signup({ navigation }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    await authStore.signup(user);
    if (authStore.user) {
      navigation.replace("Home");
    } else {
      setMessage("Please choose another email");
    }
  };

  return (
    <AuthContainer>
      <AuthTitle>SignUp</AuthTitle>
      <AuthTextInput
        placeholder="Name"
        onChangeText={(name) => setUser({ ...user, name })}
      />
      <AuthTextInput
        placeholder="Email"
        onChangeText={(email) => setUser({ ...user, email })}
      />
      <AuthTextInput
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <Message>{message}</Message>

      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.goBack()}>
        Click here to Log in!
      </AuthOther>
    </AuthContainer>
  );
}

export default Signup;
