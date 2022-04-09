import React, { memo } from "react";
import Main from "./Desktop";
import MobileMain from "./Mobile";
import useMediaQuery from "@mui/material/useMediaQuery";

const MainPage = (props) => {
  const { isCool } = props;
  const isMobile = useMediaQuery("(max-width:720px)");

  if (isMobile) {
    return <MobileMain isCool={isCool} />;
  }
  return <Main isCool={isCool} />;
};

export default memo(MainPage);
