import { Button, Text, View } from "react-native";

export default ({ navigation, route }) => {
  const { user } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Screen C</Text>
      <Text>{user}</Text>
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Go to home"
      ></Button>
    </View>
  );
};
