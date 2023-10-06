import { View } from "react-native";

export default ({ margin, isVertical = true }) => {
  const style = isVertical
    ? { marginVertical: margin }
    : { marginHorizontal: margin };
  return <View style={style}></View>;
};
