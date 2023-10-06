import { StyleSheet, View } from "react-native";

const BottomTabBar = () => {
  return (
    <View>
      <BottomTabBarItem></BottomTabBarItem>
      <BottomTabBarItem></BottomTabBarItem>
      <BottomTabBarItem></BottomTabBarItem>
      <BottomTabBarItem></BottomTabBarItem>
    </View>
  );
};

const BottomTabBarItem = () => {
  return <View></View>;
};

const styles = StyleSheet.create({
  container: {},
  item: {
    flex: 1,
  },
});

export default BottomTabBar;
