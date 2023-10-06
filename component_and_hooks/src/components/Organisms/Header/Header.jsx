import React from "react";
import { StyleSheet, View } from "react-native";
import HeaderIcon from "./HeaderIcon";

const Header = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

Header.Icon = HeaderIcon;

export default Header;
