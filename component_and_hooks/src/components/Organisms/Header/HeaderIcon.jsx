import React from "react";
import { View } from "react-native";
import Button from "../../Atoms/Button";
import { Icon } from "../../Atoms/Icon";

const HeaderIcon = (props) => {
  return (
    <Button>
      <Icon
        name={props.iconName}
        size={props.size || 24}
        color={props.color || "black"}
      ></Icon>
    </Button>
  );
};

export default HeaderIcon;
