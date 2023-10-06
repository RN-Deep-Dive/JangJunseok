import { Image } from "react-native";

export default ({ width, height, source, style }) => {
  return (
    <Image
      source={{ uri: source }}
      style={[
        style,
        {
          width,
          height,
        },
      ]}
    ></Image>
  );
};
