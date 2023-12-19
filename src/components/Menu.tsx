import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomMenu() {
  const [anchorEl0, setAnchorEl0] = React.useState<null | HTMLElement>(null);
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
  const open0 = Boolean(anchorEl0);
  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);

  const handleClick0 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl0(event.currentTarget);
  };
  const handleClose0 = () => {
    setAnchorEl0(null);
  };
  const handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClick3 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  return (
    <div className=" justify-center items-center hidden lg:flex ">
      <Button
        aria-controls={open0 ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open0 ? "true" : undefined}
        variant="text"
        disableElevation
        onClick={handleClick0}
        endIcon={<KeyboardArrowDownIcon />}
        className="text-black text-[20px] font-medium"
      >
        فرصت های شغلی
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl0}
        open={open0}
        onClose={handleClose0}
      >
        <MenuItem onClick={handleClose0} disableRipple>
          بک اِند
        </MenuItem>
        <MenuItem onClick={handleClose0} disableRipple>
          فرانت اِند
        </MenuItem>
        <MenuItem onClick={handleClose0} disableRipple>
          حسابداری
        </MenuItem>
        <MenuItem onClick={handleClose0} disableRipple>
          دیجیتال مارکتینگ
        </MenuItem>
      </StyledMenu>
      <Button
        aria-controls={open1 ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open1 ? "true" : undefined}
        variant="text"
        disableElevation
        onClick={handleClick1}
        endIcon={<KeyboardArrowDownIcon />}
        className="text-black text-[20px] font-medium"
      >
        خدمات ما
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl1}
        open={open1}
        onClose={handleClose1}
      >
        <MenuItem onClick={handleClose1} disableRipple>
          آموزش
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple>
          مشاوره
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple>
          خدمات وب
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple>
          خدمات مالی
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple>
          منابع انسانی
        </MenuItem>
      </StyledMenu>
      <Button
        aria-controls={open2 ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? "true" : undefined}
        variant="text"
        disableElevation
        onClick={handleClick2}
        endIcon={<KeyboardArrowDownIcon />}
        className="text-black text-[20px] font-medium"
      >
        درباره ما
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
      >
        <MenuItem onClick={handleClose2} disableRipple>
          آموزش
        </MenuItem>
        <MenuItem onClick={handleClose2} disableRipple>
          مشاوره
        </MenuItem>
        <MenuItem onClick={handleClose2} disableRipple>
          خدمات وب
        </MenuItem>
        <MenuItem onClick={handleClose2} disableRipple>
          خدمات مالی
        </MenuItem>
        <MenuItem onClick={handleClose2} disableRipple>
          منابع انسانی
        </MenuItem>
      </StyledMenu>
      <Button
        aria-controls={open3 ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open3 ? "true" : undefined}
        variant="text"
        disableElevation
        onClick={handleClick3}
        endIcon={<KeyboardArrowDownIcon />}
        className="text-black text-[20px] font-medium"
      >
        وبلاگ
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl3}
        open={open3}
        onClose={handleClose3}
      >
        <MenuItem onClick={handleClose3} disableRipple>
          بک اِند
        </MenuItem>
        <MenuItem onClick={handleClose3} disableRipple>
          فرانت اِند
        </MenuItem>
        <MenuItem onClick={handleClose3} disableRipple>
          حسابداری
        </MenuItem>
        <MenuItem onClick={handleClose3} disableRipple>
          دیجیتال مارکتینگ
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
