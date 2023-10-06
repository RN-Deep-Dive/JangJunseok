import { StyleSheet, View } from "react-native";

export default ({ size, children }) => {
  return (
    <View>
      {children}
      <View style={styles.badge}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    width: 3,
    height: 3,
    borderRadius: 3 / 2,
    backgroundColor: "red",
    position: "absolute",
    top: 0,
    right: 0,
    color: "white",
  },
});
