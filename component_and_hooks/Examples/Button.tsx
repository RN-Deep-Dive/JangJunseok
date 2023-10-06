import { Button, Pressable } from "react-native";

export default ({ onPress, title, children, hitSlop, style }) => {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={hitSlop ?? { left: 0, right: 0, top: 0, bottom: 0 }}
      style={style}
    >
      {children}
    </Pressable>
  );
};
