import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UsersList, { USERS_LIST } from "./UsersList";
import UserDetails, { USER_DETAILS_SCREEN } from "./UserDetails";

export const USERS_SCREEN = { name: "Users" };
const UsersStack = createNativeStackNavigator();

export default function Users() {
  return (
    <UsersStack.Navigator initialRouteName={USERS_LIST.name}>
      {/* netsted navigation for the 2 components */}
      <UsersStack.Screen
        component={UsersList}
        name={USERS_LIST.name}
        options={{
          headerShown: false,
        }}
      />
      <UsersStack.Screen
        component={UserDetails}
        name={USER_DETAILS_SCREEN.name}
        options={{
          headerShown: false,
        }}
      />
    </UsersStack.Navigator>
  );
}
