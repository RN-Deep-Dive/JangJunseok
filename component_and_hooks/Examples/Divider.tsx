import { View } from "react-native";

export default ({ paddingVertical = 0 }) => {
  return (
    <View
      style={{
        alignSelf: "stretch",
        borderWidth: 1,
        borderColor: "gray",
        paddingVertical: paddingVertical,
      }}
    ></View>
  );
};
