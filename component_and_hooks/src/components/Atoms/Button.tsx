import { Pressable } from "react-native";

export default ({ children, onPress, style }) => {
  return (
    <Pressable onPress={onPress} style={style}>
      {children}
    </Pressable>
  );
};
