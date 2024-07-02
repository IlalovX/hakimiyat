import { Toolbar, Box, Typography, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import symbol from "../../../assets/img/flag-gerb-kk 1.png";

function Footer() {
  return (
    <footer className="bg-almost-menu-bg-blue text-white py-5 mt-auto">
      <Toolbar className="flex flex-col space-y-5">
        <Box className="flex w-full text-lg   font-bold justify-between">
          <NavLink to="/">Хокимият</NavLink>
          <Divider orientation="vertical" flexItem className="bg-white w-1" />
          <NavLink to="/">Деятельность</NavLink>
          <Divider
            orientation="vertical"
            flexItem
            className="bg-white w-1"
          />{" "}
          <NavLink to="/">Интерактивные услуги</NavLink>
          <Divider
            orientation="vertical"
            flexItem
            className="bg-white w-1"
          />{" "}
          <NavLink to="/">Открытые данные</NavLink>
          <Divider
            orientation="vertical"
            flexItem
            className="bg-white w-1"
          />{" "}
          <NavLink to="/">Пресс Служба</NavLink>
          <Divider
            orientation="vertical"
            flexItem
            className="bg-white w-1"
          />{" "}
          <NavLink to="/">Борьба с коррупцией</NavLink>
        </Box>
        <Box className="flex items-center justify-center gap-10 border-b-2 border-gray-400 pb-5">
          <img src={symbol} className="w-40 h-24" />
          <Typography variant="h6" className="text-white uppercase">
            Qaraqalpaqstan Respublikasi Хокимият города Нукуса
          </Typography>
        </Box>
        <Typography variant="body1">© 2001-2024 Все права защищены</Typography>
      </Toolbar>
    </footer>
  );
}

export default Footer;
