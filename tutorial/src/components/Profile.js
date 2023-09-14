import { Image, StyleSheet, View, Text } from "react-native";

export default ({ name, desc, image_src, image_size }) => {
  return (
    <View style={style().container}>
      <Image
        source={{ uri: image_src }}
        style={style(image_size).image}
      ></Image>
      <View style={style().textContainer}>
        <Text style={style().name}>{name}</Text>
        {desc && <Text style={style().desc}>{desc}</Text>}
      </View>
    </View>
  );
};

const style = (image_size) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    image: {
      width: image_size,
      height: image_size,
      borderRadius: 25,
      marginRight: 10,
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    name: {
      fontWeight: "bold",
    },
    desc: {
      color: "grey",
      opacity: 0.7,
    },
  });
