import { TouchableOpacity, View, Text } from "react-native";
import IconButton from "./IconButton";

export default ({ selectedIndex, setSelectedIndex }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
      }}
    >
      {[0, 1, 2, 3].map((index) => {
        return (
          <TabIcon
            isSelected={selectedIndex == index ? true : false}
            onPress={() => setSelectedIndex(index)}
            activeIconName={"rightcircle"}
            inActiveIconName={"rightcircleo"}
          ></TabIcon>
        );
      })}
    </View>
  );
};

const TabIcon = ({ isSelected, onPress, activeIconName, inActiveIconName }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <IconButton
        iconName={isSelected ? activeIconName : inActiveIconName}
      ></IconButton>
    </TouchableOpacity>
  );
};
