import React, { memo } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { BenefitsMobile } from "./Mobile";
const Benefits = () => {
//   const isMobile = useMediaQuery("(max-width:720px)");
//   if (isMobile) {
    return <BenefitsMobile/>;
//   }
};

export default memo(Benefits);