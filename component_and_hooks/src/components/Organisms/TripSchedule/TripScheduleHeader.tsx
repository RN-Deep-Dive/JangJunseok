import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Typography from "../../Atoms/Typography";
import FlexBox from "../../Atoms/FlexBox";
import Button from "../../Atoms/Button";
import RoundBtn from "../../Molecules/RoundButton/RoundBtn";
import palette from "../../../lib/palette";
import Spacer from "../../Atoms/Spacer";

export default () => {
  return (
    <View style={styles.container}>
      <FlexBox direction="row" align={"flex-end"} gap={5}>
        <Typography fontColor={"black"} fontSize={30} fontWeight={600}>
          도쿄 여행
        </Typography>
        <Button onPress={() => {}} style={{}}>
          <Typography fontColor={"grey"} fontSize={15} fontWeight={600}>
            편집
          </Typography>
        </Button>
      </FlexBox>
      <Typography fontColor={"grey"} fontSize={15} fontWeight={500}>
        2020.12.12 ~ 2020.12.20
      </Typography>
      <Typography fontColor={"grey"} fontSize={15} fontWeight={500}>
        이 여행의 스타일을 선택해주세요
      </Typography>
      <Spacer margin={10}></Spacer>
      <FlexBox align={"center"} gap={5}>
        <RoundBtn color={palette.blue} onPress={{}}>
          <RoundBtn.Icon>
            <AntDesign name="plus" color="white" />
          </RoundBtn.Icon>
          <RoundBtn.Text color={palette.white}>
            일행과 함께 일정짜기
          </RoundBtn.Text>
        </RoundBtn>
        <RoundBtn color={palette.blue} onPress={{}}>
          <RoundBtn.Icon>
            <AntDesign name="plus" color="white" />
          </RoundBtn.Icon>
          <RoundBtn.Text color={palette.white}>셀프패키지</RoundBtn.Text>
        </RoundBtn>
      </FlexBox>
      <Spacer margin={5}></Spacer>
      <FlexBox align={"center"} gap={5}>
        <RoundBtn color={palette.grey} onPress={{}}>
          <RoundBtn.Icon>
            <AntDesign name="plus" color={palette.font_black} />
          </RoundBtn.Icon>
          <RoundBtn.Text color={palette.font_black}>항공편</RoundBtn.Text>
        </RoundBtn>
        <RoundBtn color={palette.grey} onPress={{}}>
          <RoundBtn.Icon>
            <AntDesign name="plus" color={palette.font_black} />
          </RoundBtn.Icon>
          <RoundBtn.Text color={palette.font_black}>숙소</RoundBtn.Text>
        </RoundBtn>
        <RoundBtn color={palette.grey} onPress={{}}>
          <RoundBtn.Text color={palette.font_black}>체크리스트</RoundBtn.Text>
        </RoundBtn>
        <RoundBtn color={palette.grey} onPress={{}}>
          <RoundBtn.Text color={palette.font_black}>가계부</RoundBtn.Text>
        </RoundBtn>
      </FlexBox>
      <Spacer margin={10}></Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
