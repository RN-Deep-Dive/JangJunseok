import { StyleSheet, Text, View } from "react-native";
import Typography from "../../Atoms/Typography";
import palette from "../../../lib/palette";

const TripScheduleBox = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const TripScheduleBoxTitle = () => {
  return <Text></Text>;
};

const TripScheduleBoxSubtitle = ({ children }) => {
  return (
    <Typography fontColor={"grey"} fontSize={15} fontWeight={"normal"}>
      {children}
    </Typography>
  );
};

const TripScheduleReview = () => {
  return <Text></Text>;
};

const TrpiScheduleReserve = () => {
  return <Text></Text>;
};

TripScheduleBox.ReviewBtn = TripScheduleReview;
TripScheduleBox.Title = Typography;
TripScheduleBox.Subtitle = TripScheduleBoxSubtitle;
TripScheduleBox.ReserveBtn = Typography;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: palette.grey,
    padding: 10,
    borderRadius: 5,
  },
});

export default TripScheduleBox;
