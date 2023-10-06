import Badge from "./Badge";
import { Icon_Ionicons } from "./Icons";

export default ({ isBadgeVisible = true }) => {
  <>
    {isBadgeVisible ? (
      <Badge size={10}>
        <Icon_Ionicons name="logo-ionitron"></Icon_Ionicons>
      </Badge>
    ) : (
      <Icon_Ionicons name="logo-ionitron"></Icon_Ionicons>
    )}
  </>;
};
