import { Text, View, StyleSheet } from "react-native";
import IconButton from "./IconButton";

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>친구</Text>
      <View style={styles.btnContainer}>
        {["downcircle", "leftcircle", "upcircle", "rightcircle"].map(
          (iconName) => (
            <IconButton iconName={iconName} />
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },

  btnContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
