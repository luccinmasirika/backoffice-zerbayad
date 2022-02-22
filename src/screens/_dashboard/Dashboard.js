import React from "react";
import { AppBar } from "../../components";
import { styled } from "@mui/system";
import {
  Checkbox,
  Container,
  Fab,
  Grow,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
//import DashboardSwitch from "./DashboardSwitch";
//import { useNavigate  } from "react-router-dom";
import {DashboardCo} from '../../components'
//import MediaList from '../../components/mediaList/'
//import Map from '../../components/map/'

const Root = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  flexGrow: 1,
  background: "#000",
}));

// const Menu = styled(ShowMenu)(({ theme }) => ({
//   background: theme.palette.primary.main,
//   marginBottom: theme.spacing(10),
//   padding: theme.spacing(2),
//   borderRadius: theme.spacing(2),
//   color: "#fff",
//   position: " absolute",
//   bottom: 0,
//   left: "-10px",
// }));

const CustomCheckBox = styled("div")(({ theme }) => ({
  width: 25,
  height: 25,
  background: "#fff",
  borderRadius: 3,
}));

const CustomCheckBoxIcon = styled(CustomCheckBox)(({ theme }) => ({
  background: theme.palette.red.main,
  borderRadius: 3,
}));

const StyledGrow = styled(Grow)(({ theme }) => ({
  position: "fixed",
  bottom: 0,
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    background: theme.palette.primary.dark,
  },
  "& .MuiMenuItem-root": {
    color: "white",
  }
}));

const StyledFab = styled(Fab)(({ theme }) => ({
  position: "fixed",
  left: theme.spacing(4),
  bottom: theme.spacing(4),
}));

const Dashboard = () => {
  // const [checked, setChecked] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showMenu, setShowMenu] = React.useState(false);


  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
/*
  const handleToggleCheckbox = (value) => () => {
    // setChecked(value);
    handleClose();
    switch (value) {
      case 1:
        history.push("/users");
        break;
      case 4:
          history.push("/map");
          break;
      default:
        history.push("/");
    }
  };
*/
  // const handelToogleMenu = () => {
  //   setShowMenu(!showMenu);
  // };

  //const history = useNavigate();

  return (
    <>
    
    <Root>
     
      <DashboardCo />
      

    </Root>
    </>

  );
};

export default Dashboard;
