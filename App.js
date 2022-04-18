import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Button,
} from "react-native";
import Task from "./components/Task";
import { create } from "tailwind-react-native-classnames";
import styles from "./tw-rn-styles.json";

const tw = create(styles);

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={tw` flex bg-blue-50 px-4 h-full w-full py-10`}>
      <ScrollView>
        <View>
          <Text style={tw`text-green-400 my-6 mx-20 text-4xl`}>
            Today's tasks
          </Text>
          <View>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}
                >
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView>
        <TextInput
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
          style={tw` bg-white border-green-400 rounded-xl border-2 mb-2`}
        />
        <Button
          title="add task"
          color="#29AB87"
          onPress={() => handleAddTask()}
        />
      </KeyboardAvoidingView>
    </View>
  );
}
