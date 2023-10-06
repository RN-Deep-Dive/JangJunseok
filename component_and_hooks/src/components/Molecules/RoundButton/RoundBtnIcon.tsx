import { StyleSheet, View } from "react-native";

export default (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginRight: 5,
    fontSize: 13,
    fontColor: "white",
  },
});
