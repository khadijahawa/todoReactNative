import { Card, Title } from "react-native-paper";

const Task = (props) => {
  return (
    <Card
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        margin: 10,
        borderWidth: 0,
        borderRadius: 50,
      }}
    >
      <Title
        style={{
          fontSize: 21,
          color: "black",
          alignSelf: "center",
          margin: 10,
          fontFamily: "Roboto",
        }}
      >
        {props.text}
      </Title>
    </Card>
  );
};
export default Task;
