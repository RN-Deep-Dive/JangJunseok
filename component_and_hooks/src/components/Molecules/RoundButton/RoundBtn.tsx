import { StyleSheet, View } from "react-native";
import RoundBtnText from "./RoundBtnText";
import RoundBtnIcon from "./RoundBtnIcon";
import Button from "../../Atoms/Button";

const RoundBtn = ({ children, color, onPress }) => {
  return (
    <Button onPress={onPress} style={{}}>
      <View style={[styles.container, { backgroundColor: color }]}>
        {children}
      </View>
    </Button>
  );
};

export default RoundBtn;

RoundBtn.Text = RoundBtnText;
RoundBtn.Icon = RoundBtnIcon;

const styles = StyleSheet.create({
  container: {
    padding: 11,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
  },
});
