import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconButton from "./IconButton";

export default ({ friend_length, onPress, isOpened }) => {
  return (
    <View style={styles.container}>
      <Text>친구 {friend_length}</Text>
      <TouchableOpacity onPress={onPress} hitSlop={{ left: 5, right: 5 }}>
        {isOpened ? (
          <IconButton iconName={"up"}></IconButton>
        ) : (
          <IconButton iconName={"down"}></IconButton>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
