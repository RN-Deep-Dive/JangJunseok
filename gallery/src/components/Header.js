import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";

export default ({
  albumList,
  currentAlbum,
  isAlbumListVisible,
  onPressAddAlbum,
  onPressAlbumList,
  onPressAlbumItem,
  onLongPressAlbumItem,
}) => {
  return (
    <View style={{ zIndex: 100 }}>
      <View
        style={{
          height: 50,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          onPress={onPressAlbumList}
        >
          <Text>{currentAlbum.title}</Text>
          <FontAwesome name="angle-down" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressAddAlbum}
          style={{
            position: "absolute",
            right: 20,
          }}
        >
          <Text>앨범추가</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          maxHeight: isAlbumListVisible ? "auto" : 0,
          overflow: "hidden",
          transition: "max-height 0.5s ease-in-out",
          width: "100%",
          position: "absolute",
          top: "100%",
        }}
      >
        {albumList.map((album) => (
          <View
            key={album.id}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding: 10,
              gap: 10,
            }}
          >
            <Pressable
              onLongPress={() => onLongPressAlbumItem(album.id)}
              onPress={() => onPressAlbumItem(album.id)}
              hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
            >
              <Text>{album.title}</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
};
