import { Platform, StyleSheet, Text, View } from "react-native";
import Typography from "../../Atoms/Typography";
import FlexBox from "../../Atoms/FlexBox";
import palette from "../../../lib/palette";

const TripScheduleListHeader = ({ index, title }) => {
  return (
    <View style={styles.container}>
      <FlexBox justify={"space-between"} align={"center"}>
        <FlexBox gap={5}>
          <Typography fontColor={"black"} fontSize={15} fontWeight={400}>
            day 1
          </Typography>
          <Typography
            fontColor={palette.font_black}
            fontSize={15}
            fontWeight={600}
          >
            {title}
          </Typography>
        </FlexBox>
        <Typography
          fontColor={palette.font_black}
          fontSize={15}
          fontWeight={500}
        >
          편집
        </Typography>
      </FlexBox>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: "white",
  },
});

export default TripScheduleListHeader;
