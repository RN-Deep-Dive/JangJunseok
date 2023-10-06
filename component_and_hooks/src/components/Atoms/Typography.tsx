import { Text } from "react-native";

export default ({ children, fontSize, fontWeight, fontColor }) => {
  return (
    <Text
      style={{
        fontSize: fontSize || 20,
        color: fontColor || "black",
        fontWeight: fontWeight || "normal",
      }}
    >
      {children}
    </Text>
  );
};
