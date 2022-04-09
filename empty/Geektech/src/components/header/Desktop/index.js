import React from "react";
import { useStyles } from "./styles";
// Assets
import Logo from "../../../assets/logo.svg";
// Mui
import { Button, Box } from "@mui/material";

const Menu = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.navigationBlock}>
        <div>
          <img src={Logo} alt="logo" width="80px" height="80px" />
        </div>
        <Box className={classes.navigation}>
          <p>Курсы</p>
          <p>Преимущества</p>
          <p>Профориентация</p>
          <p>О нас</p>
          <p>FAQ</p>
          <Button variant="contained" className={classes.callBtn}>
            Заказать звонок
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Menu;
