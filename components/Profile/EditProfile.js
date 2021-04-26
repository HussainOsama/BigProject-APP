import React, { useState } from "react";

import { AuthContainer, AuthTitle, AuthTextInput, AuthOther } from "../styled";

const EditProfile = ({ navigation }) => {
  const [user, setUser] = useState({
    salary: "",
    salaryDate: "",
  });
  return (
    <AuthContainer>
      <AuthTitle>Edit Profile</AuthTitle>
      <AuthTextInput
        placeholder="Salary"
        onChangeText={(salary) => setUser({ ...user, salary })}
      />
      <AuthTextInput
        placeholder="Salary Date"
        onChangeText={(salaryDate) => setUser({ ...user, salaryDate })}
      />
      <AuthOther onPress={() => navigation.goBack()}>Back to Profile</AuthOther>
    </AuthContainer>
  );
};

export default EditProfile;
