import React, { useState } from "react";
import { useStyles } from "../Mobile/styles";
// Assets
import Logo from "../../../assets/logo.svg";
import MenuIcon from "../../../assets/menu.svg";
// MUI
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const MobileMenu = () => {
  const classes = useStyles();
  //for styles

  const [growMenu, setGrowMenu] = useState(false);
  const open = Boolean(growMenu);
  const handleClick = (event) => {
    setGrowMenu(event.currentTarget);
  };
  const handleClose = () => {
    setGrowMenu(false);
  };

  return (
    <div>
      <div className={classes.navigationBlock}>
        <img src={Logo} alt="logo" width="60px" height="60px" />
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <img src={MenuIcon} alt="menu" width="40px" height="40px" />
        </Button>
      </div>
      <div>
        <Menu
          id="basic-menu"
          anchorEl={growMenu}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>Курсы</MenuItem>
          <MenuItem>Преимущества</MenuItem>
          <MenuItem>Профориентация</MenuItem>
          <MenuItem>О нас</MenuItem>
          <MenuItem>FAQ</MenuItem>
          <MenuItem>
            <Button variant="contained" className={classes.callBtn}>
              Заказать звонок
            </Button>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default MobileMenu;
