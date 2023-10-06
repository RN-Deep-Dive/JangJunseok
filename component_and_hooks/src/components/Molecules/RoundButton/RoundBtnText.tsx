import { View } from "react-native";
import Typography from "../../Atoms/Typography";

export default ({ children, color }) => {
  return (
    <Typography fontColor={color} fontSize={13} fontWeight={500}>
      {children}
    </Typography>
  );
};
