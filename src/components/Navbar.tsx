import { Box, Button } from "@mui/material";
import logo from "../img/logo.svg";
import Menu from "./Menu";
import SubMenu from "./SubMenu";
const Navbar = () => {
  return (
    <Box className="flex justify-between w-full items-center ">
      <Box className="flex justify-start ">
        <img
          src={logo}
          className="mx-[6px] md:w-[218px] md:h-[80px] w-[168px] h-[60px] "
        />
        <Menu />
      </Box>
      <Button className="bg-[#4866CF] text-[16px] text-white w-[145px] h-[42px] rounded-[43px] invisible lg:visible">
        ثبت نام/ ورود
      </Button>
      <SubMenu />
    </Box>
  );
};
export default Navbar;
