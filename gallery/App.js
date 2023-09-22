import { useState, useCallback, useMemo, memo } from "react";
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  FlatList,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Modal,
  View,
  Text,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import styled from "styled-components/native";
import Header from "./src/components/Header";
import { AntDesign } from "@expo/vector-icons";
import ImageModal from "./src/components/ImageModal";

const width = Dimensions.get("window").width;
const numColumns = 3;
const itemSize = width / numColumns;

const color_grey = "#b2bec3";

const ImageBox = styled.View`
  width: ${itemSize};
  height: ${itemSize};
  background-color: ${color_grey};
  align-items: center;
  justify-content: center;
`;
// onLongPressImage, onPressImage,

const ImageItem = ({ item, onPressAddBtn, onPressImage, onLongPressImage }) => {
  console.log("rerendered");
  return (
    <>
      {item.id === -1 ? (
        <Pressable onPress={onPressAddBtn}>
          <ImageBox>
            <AntDesign name="plus" size={24} color="black" />
          </ImageBox>
        </Pressable>
      ) : (
        <>
          {item.uri && (
            <Pressable
              onPress={() => onPressImage(item.id)}
              onLongPress={() => onLongPressImage(item.id)}
            >
              <Image
                source={{ uri: item.uri }}
                style={{ width: itemSize, height: itemSize }}
              ></Image>
            </Pressable>
          )}
        </>
      )}
    </>
  );
};

export default function App() {
  const [imageList, setImageList] = useState([]);
  const [albumList, setAlbumList] = useState([
    {
      id: 1,
      title: "기본",
    },
  ]);
  const [currentImageId, setCurrentImageId] = useState(null);
  const [currentAlbumId, setCurrentAlbumId] = useState(1);
  const [isAlbumListVisible, setIsAlbumListVisible] = useState(false);

  const pickImage = useCallback(async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageList([
        ...imageList,
        {
          id: imageList.length + 1,
          uri: result["assets"][0]["uri"],
          albumId: currentAlbumId,
        },
      ]);
    }
  }, [imageList, setImageList, currentAlbumId]);

  const deleteImage = useCallback(
    (imageId) => {
      setImageList(imageList.filter((item) => item.id !== imageId));
    },
    [imageList]
  );

  const showImageDeleteModal = useCallback(
    (imageId) => {
      Alert.alert("삭제", "정말로 삭제하시겠습니까?", [
        {
          text: "취소",
          onPress: () => console.log("취소"),
          style: "cancel",
        },
        {
          text: "삭제",
          onPress: () => deleteImage(imageId),
        },
      ]);
    },
    [deleteImage]
  );

  const currentAlbumImageList = imageList.filter(
    (item) => item.albumId === currentAlbumId
  );
  const imageListWithAddButton = [
    ...currentAlbumImageList,
    {
      id: -1,
      uri: null,
      albumId: 1,
    },
  ];

  const addAlbum = (albumTitle) => {
    const newAlbum = {
      title: albumTitle,
      id: albumList.length + 1,
    };
    setAlbumList([...albumList, newAlbum]);
    setCurrentAlbumId(newAlbum.id);
  };

  const deleteAlbum = (albumId) => {
    if (albumId == 1) {
      Alert.alert("앨범삭제", "기본 앨범은 삭제할 수 없습니다.", [
        {
          text: "확인",
        },
      ]);
      return;
    }
    setAlbumList(albumList.filter((album) => album.id !== albumId));
    setImageList(imageList.filter((image) => image.albumId !== albumId));
    setCurrentAlbumId(1);
  };

  const showDeleteAlbumModal = (albumId) => {
    Alert.alert(
      "앨범삭제",
      "정말로 삭제하시겠습니까? 앨범의 사진도 모두 삭제됩니다.",
      [
        {
          text: "취소",
          onPress: () => console.log("취소"),
        },
        {
          text: "삭제",
          onPress: () => deleteAlbum(albumId),
        },
      ]
    );
  };

  const showAddAlbumModal = () => {
    if (albumList.length >= 2) {
      Alert.alert("앨범추가", "앨범을 더 추가하시려면 광고를 봐야해요", [
        {
          text: "취소",
        },
        {
          text: "확인",
        },
      ]);
      return;
    } else {
      Alert.prompt("앨범추가", "추가할 앨범의 이름을 입력해주세요", [
        {
          text: "취소",
          onPress: () => console.log("취소"),
          style: "cancel",
        },
        {
          text: "추가",
          onPress: addAlbum,
          style: "default",
        },
      ]);
    }
  };

  const renderItem = ({ item }) => (
    <ImageItem
      key={item.id}
      item={item}
      onPressAddBtn={pickImage}
      onPressImage={setCurrentImageId}
      onLongPressImage={showImageDeleteModal}
    ></ImageItem>
  );

  const currentImageIndex = currentAlbumImageList.findIndex(
    (image) => image.id === currentImageId
  );

  const setImageIdtoPrev = () => {
    setCurrentImageId(currentAlbumImageList[currentImageIndex - 1].id);
  };

  const setImageIdtoNext = () => {
    setCurrentImageId(currentAlbumImageList[currentImageIndex + 1].id);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Header
          currentAlbum={albumList.find((album) => album.id === currentAlbumId)}
          albumList={albumList}
          isAlbumListVisible={isAlbumListVisible}
          onPressAddAlbum={showAddAlbumModal}
          onPressAlbumItem={(id) => {
            setCurrentAlbumId(id);
            setIsAlbumListVisible(false);
          }}
          onLongPressAlbumItem={showDeleteAlbumModal}
          onPressAlbumList={() => setIsAlbumListVisible(!isAlbumListVisible)}
        ></Header>
        <FlatList
          data={imageListWithAddButton}
          numColumns={numColumns}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        ></FlatList>
      </KeyboardAvoidingView>
      <ImageModal
        currentImageId={currentImageId}
        setCurrentImageId={setCurrentImageId}
        currentImageUri={
          currentImageId &&
          imageList.find((item) => item.id === currentImageId).uri
        }
        currentImageIndex={currentImageIndex}
        onPressLeft={setImageIdtoPrev}
        onPressRight={setImageIdtoNext}
        isStartImage={currentImageIndex === 0}
        isEndImage={currentImageIndex === currentAlbumImageList.length - 1}
      ></ImageModal>
    </SafeAreaView>
  );
}
