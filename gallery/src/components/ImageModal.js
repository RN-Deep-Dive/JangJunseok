import { Image, Modal, Pressable, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default ({
  currentImageIndex,
  currentImageUri,
  currentImageId,
  setCurrentImageId,
  onPressLeft,
  onPressRight,
  isStartImage,
  isEndImage,
}) => {
  return (
    <Modal animationType="slide" visible={Boolean(currentImageId)}>
      <Pressable
        style={styles.modalContainer}
        onPress={() => setCurrentImageId(null)}
      >
        <View style={styles.modalArrow}>
          {!isStartImage && (
            <Pressable onPress={onPressLeft} style={styles.modalArrowPress}>
              <AntDesign name="left" size={24} color="black" />
            </Pressable>
          )}
        </View>
        {currentImageId && (
          <Pressable>
            <Image
              source={{
                uri: currentImageUri,
              }}
              style={{ width: 250, height: 250 }}
            ></Image>
          </Pressable>
        )}
        <View style={styles.modalArrow}>
          {!isEndImage && (
            <Pressable onPress={onPressRight} style={styles.modalArrowPress}>
              <AntDesign name="right" size={24} color="black" />
            </Pressable>
          )}
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  modalArrow: {
    flex: 1,
    height: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  modalArrowPress: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
