import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { USER_DETAILS_SCREEN } from "./UserDetails";
import http from "../api/http";

export const USERS_LIST = { name: "Users List" };

export default function UsersList({ navigation }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetcUsers = async () => {
      try {
        const { data } = await http.get("/users");
        setList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetcUsers();
  }, []);

  return (
    <View>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <Card
            onPress={() => {
              navigation.navigate(USER_DETAILS_SCREEN.name, {
                user: item,
              });
            }}
            style={{
              margin: 15,
              padding: 4,
              alignItems: "center",
              borderWidth: 2,
              borderColor: "#CEDCF8",
              borderRadius: 20,
            }}
          >
            <Card.Actions style={{ flexDirection: "column", width: "100%" }}>
              <Title style={{ color: "#29AB87" }}> {item.name}</Title>
              <Paragraph style={{ fontSize: 10, marginTop: 5 }}>
                Users Details
              </Paragraph>
            </Card.Actions>
          </Card>
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
            Users List
          </Text>
        }
      />
    </View>
  );
}
