import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const AddJobScreen = ({ navigation, route }) => {
  const { addNewJob, userName } = route.params;
  const [newJob, setNewJob] = useState("");

  const handleAddJob = () => {
    if (newJob.trim() !== "") {
      addNewJob(newJob);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginRight: 25,
        }}
      >
        <Image
          style={styles.image}
          source={{ uri: "https://picsum.photos/200" }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold" }}> Hi {userName}</Text>
          <Text>Have a great day ahead</Text>
        </View>
      </View>

      <Text
        style={{
          fontSize: 30,
          margin: 20,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        ADD YOUR JOB
      </Text>

      <View style={styles.TextInput}>
        <Icon name="list-alt" size={20} />
        <TextInput
          placeholder="Input your job"
          style={{
            color: "gray",
            paddingLeft: 10,
            width: "100%",
            height: 30,
          }}
          value={newJob}
          onChangeText={setNewJob}
        />
      </View>
      <TouchableOpacity style={styles.Button} onPress={handleAddJob}>
        <Text style={styles.textButton}> FINISH </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  TextInput: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#8353E2",
    marginTop: 20,
    paddingHorizontal: 10,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  Button: {
    width: "60%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 100,
    backgroundColor: "#00BDD6",
  },
  textButton: {
    color: "white",
    fontSize: 20,
  },
});
export default AddJobScreen;
