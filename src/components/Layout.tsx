import { Box, Grid } from "@mui/material";
import Navbar from "./Navbar";

interface IProp {
  children: React.ReactNode;
}
const Layout = (props: IProp) => {
  const { children } = props;
  return (
    <Grid className="flex w-full flex-col items-center justify-center">
      <Grid className="w-[90%] my-[15px]">
        <Navbar />
        <Box>{children}</Box>
      </Grid>
    </Grid>
  );
};
export default Layout;
