import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RouterConsts } from "../../../routes/routesConsts/RouterConsts";
import { RouterEnums } from "../../../routes/routesEnums/RouterEnums";
import Symbol from "../../../assets/img/flag-gerb-kk 1.png";
import map from "../../../assets/svg/map.svg";
import global from "../../../assets/svg/global.svg";

function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar className="!flex-col" position="static">
      <Toolbar className=" justify-end gap-5 bg-almost-menu-bg-blue ">
        <Box className="flex gap-2 items-center">
          <img src={map} alt="map" className="w-6 h-6" />
          <NavLink
            to={RouterConsts[RouterEnums.MAIN]}
            className="text-lg font-bold"
          >
            Карта сайта
          </NavLink>
        </Box>
        <Button
          onClick={handleClick}
          className="flex items-center gap-2 !text-white !normal-case !text-lg !font-bold"
        >
          <img src={global} alt="global" className="w-6 h-6" />
          Язык
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Русский</MenuItem>
          <MenuItem onClick={handleClose}>Узбекский</MenuItem>
          <MenuItem onClick={handleClose}>Каракалпакский</MenuItem>
        </Menu>
      </Toolbar>
      <Toolbar className="bg-white flex gap-10 py-2">
        <img src={Symbol} alt="symbol" />
        <List className="flex gap-5  w-full text-almost-menu-text-blue">
          <ListItem className="!p-0 !text-end">
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  className="!font-bold cursor-pointer"
                >
                  Хокимият
                </Typography>
              }
            />
          </ListItem>
          <ListItem className="!p-0 !text-end">
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  className="!font-bold cursor-pointer"
                >
                  Деятельность
                </Typography>
              }
            />
          </ListItem>
          <ListItem className="!p-0 !text-end">
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  className="!font-bold cursor-pointer"
                >
                  Интерактивные услуги
                </Typography>
              }
            />
          </ListItem>
          <ListItem className="!p-0 !text-end">
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  className="!font-bold cursor-pointer"
                >
                  Открытые данные
                </Typography>
              }
            />
          </ListItem>
          <ListItem className="!p-0 !text-end">
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  className="!font-bold cursor-pointer"
                >
                  Пресс Служба
                </Typography>
              }
            />
          </ListItem>
          <ListItem className="!p-0 !text-end">
            <ListItemText
              primary={
                <Typography variant="body1" className="!font-bold ">
                  Борьба с коррупцией
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
