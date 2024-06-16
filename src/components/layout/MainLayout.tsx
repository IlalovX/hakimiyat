import { Box } from "@mui/material";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <Box className="flex flex-col min-h-screen">
      <Header />
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default MainLayout;
