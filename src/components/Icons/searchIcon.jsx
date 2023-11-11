import React from "react";
import { IconContainer } from "./style";
import { FaSearch } from "react-icons/fa";

export function SearchIcon({ width, height, iconSize, disabled }) {
  return (
    <IconContainer
      width={width}
      height={height}
    >
      <FaSearch size={iconSize} />
    </IconContainer>
  );
}




