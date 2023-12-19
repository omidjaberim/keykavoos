import { Box, Grid } from "@mui/material";
import MainSwiper from "components/MainSwiper";
import MultipleSwiper from "components/MultipleSwiper";
import emptyOffice from "../img/Group195.svg";
import grids from "../img/Group 196.svg";
import grid1 from "../img/Group27.svg";
import Footer from "../img/Group234.svg";
import BottomSwiper from "components/BottomSwiper";

const Landing = () => {
  return (
    <Grid className="flex flex-col w-full ">
      <MainSwiper />
      <div className="my-[55px]">
        <MultipleSwiper />
      </div>
      <Grid className="flex justify-between  my-[25px]">
        <img src={emptyOffice} />
      </Grid>
      <Grid className="flex justify-between my-[35px]">
        <img src={grids} />
      </Grid>
      <Grid className="flex justify-between my-[35px]">
        <img src={grid1} />
      </Grid>
      <BottomSwiper />
      <img src={Footer} />
    </Grid>
  );
};
export default Landing;
