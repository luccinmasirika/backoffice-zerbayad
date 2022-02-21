import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { ListItemButton, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "assets/images/logo.png";
import CategoryIcon from "@mui/icons-material/Category";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import IconButton from '@mui/material/IconButton';

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const NavBar = ({handleDrawerClose}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navigation = [
    {
      name: "Dashboard",
      icon: <DashboardCustomizeIcon />,
      route: "/",
    },
    {
      name: "Products",
      icon: <CategoryIcon />,
      route: "/products",
    },

    {
      name: "New Product",
      icon: <AddBoxIcon />,
      route: "/new-product",
    },
    {
      name: "Orders",
      icon: <ShoppingBasketIcon />,
      route: "/orders",
    },
  ];

  return (
    <div>
      <Toolbar sx={{pr: '5px!important'}}>
        <Stack justifyContent="space-between" direction="row" alignItems="center" sx={{width: 1}}>
          <img src={Logo} alt="Logo" width={150} />
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Stack>
      </Toolbar>
      <Divider />
      <List>
        {navigation.map((el, index) => (
          <ListItemButton
            key={el.route}
            selected={pathname === el.route}
            onClick={() => navigate(el.route)}
          >
            <ListItemIcon>{el.icon}</ListItemIcon>
            <ListItemText primary={el.name} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default NavBar;
