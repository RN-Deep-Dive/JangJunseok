import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import Profile from "./src/components/Profile";
import FriendList from "./src/components/FriendList";
import ListHeader from "./src/components/ListHeader";
import Tabbar from "./src/components/Tabbar";
import { friendProfiles } from "./src/data";
import { myProfile } from "./src/data";
import Margin from "./src/components/Margin";
import SafeAreaView from "react-native-safe-area-view";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isListVisible, setIsListVisible] = useState(false);

  const ListHeaderComponent = () => {
    return (
      <View style={styles.container}>
        <Header></Header>
        <Profile
          name={myProfile.name}
          desc={myProfile.introduction}
          image_src={myProfile.uri}
          image_size={60}
        ></Profile>
        <View style={styles.divider}></View>
        <ListHeader
          friend_length={friendProfiles.length}
          onPress={() => {
            setIsListVisible(!isListVisible);
          }}
          isOpened={isListVisible}
        ></ListHeader>
        <Margin height={5}></Margin>
      </View>
    );
  };

  return (
    <SafeAreaProvider style={{}}>
      <SafeAreaView
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          // backgroundColor: "green",
        }}
      >
        <View style={{ flex: 1 }}>
          <FlatList
            data={friendProfiles}
            renderItem={({ item, index }) => {
              return (
                isListVisible && (
                  <Profile
                    key={index}
                    desc={item.introduction}
                    name={item.name}
                    image_src={item.uri}
                    image_size={40}
                  ></Profile>
                )
              );
            }}
            ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
            ListHeaderComponent={ListHeaderComponent}
            ListFooterComponent={() => <View style={{ height: 10 }}></View>}
            stickyHeaderIndices={[0]}
            style={{ paddingHorizontal: 20, flex: 1 }}
          ></FlatList>
        </View>
        <Tabbar
          style={{ height: 10 }}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        ></Tabbar>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    backgroundColor: "white",
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: "grey",
    opacity: 0.3,
    borderBottomWidth: 1,
  },
});
