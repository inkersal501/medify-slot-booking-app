import React from "react";

import {
  AppBar,  
  Button,  Box,  
  Container,  
  Drawer,
  IconButton,
  List,  ListItem,  ListItemButton,  ListItemText,
  Toolbar,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

const pages = [
  "Find Doctors",
  "Hospitals",
  "Medicines",
  "Surgeries",
  "Software for Provider",
  "Facilities",
];

function Navbar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (newOpen) => {
    setOpenDrawer(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List>
        {pages.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ background: "none", boxShadow: "none" }}>
        <Container maxWidth="xl" className="navBarContainer">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", lg: "none" },
                textAlign: "center",
              }}
            >
              <IconButton
                size="xlarge"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => toggleDrawer(true)}
                color="primary"
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <img src={logo} alt="Logo" className="medify-logo" />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", lg: "flex" },
                justifyContent: "end",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    mx: 2,
                    color: "#333",
                    display: "block",
                    textTransform: "initial",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ textAlign: { xs: "end", lg: "center" } }}>
              <Button variant="contained">
                My Bookings
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer open={openDrawer} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}

export default Navbar;
