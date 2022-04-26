import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  FlatList,
} from "react-native";
import Task from "../components/Task";

export const TODO_SCREEN = { name: "To do" };

export default function Todo() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const AddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]; // taking all tasks
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={{ flex: 1, padding: 4, backgroundColor: "white", margin: 5 }}>
      {/* flatlist has a scrolview built in  */}
      <FlatList
        data={taskItems}
        renderItem={({ item, index }) => (
          <View
            key={`index`}
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              margin: 4,
            }}
          >
            {/* rendering tasks */}
            <Task text={item} style={{ margin: 20 }} />
            {/* completing tasks */}
            <TouchableOpacity
              onPress={() => completeTask(index)}
              style={{
                backgroundColor: "#29AB87",
                justifyContent: "center",
                margin: 4,
                padding: 2,
                borderRadius: 10,
                borderColor: "rgba(0,0,0,0.2)",
              }}
            >
              <Text style={{ margin: 4, color: "white", fontSize: 11 }}>
                complete
              </Text>
            </TouchableOpacity>
          </View>
        )}
        ListHeaderComponent={
          <Text
            style={{
              fontSize: 40,
              color: "#29AB87",
              alignSelf: "center",
              marginBottom: 15,
              marginTop: 15,
              letterSpacing: 2,
            }}
          >
            Today's Tasks
          </Text>
        }
      />

      <KeyboardAvoidingView>
        {/* to push the keyboard up in order not to cover the content*/}
        <TextInput
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
          style={{
            width: "100%",
            borderRadius: 10,
            borderWidth: 2,
            alignItems: "center",
            alignSelf: "center",
            margin: 4,
            textAlign: "center",
            padding: 6,
            borderColor: "green",
          }}
        />
        {/* "TouchableOpacity" is used instead if a button in order to have more flexibilty with the design */}
        <TouchableOpacity
          onPress={() => AddTask()}
          title="add task"
          style={{
            backgroundColor: "#29AB87",
            borderRadius: 10,
            width: "100%",
            alignItems: "center",
            padding: 4,
            alignSelf: "center",
            marginTop: 4,
          }}
        >
          <Text style={{ color: "white", padding: 3 }}>Add Task</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
