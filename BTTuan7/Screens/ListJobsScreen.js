import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native";
import { TextInput } from "react-native-web";

const ListJobsScreen = ({ navigation, route }) => {
  const [todos, setTodos] = useState([]);
  const { userName } = route.params;

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://657275ecd61ba6fcc014fc27.mockapi.io/api/todos"
      );
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addNewJob = (newJob) => {
    const newTodo = { id: todos.length + 1, job: newJob };
    setTodos([...todos, newTodo]);
  };

  const renderTodo = ({ item }) => (
    <View style={styles.todoItem}>
      <Text style={[styles.todoText]}>{item.job}</Text>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>✏️</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
      <View style={styles.TextInput}>
        <Icon name="search" size={20} />
        <TextInput
          placeholder="Search"
          style={{
            color: "gray",
            paddingLeft: 10,
            width: "100%",
            height: 30,
          }}
        />
      </View>

      <FlatList
        data={todos}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("AddJob", { addNewJob, userName })}
      >
        <Text>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    marginHorizontal: 25,
    marginVertical: 10,
    width: "80%",
    height: 40,
    backgroundColor: "#D3D5D9",
    borderRadius: 15,
  },
  editButton: {
    padding: 5,
  },
  todoText: {
    marginLeft: 10,
  },
  Button: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#8353E2",
    marginBottom: 50,
  },
});
export default ListJobsScreen;
