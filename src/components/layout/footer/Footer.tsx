import { Toolbar, Box, Typography, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import facebook from "../../../assets/svg/facebook.svg";
import instagram from "../../../assets/svg/instagram.svg";
import telegram from "../../../assets/svg/telegram.svg";

function Footer() {
  return (
    <footer className="bg-almost-menu-bg-blue text-white pt-5 mt-auto">
      <Toolbar className="flex flex-col">
        <Box className="flex w-full text-lg opacity-60 font-bold justify-between">
          <NavLink to="/">Хокимият</NavLink>
          <NavLink to="/">Деятельность</NavLink>
          <NavLink to="/">Интерактивные услуги</NavLink>
          <NavLink to="/">Открытые данные</NavLink>
          <NavLink to="/">Пресс Служба</NavLink>
          <NavLink to="/">Борьба с коррупцией</NavLink>
        </Box>
        <Box className="flex w-full my-10 justify-between">
          <Box>
            <Typography variant="h4" className="uppercase !mb-5">
              Хокимият город Нукус
            </Typography>
            <Typography variant="h6" className="opacity-70">
              Ул Досназарова,
            </Typography>
          </Box>
          <Box className="flex items-center justify-center gap-10 w-1/3">
            <img src={telegram} alt="telegram" />
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
          </Box>
        </Box>
      </Toolbar>
      <Divider className="bg-white" />
      <Toolbar className="flex justify-between">
        <Typography variant="body2">Все права защищены</Typography>
        <Typography variant="body2">
          Copyright 2024 - Разработано в Bizler Group
        </Typography>
      </Toolbar>
    </footer>
  );
}

export default Footer;
