import { useState } from "react";
import {
  Typography,
  Box,
  Toolbar,
  Card,
  CardContent,
  CardActions,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

//img
import telegram from "../../assets/img/socials/telegram.png";
import facebook from "../../assets/img/socials/facebook.png";
import instagram from "../../assets/img/socials/instagram.png";
import twitter from "../../assets/img/socials/twitter.png";
import youtube from "../../assets/img/socials/youtube.png";
import year from "../../assets/img/ru.png";
import akim from "../../assets/img/image 15.png";
import building from "../../assets/img/prezident-1.png";
import phone_call from "../../assets/img/phone_icon.png";
import message from "../../assets/img/message_icon.png";
import nukus from "../../assets/img/0-2-nukus-1024x534.jpg.png";
import home_link from "../../assets/img/home-links/Link.png";
import post_link from "../../assets/img/home-links/Link (1).png";
import message_link from "../../assets/img/home-links/Link (2).png";
import phone_link from "../../assets/img/home-links/Link (3).png";
import view_link from "../../assets/img/home-links/Container.png";

//svg
import data from "../../assets/svg/data.svg";
import view from "../../assets/svg/view.svg";
import facebook_svg from "../../assets/svg/socials/SVG.svg";
import twitter_svg from "../../assets/svg/socials/SVG (1).svg";
import telegram_svg from "../../assets/svg/socials/SVG (2).svg";
import map from "../../assets/svg/map.svg";

//swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { DEPARTMENTS_ARRAY, USEFUL_LINKS } from "../../db/data";
import { NavLink } from "react-router-dom";

function Home() {
  const [tabsValue, setTabsValue] = useState("1");

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setTabsValue(newValue);
  };
  return (
    <main className="relative">
      <div className="absolute min-h-[450px] w-full top-0 left-0 bg-gradient-to-b from-white to-gray-500 to-gray-800 -z-10">
        <div className="flex flex-col gap-3 p-2 bg-blue-700 absolute top-1/2 left-0 transform -translate-y-1/2">
          <img src={home_link} alt="" className="w-5 h-5 m-auto" />
          <hr className="text-white" />
          <img src={post_link} alt="" className="w-5 h-5 m-auto" />
          <hr className="text-white" />
          <img src={message_link} alt="" className="w-5 h-5 m-auto" />
          <hr className="text-white" />
          <img src={phone_link} alt="" className="w-5 h-5 m-auto" />
          <hr className="text-white" />
          <img src={view_link} alt="" className="w-5 h-5 m-auto" />
        </div>
      </div>
      <Toolbar className="!block space-y-10">
        <div className="flex flex-col items-end justify-center min-h-[350px]">
          <div>
            <Typography variant="h4" className="text-white ">
              Хокимият города Нукуса
            </Typography>
            <List className="flex text-white">
              <ListItem className="!pl-0">
                <ListItemAvatar>
                  <Avatar src={telegram} className="w-8 h-8" />
                </ListItemAvatar>
                <ListItemText primary="Telegram" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={facebook} className="w-8 h-8" />
                </ListItemAvatar>
                <ListItemText primary="Facebook" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={instagram} className="w-8 h-8" />
                </ListItemAvatar>
                <ListItemText primary="Instagram" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={twitter} className="w-8 h-8" />
                </ListItemAvatar>
                <ListItemText primary="Twitter" />
              </ListItem>
            </List>
          </div>
        </div>
        <Box>
          <Grid container className="text-center bg-white">
            {DEPARTMENTS_ARRAY.map((department, index) => (
              <Grid
                item
                xs={2.4}
                key={index}
                className="border border-gray-300 p-2 "
              >
                <div className="flex items-center justify-center h-full">
                  <div className="w-[30%] flex items-end justify-end">
                    <img
                      src={department.svg}
                      alt={department.title}
                      className="w-12 h-12 mr-2"
                    />
                  </div>
                  <p className="w-[70%] text-left">{department.title}</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
        <article className="relative space-y-10">
          <Box className="!w-[80%] space-y-5">
            <Typography
              variant="h4"
              className="border-l-8 border-blue-600 pl-4"
            >
              Актуально новости
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Card className="flex flex-col gap-5 ">
                  <div className="bg-gray-600 h-96"></div>
                  <Typography variant="h5">
                    “O‘zbekiston temir yo‘llari” aktsiyadorlik jamiyati
                    Boshqaruvi raisi Z.G.Narzullaev va Vazirlar Kengashining
                    Raisi F.Ermanov tadbirkorlar bilan…
                  </Typography>
                  <Box className="flex gap-3 text-gray-600 w-full">
                    <Typography
                      variant="body2"
                      component="span"
                      className="flex gap-2"
                    >
                      <img src={data} alt="" />
                      02.02.2024 18:13:09
                    </Typography>
                    <Typography
                      variant="body2"
                      component="span"
                      className="flex gap-2"
                    >
                      <img src={view} alt="" />
                      3818
                    </Typography>
                  </Box>
                  <CardContent className="!p-0">
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button>Подробно</button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid
                container
                item
                xs={6}
                spacing={2}
                className="flex flex-col justify-between"
              >
                <Grid item>
                  <Card className="flex gap-5 h-full">
                    <div className="bg-gray-600 h-full w-32"></div>
                    <Box>
                      <CardContent>
                        <Typography variant="h6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </Typography>
                        <Box className="flex gap-3 text-gray-600 w-full">
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={data} alt="" />
                            02.02.2024 18:13:09
                          </Typography>
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={view} alt="" />
                            3818
                          </Typography>
                        </Box>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className="flex gap-5 h-full">
                    <div className="bg-gray-600 h-full w-32"></div>
                    <Box>
                      <CardContent>
                        <Typography variant="h6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </Typography>
                        <Box className="flex gap-3 text-gray-600 w-full">
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={data} alt="" />
                            02.02.2024 18:13:09
                          </Typography>
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={view} alt="" />
                            3818
                          </Typography>
                        </Box>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className="flex gap-5 h-full">
                    <div className="bg-gray-600 h-full w-32"></div>
                    <Box>
                      <CardContent>
                        <Typography variant="h6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </Typography>
                        <Box className="flex gap-3 text-gray-600 w-full">
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={data} alt="" />
                            02.02.2024 18:13:09
                          </Typography>
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={view} alt="" />
                            3818
                          </Typography>
                        </Box>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className="flex gap-5 h-full">
                    <div className="bg-gray-600 h-full w-32"></div>
                    <Box>
                      <CardContent>
                        <Typography variant="h6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </Typography>
                        <Box className="flex gap-3 text-gray-600 w-full">
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={data} alt="" />
                            02.02.2024 18:13:09
                          </Typography>
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={view} alt="" />
                            3818
                          </Typography>
                        </Box>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className="flex gap-5 h-full">
                    <div className="bg-gray-600 h-full w-32"></div>
                    <Box>
                      <CardContent>
                        <Typography variant="h6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </Typography>
                        <Box className="flex gap-3 text-gray-600 w-full">
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={data} alt="" />
                            02.02.2024 18:13:09
                          </Typography>
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={view} alt="" />
                            3818
                          </Typography>
                        </Box>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <div className="text-center py-1">
              <span className="cursor-pointer">Все новости</span>
            </div>
          </Box>
          <Box className="!w-[80%] space-y-10">
            <Typography
              variant="h4"
              className="border-l-8 border-blue-600 pl-4"
            >
              Последние новости
            </Typography>
            <Box className="relative !max-h-full">
              <Swiper direction="vertical" slidesPerView={4} spaceBetween={30}>
                <SwiperSlide className="!max-h-[200px]">
                  <Card className="flex gap-5 h-full">
                    <div className="bg-gray-600 h-full w-80"></div>
                    <Box>
                      <CardContent>
                        <Typography variant="h6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </Typography>
                        <Box className="flex gap-3 text-gray-600 w-full">
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={data} alt="" />
                            02.02.2024 18:13:09
                          </Typography>
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={view} alt="" />
                            3818
                          </Typography>
                        </Box>
                        <Typography variant="body2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <button>Подробно</button>
                      </CardActions>
                    </Box>
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="!max-h-[200px]">
                  <Card className="flex gap-5 h-full">
                    <div className="bg-gray-600 h-full w-80"></div>
                    <Box>
                      <CardContent>
                        <Typography variant="h6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </Typography>
                        <Box className="flex gap-3 text-gray-600 w-full">
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={data} alt="" />
                            02.02.2024 18:13:09
                          </Typography>
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={view} alt="" />
                            3818
                          </Typography>
                        </Box>
                        <Typography variant="body2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <button>Подробно</button>
                      </CardActions>
                    </Box>
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="!max-h-[200px]">
                  <Card className="flex gap-5 h-full">
                    <div className="bg-gray-600 h-full w-80"></div>
                    <Box>
                      <CardContent>
                        <Typography variant="h6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </Typography>
                        <Box className="flex gap-3 text-gray-600 w-full">
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={data} alt="" />
                            02.02.2024 18:13:09
                          </Typography>
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={view} alt="" />
                            3818
                          </Typography>
                        </Box>
                        <Typography variant="body2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <button>Подробно</button>
                      </CardActions>
                    </Box>
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="!max-h-[200px]">
                  <Card className="flex gap-5 h-full">
                    <div className="bg-gray-600 h-full w-80"></div>
                    <Box>
                      <CardContent>
                        <Typography variant="h6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </Typography>
                        <Box className="flex gap-3 text-gray-600 w-full">
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={data} alt="" />
                            02.02.2024 18:13:09
                          </Typography>
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={view} alt="" />
                            3818
                          </Typography>
                        </Box>
                        <Typography variant="body2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <button>Подробно</button>
                      </CardActions>
                    </Box>
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="!max-h-[200px]">
                  <Card className="flex gap-5 h-full">
                    <div className="bg-gray-600 h-full w-80"></div>
                    <Box>
                      <CardContent>
                        <Typography variant="h6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </Typography>
                        <Box className="flex gap-3 text-gray-600 w-full">
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={data} alt="" />
                            02.02.2024 18:13:09
                          </Typography>
                          <Typography
                            variant="body2"
                            component="span"
                            className="flex gap-2"
                          >
                            <img src={view} alt="" />
                            3818
                          </Typography>
                        </Box>
                        <Typography variant="body2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <button>Подробно</button>
                      </CardActions>
                    </Box>
                  </Card>
                </SwiperSlide>
              </Swiper>
            </Box>
            <Divider />
            <div className="text-center py-1">
              <span className="cursor-pointer">Все новости</span>
            </div>
          </Box>
          <Box className="h-[80%] w-[19%] absolute top-1/2 right-0 transform -translate-y-1/2 p-3 space-y-5">
            <img src={year} alt="" className="w-full h-48" />
            <div>
              <Typography
                variant="h6"
                className="border-l-4 border-blue-600 pl-4"
              >
                Обращение
              </Typography>
              <List>
                <ListItem className="!p-0">
                  <ListItemText>
                    <span className="font-bold">Адресс:</span> Республика
                    Каракалпакстан, 230100, улица А.Досназаров 96 дом.
                  </ListItemText>
                </ListItem>
                <ListItem className="!p-0">
                  <ListItemText>
                    <span className="font-bold">Телефон:</span> 0 (361)
                    123-45-67, 0 (361) 123-45-67
                  </ListItemText>
                </ListItem>
                <ListItem className="!p-0">
                  <ListItemText>
                    <span className="font-bold">Электрон почта:</span>
                    nukus@gmail.uz
                  </ListItemText>
                </ListItem>
              </List>
            </div>
            <div className="text-center space-y-3">
              <Avatar src={akim} className="!w-60 !h-60 !m-auto" />
              <Typography variant="h5">
                Данияров Абатбай <br /> Сапарбаевич
              </Typography>
              <Typography variant="body2" className="text-gray-400">
                Хаким города Нукус
              </Typography>
            </div>
            <div className="space-y-5 text-center">
              <img src={building} alt="" className="h-40" />
              <Typography variant="body1">
                Официальный веб-сайт Президента Республики Узбекистан
              </Typography>
              <div className="flex justify-center items-center gap-3">
                <img src={youtube} alt="" className="w-11 h-11" />
                <img src={twitter} alt="" className="w-11 h-11" />
                <img src={instagram} alt="" className="w-11 h-11" />
                <img src={telegram} alt="" className="w-11 h-11" />
                <img src={facebook} alt="" className="w-11 h-11" />
              </div>
              <Typography variant="body1">
                Официальные страницы в социальных сетях Президента Республики
                Узбекистан
              </Typography>
            </div>
            <div className="space-y-5">
              <Typography
                variant="h6"
                className="border-l-4 border-blue-600 pl-4"
              >
                Статистика обращений
              </Typography>
              <div className="space-y-3 text-lg">
                {" "}
                <p className="text-white bg-green-500 text-center rounded-lg">
                  Túsinik berilgen - 356
                </p>
                <p className="text-white bg-blue-400 text-center rounded-lg">
                  Huqıqıy maǵlıwmat berilgen - 54
                </p>
                <p className="text-white bg-orange-400 text-center rounded-lg">
                  Anonim múrájatlar - 26
                </p>
                <p className="text-white bg-blue-800 text-center rounded-lg">
                  Kórip shıǵılmaqta - 110
                </p>
              </div>
            </div>
          </Box>
        </article>
        <Box className="flex justify-center gap-[10%] items-center ">
          <div className="flex gap-5 items-center">
            <img src={phone_call} alt="" className="w-8 h-8" />
            <span>+998(61) 123-45-67</span>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div className="flex gap-5 items-center">
            <img src={message} alt="" className="w-8 h-8" />
            <span>
              Электронная почта <br />
              nukus@gmail.uz
            </span>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div className="flex gap-5">
            <img src={facebook_svg} alt="" />
            <img src={twitter_svg} alt="" />
            <img src={telegram_svg} alt="" />
            <button className="py-3 px-4 bg-blue-950 text-white">
              НАПИСАНИЕ СООБЩЕНИЯ
            </button>
          </div>
        </Box>
        <Box className="space-y-10">
          <Typography
            variant="h4"
            className="border-l-8 border-blue-600 pl-4 ml-5"
          >
            Инфографика
          </Typography>
          <Box>
            <Typography
              variant="h6"
              className="border-l-8 border-blue-600 pl-4 "
            >
              Территориальная структура
            </Typography>
            <Box className="flex justify-between items-center gap-2">
              <img
                src={map}
                alt=""
                className="min-h-[560px] min-w-[590px] m-auto"
              />
              <Box className="space-y-5">
                <Typography variant="h5">город Нукус</Typography>
                <img src={nukus} alt="" className="w-full min-h-[330px]" />
                <List>
                  <ListItem>
                    <ListItemText>
                      <span className="font-bold text-xl">
                        Tashkil etilgan vaqti
                      </span>
                      – 1932-yil.
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <span className="font-bold text-xl">
                        Umumiy yer maydoni
                      </span>
                      – 221 ming km
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <span className="font-bold text-xl">
                        Shahar holatidagi shaharchalar soni
                      </span>{" "}
                      – 12.
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <span className="font-bold text-xl">
                        Fuqarolar yig'inlari soni
                      </span>
                      – 71.
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <span className="font-bold text-xl">
                        2024-yil 1-yanvar holatiga aholi soni
                      </span>
                      – 339,1 ming kishi.
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <span className="font-bold text-xl">
                        Chegaradosh hududlar
                      </span>
                      – Xo'jayli, Taqiyotosh, Qorao'zak, Nukus tumani
                    </ListItemText>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <TabContext value={tabsValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Полезные ссылки" value="1" />
                <Tab label="Сайты министерства" value="2" />
                <Tab label="Сайты Хокимиятов" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Grid container spacing={4}>
                {USEFUL_LINKS.map((link) => (
                  <Grid item xs={2} className="!h-64">
                    <Card className="h-full">
                      <Avatar src={link.img} className="!w-16 !h-16 m-auto" />
                      <CardContent className="text-center">
                        <Typography variant="body1">{link.title}</Typography>
                        <NavLink
                          to="/"
                          className="text-blue-700 cursor-pointer"
                        >
                          {link.link_text}
                        </NavLink>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value="2">
              <Grid container spacing={4}>
                {USEFUL_LINKS.map((link) => (
                  <Grid item xs={2} className="!h-64">
                    <Card className="h-full">
                      <Avatar src={link.img} className="!w-16 !h-16 m-auto" />
                      <CardContent className="text-center">
                        <Typography variant="body1">{link.title}</Typography>
                        <NavLink
                          to="/"
                          className="text-blue-700 cursor-pointer"
                        >
                          {link.link_text}
                        </NavLink>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value="3">
              <Grid container spacing={4}>
                {USEFUL_LINKS.map((link) => (
                  <Grid item xs={2} className="!h-64">
                    <Card className="h-full">
                      <Avatar src={link.img} className="!w-16 !h-16 m-auto" />
                      <CardContent className="text-center">
                        <Typography variant="body1">{link.title}</Typography>
                        <NavLink
                          to="/"
                          className="text-blue-700 cursor-pointer"
                        >
                          {link.link_text}
                        </NavLink>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          </TabContext>
        </Box>
      </Toolbar>
    </main>
  );
}

export default Home;
