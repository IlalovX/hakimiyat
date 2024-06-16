import {
  Typography,
  Box,
  Toolbar,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";

//svg
import Background1 from "../../assets/svg/home/Background.svg";
import Background2 from "../../assets/svg/home/Background (1).svg";
import Background3 from "../../assets/svg/home/Background (2).svg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";

//img
import slide1 from "../../assets/img/home/2question.png";
import slide2 from "../../assets/img/home/budgeting.png";
import slide3 from "../../assets/img/home/file.png";
import slide4 from "../../assets/img/home/auction.png";
import slide5 from "../../assets/img/home/corruption.png";
import karta from "../../assets/img/home/karta3 (1) 1.png";
import structure1 from "../../assets/img/structure/icon-1.png";
import structure2 from "../../assets/img/structure/izobrazenie-5.png";
import structure3 from "../../assets/img/structure/izobrazenie-2.png";
import structure4 from "../../assets/img/structure/icon.png";
import structure5 from "../../assets/img/structure/izobrazenie-1.png";
import structure6 from "../../assets/img/structure/icon-2.png";
import structure7 from "../../assets/img/structure/us4.png";
import structure8 from "../../assets/img/structure/izobrazenie-9.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

function Home() {
  return (
    <>
      <Toolbar className="!items-start flex-col gap-10">
        <Box className="w-full bg-almost-home-bg-grey rounded-br-xl rounded-bl-xl  !p-5">
          <Typography
            variant="body1"
            className="border-l-4 border-blue-600 pl-4 !text-xl"
          >
            Интерактивная приемная
          </Typography>
          <Box className="flex justify-center items-center gap-5 my-16">
            <Box className="flex gap-5 items-center">
              <img src={Background1} alt="Background1" />
              <Typography variant="body1">Интерактивная приемная</Typography>
            </Box>
            <Box className="flex gap-5 items-center">
              <img src={Background2} alt="Background2" />
              <Typography variant="body1">Интерактивная приемная</Typography>
            </Box>
            <Box className="flex gap-5 items-center">
              <img src={Background3} alt="Background3" />
              <Typography variant="body1">Интерактивная приемная</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="relative max-w-screen-2xl mx-auto my-10">
          <div className="absolute h-4 top-1/2 left-[-50px]  z-10 transform -translate-y-1/2 -translate-x-1/2">
            <button className="swiper-button-prev "></button>
          </div>
          <div className="absolute top-1/2 right-[-50px] z-10 transform -translate-y-1/2 translate-x-1/2">
            <button className="swiper-button-next "></button>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={5}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            className="swiper-container"
          >
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white rounded-lg  px-2 !h-16">
              <div className="h-full flex justify-end items-center">
                <p className="h-full w-full bg-white text-black flex items-center justify-center p-4">
                  Часто задаваемые вопросы
                </p>
                <div className="flex items-center justify-center w-1/3">
                  <img src={slide1} alt="" className="w-8 h-8" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white rounded-lg  px-2 !h-16">
              <div className="h-full flex justify-end items-center">
                <p className="h-full w-full bg-white text-black flex items-center justify-center p-4">
                  Нормативно-правовые документы
                </p>
                <div className="flex items-center justify-center w-1/3">
                  <img src={slide2} alt="" className="w-8 h-8" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white rounded-lg  px-2 !h-16">
              <div className="h-full flex justify-end items-center">
                <p className="h-full w-full bg-white text-black flex items-center justify-center p-4">
                  Государственные программы
                </p>
                <div className="flex items-center justify-center w-1/3">
                  <img src={slide3} alt="" className="w-8 h-8" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white rounded-lg  px-2 !h-16">
              <div className="h-full flex justify-end items-center">
                <p className="h-full w-full bg-white text-black flex items-center justify-center p-4">
                  Стратегия действий
                </p>
                <div className="flex items-center justify-center w-1/3">
                  <img src={slide4} alt="" className="w-8 h-8" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white rounded-lg  px-2 !h-16">
              <div className="h-full flex justify-end items-center">
                <p className="h-full w-full bg-white text-black flex items-center justify-center p-4">
                  Заявление руководства
                </p>
                <div className="flex items-center justify-center w-1/3">
                  <img src={slide5} alt="" className="w-8 h-8" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white rounded-lg  px-2 !h-16">
              <div className="h-full flex justify-end items-center">
                <p className="h-full w-full bg-white text-black flex items-center justify-center p-4">
                  Часто задаваемые вопросы
                </p>
                <div className="flex items-center justify-center w-1/3">
                  <img src={Background2} alt="" className="w-8 h-8" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white rounded-lg  px-2 !h-16">
              <div className="h-full flex justify-end items-center">
                <p className="h-full w-full bg-white text-black flex items-center justify-center p-4">
                  Часто задаваемые вопросы
                </p>
                <div className="flex items-center justify-center w-1/3">
                  <img src={Background2} alt="" className="w-8 h-8" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white rounded-lg  px-2 !h-16">
              <div className="h-full flex justify-end items-center">
                <p className="h-full w-full bg-white text-black flex items-center justify-center p-4">
                  Часто задаваемые вопросы
                </p>
                <div className="flex items-center justify-center w-1/3">
                  <img src={Background2} alt="" className="w-8 h-8" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box className="space-y-10 w-full">
          <Typography variant="h4" className="border-l-4 border-blue-600 pl-4">
            Новости
          </Typography>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper max-w-screen!p-0"
          >
            <SwiperSlide>
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined" className="!bg-almost-home-bg-grey">
                  <CardContent>
                    <Typography
                      color="text.secondary"
                      className="text-xs border-l-4 border-blue-600 pl-2 "
                      gutterBottom
                    >
                      Новости
                    </Typography>
                    <Typography variant="h5" component="div">
                      Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions className="flex items-center">
                    <CalendarMonthIcon className="text-almost-menu-bg-blue" />
                    <Typography
                      variant="body1"
                      className="text-almost-menu-bg-blue !font-bold"
                    >
                      22.05.2024
                    </Typography>
                  </CardActions>
                </Card>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined" className="!bg-almost-home-bg-grey">
                  <CardContent>
                    <Typography
                      color="text.secondary"
                      className="text-xs border-l-4 border-blue-600 pl-2 "
                      gutterBottom
                    >
                      Новости
                    </Typography>
                    <Typography variant="h5" component="div">
                      Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions className="flex items-center">
                    <CalendarMonthIcon className="text-almost-menu-bg-blue" />
                    <Typography
                      variant="body1"
                      className="text-almost-menu-bg-blue !font-bold"
                    >
                      22.05.2024
                    </Typography>
                  </CardActions>
                </Card>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined" className="!bg-almost-home-bg-grey">
                  <CardContent>
                    <Typography
                      color="text.secondary"
                      className="text-xs border-l-4 border-blue-600 pl-2 "
                      gutterBottom
                    >
                      Новости
                    </Typography>
                    <Typography variant="h5" component="div">
                      Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions className="flex items-center">
                    <CalendarMonthIcon className="text-almost-menu-bg-blue" />
                    <Typography
                      variant="body1"
                      className="text-almost-menu-bg-blue !font-bold"
                    >
                      22.05.2024
                    </Typography>
                  </CardActions>
                </Card>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined" className="!bg-almost-home-bg-grey">
                  <CardContent>
                    <Typography
                      color="text.secondary"
                      className="text-xs border-l-4 border-blue-600 pl-2 "
                      gutterBottom
                    >
                      Новости
                    </Typography>
                    <Typography variant="h5" component="div">
                      Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions className="flex items-center">
                    <CalendarMonthIcon className="text-almost-menu-bg-blue" />
                    <Typography
                      variant="body1"
                      className="text-almost-menu-bg-blue !font-bold"
                    >
                      22.05.2024
                    </Typography>
                  </CardActions>
                </Card>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Toolbar>
      <div className="bg-almost-home-bg-grey w-full py-5 my-10">
        <Toolbar className="space-x-10 !items-start">
          <div className="space-y-10 w-1/3">
            <Typography
              variant="h5"
              className="border-l-4 border-blue-600 pl-4 "
            >
              Административно-территориальная <br /> структура
            </Typography>
            <img src={karta} alt="karta" className="mx-auto object-cover " />
          </div>
          <div className="space-y-10 w-2/3">
            <Typography
              variant="h5"
              className="border-l-4 border-blue-600 pl-4 !inline"
            >
              Полезные ссылки
            </Typography>
            <Grid container spacing={2} className="w-full">
              <Grid item xs={4} className="flex gap-2 items-center">
                <img src={structure1} alt="" />
                <Typography variant="inherit" className="uppercase">
                  Портал коллективных обращений
                </Typography>
              </Grid>
              <Grid item xs={4} className="flex gap-2 items-center">
                <img src={structure2} alt="" className="w-10 h-3" />
                <Typography variant="inherit" className="uppercase">
                  Официальный сайт Президента Республики Узбекистан
                </Typography>
              </Grid>
              <Grid item xs={4} className="flex gap-2 items-center">
                <img src={structure3} alt="" className="w-10 h-5" />
                <Typography variant="inherit" className="uppercase">
                  Законодательная палата Олий Мажлиса Республики Узбекистан
                </Typography>
              </Grid>
              <Grid item xs={4} className="flex gap-2 items-center">
                <img src={structure4} alt="" className="w-10 h-6" />
                <Typography variant="inherit" className="uppercase">
                  Единый портал интерактивных государственных услуг
                </Typography>
              </Grid>
              <Grid item xs={4} className="flex gap-2 items-center">
                <img src={structure5} alt="" className="w-10 h-4" />
                <Typography variant="inherit" className="uppercase">
                  Министерство иностранных дел Республики Узбекистан
                </Typography>
              </Grid>
              <Grid item xs={4} className="flex gap-2 items-center">
                <img src={structure6} alt="" className="w-8 h-10" />
                <Typography variant="inherit" className="uppercase">
                  Пресс-служба Президента Республики Узбекистан
                </Typography>
              </Grid>
              <Grid item xs={4} className="flex gap-2 items-center">
                <img src={structure7} alt="" className="w-10 h-4" />
                <Typography variant="inherit" className="uppercase">
                  Сенат Олий Мажлиса Республики Узбекистан
                </Typography>
              </Grid>
              <Grid item xs={4} className="flex gap-2 items-center">
                <img src={structure8} alt="" className="w-10 h-7" />
                <Typography variant="inherit" className="uppercase">
                  Национальный правовой интернет-портал
                </Typography>
              </Grid>
              <Grid item xs={4} className="flex gap-2 items-center">
                <img src={structure6} alt="" className="w-8 h-10" />
                <Typography variant="inherit" className="uppercase">
                  Правительственный портал Республики Узбекистан
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </div>
      <Toolbar className="flex-col !items-start justify-start gap-10 py-10">
        <Typography
          variant="h5"
          className="border-l-4 border-blue-600 pl-4 text-start"
        >
          Статистика
        </Typography>
        <Box className="relative max-w-screen-2xl mx-auto my-10">
          <div className="absolute h-4 top-1/2 left-[-50px]  z-10 transform -translate-y-1/2 -translate-x-1/2">
            <button className="swiper-button-prev "></button>
          </div>
          <div className="absolute top-1/2 right-[-50px] z-10 transform -translate-y-1/2 translate-x-1/2">
            <button className="swiper-button-next "></button>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={4}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            className="swiper-container"
          >
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white rounded-lg  px-2 !h-16">
              <div className="h-full flex justify-end items-center">
                <div className="h-full w-full bg-white text-black flex-col items-center justify-center  p-2  text-center">
                  <p className="text-xl">100</p>
                  <p className="text-lg">Проекты</p>
                </div>
                <div className="flex items-center justify-center w-1/3">
                  <ChecklistOutlinedIcon className="!w-11 !h-11" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white rounded-lg  px-2 !h-16">
              <div className="h-full flex justify-end items-center">
                <div className="h-full w-full bg-white text-black flex-col items-center justify-center  p-2  text-center">
                  <p className="text-xl">100</p>
                  <p className="text-lg">Проекты</p>
                </div>
                <div className="flex items-center justify-center w-1/3">
                  <BusinessCenterOutlinedIcon className="!w-11 !h-11" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white rounded-lg  px-2 !h-16">
              <div className="h-full flex justify-end items-center">
                <div className="h-full w-full bg-white text-black flex-col items-center justify-center  p-2  text-center">
                  <p className="text-xl">100</p>
                  <p className="text-lg">Проекты</p>
                </div>
                <div className="flex items-center justify-center w-1/3">
                  <BusinessCenterOutlinedIcon className="!w-11 !h-11" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white rounded-lg  px-2 !h-16">
              <div className="h-full flex justify-end items-center">
                <div className="h-full w-full bg-white text-black flex-col items-center justify-center  p-2  text-center">
                  <p className="text-xl">100</p>
                  <p className="text-lg">Проекты</p>
                </div>
                <div className="flex items-center justify-center w-1/3">
                  <BusinessCenterOutlinedIcon className="!w-11 !h-11" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white rounded-lg  px-2 !h-16">
              <div className="h-full flex justify-end items-center">
                <div className="h-full w-full bg-white text-black flex-col items-center justify-center  p-2  text-center">
                  <p className="text-xl">100</p>
                  <p className="text-lg">Проекты</p>
                </div>
                <div className="flex items-center justify-center w-1/3">
                  <BusinessCenterOutlinedIcon className="!w-11 !h-11" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Box>
        <Typography
          variant="h5"
          className="border-l-4 border-blue-600 pl-4 text-start"
        >
          Медиотека
        </Typography>
        <Box className="relative max-w-screen-2xl mx-auto">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow]}
            initialSlide={3}
            className="mySwiper h-[300px]"
          >
            <SwiperSlide className="!w-[380px]">
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide className="!w-[380px]">
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide className="!w-[380px]">
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              {/* <video
                className=" !w-full !h-full object-cover"
                controls
                loop
                muted
                src="https://www.w3schools.com/html/mov_bbb.mp4"
              /> */}
            </SwiperSlide>
            <SwiperSlide className="!w-[380px]">
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide className="!w-[380px]">
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide className="!w-[380px]">
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide className="!w-[380px]">
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide className="!w-[380px]">
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide className="!w-[380px]">
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Toolbar>
    </>
  );
}

export default Home;
