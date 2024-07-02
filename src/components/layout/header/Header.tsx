import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import symbol from "../../../assets/img/useful-links/002.png";
import phone from "../../../assets/img/phone_icon.png";
import { NavArray } from "../../../db/data";
import NavMenu from "../../menu/NavMenu";
import MuiSwitch from "../../switch/MuiSwitch";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
function Header() {
  return (
    <AppBar position="static">
      <Box className="!w-full">
        <Toolbar className="flex !items-center !justify-between ">
          <List className="flex gap-2">
            <ListItem>
              <ListItemText className="text-nowrap">
                Государственные символы
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText className="text-nowrap">Карта сайта</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText className="text-nowrap">
                Отправить обращение
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText className="text-nowrap">Eski sayt</ListItemText>
            </ListItem>
          </List>
          <List className="flex gap-2">
            <ListItem>
              <ListItemText>Каракалпакский</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Узбекский</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Русский</ListItemText>
            </ListItem>
          </List>
          <Typography variant="body1" className="text-white">
            2024, 26 June 2:10:10 PM
          </Typography>
        </Toolbar>
      </Box>
      <Box className="!w-full !bg-white text-black">
        <Toolbar className="!flex-col">
          <Box className="flex items-center justify-between  !w-full">
            <div className="flex gap-5 items-center">
              <img src={symbol} className="w-28 h-28" />
              <div>
                <Typography variant="h5" className="text-left">
                  Республика <br /> Каракалпакстан
                </Typography>
                <Typography variant="h6" className="text-nowrap">
                  Хокимият города Нукуса
                </Typography>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex space-x-3 border-r-4 pr-5">
                <Divider orientation="vertical" variant="middle" flexItem>
                  <img src={phone} className="w-6 h-6" />
                </Divider>
                <div>
                  <Typography variant="h5" className="uppercase font-bold">
                    Телефоны доверия
                  </Typography>
                  <p>+998 61 123-45-67</p>
                  <span>ВСЕ ТЕЛЕФОНЫ</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MenuIcon className="!w-16 !h-16 text-gray-500 cursor-pointer" />
              </div>
            </div>
          </Box>
          <nav className="!w-full flex justify-between items-center space-x-40">
            <List className="flex gap-5 !w-full ">
              {NavArray.map((item) => (
                <ListItem className="!p-0 ">
                  <ListItemText
                    primary={
                      <Typography
                        variant="h6"
                        className="!font-bold cursor-pointer text-nowrap"
                      >
                        <NavMenu item={item} />
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <div className="flex items-center ">
              <MuiSwitch />
              <SearchIcon className="!w-9 !h-9" />
            </div>
          </nav>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default Header;
