import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { Avatar, Title, Caption } from "react-native-paper";
import { users, childs } from "../../Data";
import ChildList from "../ChildList";

const Profile = ({ navigation }) => {
  let newArray = childs.filter((x) => x.userId == 1);
  // newArray.forEach((x) => console.log(x));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <Avatar.Image
            source={{
              uri: "https://api.adorable.io/avatars/80/abott@adorable.png",
            }}
            size={140}
          />
          <View>
            <View>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 25,
                    marginBottom: 10,
                  },
                ]}
              >
                {users[0].name}
              </Title>
            </View>
            <View style={{ alignItems: "center" }}>
              <Caption style={styles.caption}>{users.email}</Caption>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: "#dddddd",
              borderRightWidth: 1,
            },
          ]}
        >
          <Title>KD {users[0].salary}</Title>
          <Caption>Salary</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>{users[0].salaryDate}</Title>
          <Caption>Salary Date</Caption>
        </View>
      </View>
      {newArray.length > 0 ? (
        <View style={[styles.childInfoSection, { alignItems: "center" }]}>
          <Title style={styles.childTitle}>Children</Title>
          <ChildList childs={newArray} />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  childInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    marginTop: 25,
  },
  childTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
