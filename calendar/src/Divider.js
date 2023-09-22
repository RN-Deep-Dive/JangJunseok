import { View } from "react-native";

export default ({ vertical, borderWidth }) => {
  return (
    <View style={{ paddingVertical: vertical }}>
      <View style={{ borderWidth: borderWidth, borderColor: "black" }}></View>
    </View>
  );
};
