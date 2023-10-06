import { Text as RNText, StyleSheet } from "react-native";

export default ({ fontSize, children, color }) => {
  return (
    <RNText
      style={[
        styles.text,
        {
          color: color || "black",
          fontSize: fontSize || 14,
        },
      ]}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    textDecorationLine: "none",
  },
});
