import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TripScheduleList from "./src/components/Organisms/TripSchedule/TripScheduleList";
import BottomTabBar from "./src/components/Organisms/BottomTabBar";
import Header from "./src/components/Organisms/Header/Header";
import HeaderIcon from "./src/components/Organisms/Header/HeaderIcon";
import FlexBox from "./src/components/Atoms/FlexBox";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Header>
          <HeaderIcon iconName="logo-ionitron"></HeaderIcon>
          <FlexBox gap={3}>
            <HeaderIcon iconName="logo-ionic"></HeaderIcon>
            <HeaderIcon iconName="logo-ionic"></HeaderIcon>
            <HeaderIcon iconName="logo-ionic"></HeaderIcon>
          </FlexBox>
        </Header>
        <TripScheduleList sections={DATA}></TripScheduleList>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewContainer: {
    paddingHorizontal: 10,
  },
});
