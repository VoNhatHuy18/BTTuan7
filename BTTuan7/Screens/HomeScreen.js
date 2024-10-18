import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const Home = ({ navigation }) => {
  const [newName, setNewName] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MANAGE YOUR</Text>
      <Text style={styles.text}>TASK</Text>
      <View style={styles.TextInput}>
        <Icon name="envelope-o" size={20} />
        <TextInput
          placeholder="Enter your name"
          style={{
            color: "gray",
            paddingLeft: 10,
            width: "100%",
            height: 30,
          }}
          onChangeText={setNewName}
        />
      </View>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("ListJobs", { userName: newName })}
      >
        <Text style={styles.textButton}> GET STARTED </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#8353E2",
  },
  TextInput: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#8353E2",
    borderRadius: 10,
    marginTop: 50,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  Button: {
    width: "60%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 100,
    backgroundColor: "#00BDD6",
  },
  textButton: {
    color: "white",
    fontSize: 20,
  },
});

export default Home;
