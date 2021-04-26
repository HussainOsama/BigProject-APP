import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { Avatar, Title, Caption } from "react-native-paper";
import ChildList from "../ChildList";
import childStore from "../../stores/childStore";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const Profile = ({ navigation }) => {
  console.log(authStore.user.id);
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
                {authStore.user.name}
              </Title>
            </View>
            <View style={{ alignItems: "center" }}>
              <Caption style={styles.caption}>{authStore.user.email}</Caption>
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
          <Title>KD {authStore.user.salary}</Title>
          <Caption>Salary</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>{authStore.user.salaryDate}</Title>
          <Caption>Salary Date</Caption>
        </View>
      </View>
      {childStore.childs.length > 0 ? (
        <View style={[styles.childInfoSection, { alignItems: "center" }]}>
          <Title style={styles.childTitle}>Children</Title>
          <ChildList />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default observer(Profile);

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
