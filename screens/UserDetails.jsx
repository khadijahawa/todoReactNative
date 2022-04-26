import React from "react";
import { Text } from "react-native";
import { Card, Paragraph, Avatar } from "react-native-paper";

export const USER_DETAILS_SCREEN = { name: "details" };

export default function UserDetails(props) {
  const { route } = props; // = props.route
  const { params } = route; // = route.params
  const { user } = params;
  const { name, avatar, email, bio, zipcode } = user;

  return (
    <Card
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Avatar.Text
        source={avatar}
        style={{ alignSelf: "center", margin: 6, backgroundColor: "black" }}
        size={150}
        label={name.charAt(0)}
      />

      <Text
        style={{
          fontFamily: "Roboto",
          alignSelf: "center",
          marginTop: 24,
          fontSize: 40,
          color: "#29AB87",
        }}
      >
        {name}
      </Text>
      <Paragraph
        style={{
          fontFamily: "Roboto",
          alignSelf: "center",
          marginTop: 24,
          fontSize: 15,
        }}
      >
        {email}
      </Paragraph>
      <Paragraph
        style={{ fontFamily: "Roboto", alignSelf: "center", marginTop: 24 }}
      >
        {zipcode}
      </Paragraph>
      <Paragraph
        style={{
          fontFamily: "Roboto",
          alignSelf: "center",
          marginTop: 24,
          textAlign: "center",
        }}
      >
        {bio}
      </Paragraph>
    </Card>
  );
}
