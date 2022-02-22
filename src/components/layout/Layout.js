import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { drawerWidth } from "../../utils";
import Header from "../header";
import NavBar from "../navBar";

export default function Layout(props) {
  const { children } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header onToggle={handleDrawerToggle} isOpen={isOpen} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={isOpen}
          anchor="left"
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <NavBar handleDrawerClose={handleDrawerToggle} />
        </Drawer>
        <Drawer
          variant="persistent"
          open={!isOpen}
          sx={{
            display: { xs: "none", sm: "block" },
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <NavBar handleDrawerClose={handleDrawerToggle} />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
          px: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          overflow: "hidden",
          transition: (theme) =>
            theme.transitions.create("margin", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          marginLeft: { sm: `-${drawerWidth}px` },
          ...(!isOpen && {
            transition: (theme) =>
              theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
            marginLeft: { sm: 0 },
          }),
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
