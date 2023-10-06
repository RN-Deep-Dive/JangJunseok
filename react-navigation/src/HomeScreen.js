import { Button, Text, View } from "react-native";

export default ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Detail"
        onPress={() =>
          navigation.push("Details", {
            itemId: 86,
            otherParam: "anything you want here",
          })
        }
      />
    </View>
  );
};
