import { FlatList, StyleSheet, View } from "react-native";
import Profile from "./Profile";

export default ({ friend_list }) => {
  return (
    <View>
      <FlatList
        data={friend_list}
        renderItem={({ item, index }) => (
          <Profile
            key={index}
            desc={item.introduction}
            name={item.name}
            image_src={item.uri}
            image_size={40}
          ></Profile>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
      ></FlatList>
    </View>
  );
};

const style = StyleSheet.create({});
