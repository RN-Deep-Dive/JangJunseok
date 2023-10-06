import { View } from "react-native";

export default (props) => (
  <View
    style={{
      display: "flex",
      flexDirection: props?.direction || "row",
      justifyContent: props?.justify || "flex-start",
      alignItems: props?.align || "flex-start",
      gap: props?.gap || 0,
    }}
  >
    {props.children}
  </View>
);
