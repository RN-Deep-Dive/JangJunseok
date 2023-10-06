import { StyleSheet, Text, View } from "react-native";
import TripScheduleBox from "./TripScheduleBox";
import Spacer from "../../Atoms/Spacer";

const TripScheduleOrder = ({ order }) => {
  return (
    <View style={styles.orderContainer}>
      <View style={styles.orderCircle}>
        <Text>{order}</Text>
      </View>
    </View>
  );
};

// icon or index.

const TripScheduleItem = ({
  orderIndex,
  titleText,
  subTitleText,
  hasReview,
}) => {
  return (
    <View style={styles.container}>
      <TripScheduleOrder order={orderIndex}></TripScheduleOrder>
      <TripScheduleBox>
        {titleText && (
          <TripScheduleBox.Title>{titleText}</TripScheduleBox.Title>
        )}
        <Spacer margin={1}></Spacer>
        {subTitleText && (
          <TripScheduleBox.Subtitle>{subTitleText}</TripScheduleBox.Subtitle>
        )}
        {hasReview && <View style={styles.review}></View>}
      </TripScheduleBox>
    </View>
  );
};

export default TripScheduleItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flexStart",
  },
  orderContainer: {
    padding: 10,
  },
  orderCircle: {
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  review: {
    position: "absolute",
    right: 5,
    top: "50%",
  },
});
