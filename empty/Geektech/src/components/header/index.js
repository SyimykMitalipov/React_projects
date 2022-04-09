import React, { memo } from "react";
import Menu from "./Desktop";
import MobileMenu from "./Mobile";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const isMobile = useMediaQuery("(max-width:720px)");

  if (isMobile) {
    return <MobileMenu />;
  }
  return <Menu />;
};

export default memo(Header);
