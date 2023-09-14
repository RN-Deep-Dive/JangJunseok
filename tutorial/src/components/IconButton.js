import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

export default ({ iconName }) => {
  return (
    <View>
      <AntDesign name={iconName} size={24} color="black" />
    </View>
  );
};
