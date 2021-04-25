import React, { useState } from "react";
import { FloatingAction } from "react-native-floating-action";
import { NativeModules, Text, View } from "react-native";
import Card from "../progressCard/Card";
import { Alert, Modal, StyleSheet, Pressable } from "react-native";

function FloatingButton() {
  const actions = [
    {
      text: "Income",
      icon: require("../../assets/add.png"),
      name: "print",
      position: 2,
      color: "#517501",
    },
  ];

  function print() {
    setModalVisible(true);
    return;
  }

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Card />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        presentationStyle="overFullScreen"
        transparent={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <FloatingAction
        actions={actions}
        color={"#87E4FF"}
        onPressItem={(name) => console.log(name)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default FloatingButton;
