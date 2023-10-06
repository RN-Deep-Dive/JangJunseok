import { Button, Text, View } from "react-native";

export default ({ route, navigation }) => {
  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>{(itemId, otherParam)}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="go to screen c"
        onPress={() =>
          navigation.navigate("TabBarNavigator", {
            screen: "ScreenC",
            params: { user: "junseok" },
          })
        }
      ></Button>
    </View>
  );
};
