import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import useTab from "./useTab";
import { useEffect } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of Section 2",
  },
];

export default function App() {
  useEffect(() => {
    console.log("hello");
    return () => {
      console.log("bye bye");
    };
  }, []);

  const { currentTab, changeTabIndex } = useTab(3, content);
  return (
    <View style={styles.container}>
      {content.map((tab, index) => (
        <Button
          onPress={() => changeTabIndex(index)}
          title={index.toString()}
        ></Button>
      ))}
      <Text>{currentTab.tab}</Text>
      <Text>{currentTab.content}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
