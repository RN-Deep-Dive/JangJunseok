import { Ionicons } from "@expo/vector-icons";
import React from "react";

export const Icon_Ionicons = (props) => {
  return (
    <Ionicons
      name={props.name}
      size={props.size || 20}
      color={props.color || "black"}
    />
  );
};
