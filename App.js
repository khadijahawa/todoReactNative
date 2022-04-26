import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Users, { USERS_SCREEN } from "./screens/Users";
import Todo, { TODO_SCREEN } from "./screens/Todo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#074C0E",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          component={Todo}
          name={TODO_SCREEN.name}
          options={{
            tabBarLabel: "To Do",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            ),
          }}
        />
        {/* here it is navigating to users component wich is navigatin to users details */}
        <Tab.Screen
          component={Users}
          name={USERS_SCREEN.name}
          options={{
            tabBarLabel: "Users",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
