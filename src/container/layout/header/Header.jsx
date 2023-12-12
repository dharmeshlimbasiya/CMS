import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import LogoutDialog from "../dailog/LogOutDialog";

import { useTheme } from "@emotion/react";
import {
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popover,
  Tooltip,
} from "@mui/material";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MuiAppBar from "@mui/material/AppBar";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import ContactEmergencyRoundedIcon from "@mui/icons-material/ContactEmergencyRounded";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import DataObjectIcon from "@mui/icons-material/DataObject";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [open, setOpen] = useState(false);

  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const [mailMenu, setMailMenu] = useState(null);
  const handleMailMenuOpen = (event) => {
    setMailMenu(event.currentTarget);
  };

  const handleMailMenuClose = () => {
    setMailMenu(null);
  };

  const handleLogoutClick = () => {
    setLogoutDialogOpen(true);
    handleMenuClose();
  };

  const handleLogoutDialogClose = () => {
    setLogoutDialogOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  }));

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    handleMobileMenuClose();
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      sx={{ mt: "30px" }}
      // anchorEl={anchorEl}
      id={menuId}
      keepMounted
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 31,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
    >
      <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
      <MenuItem onClick={() => navigate("/myaccount")}>
        Account setting
      </MenuItem>
      <MenuItem onClick={handleLogoutClick}>LogOut</MenuItem>
    </Menu>
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    }),
  }));

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      id={mobileMenuId}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          component={Link}
          to="/timer"
        >
          <AccessTimeRoundedIcon />
        </IconButton>
        <p>Timmer</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const drawerWidth = 240;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />

      <AppBar
        position="static"
        color="inherit"
        sx={{
          background: "aliceblue",
          marginLeft: open ? "240px" : "0",
          paddingTop: "0",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                cursor: "pointer",
                fontFamily: "'Kaushan Script', cursive",
              },
            }}
            onClick={() => navigate("/dashboard")}
          >
            CMS
          </Typography>
          <Search sx={{ background: "rgb(255 255 255)", borderRadius: "8px" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={handleMailMenuOpen}
              // onMouseEnter={handleMailMenuOpen}
              // onMouseLeave={handleMailMenuClose}
            >
              <Badge badgeContent={1} color="error">
                <MailIcon />
              </Badge>
            </IconButton>

            <Popover
              id="mail-menu"
              open={Boolean(mailMenu)}
              // anchorEl={mailMenu}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 205, left: 1174 }}
              onClose={handleMailMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
            >
              <Paper>
                <List>
                  <ListItem button onClick={() => navigate("/inbox")}>
                    <ListItemText primary="Inbox" />
                  </ListItem>
                  <ListItem button onClick={() => navigate("/drafts")}>
                    <ListItemText primary="Drafts" />
                  </ListItem>
                  <ListItem button onClick={() => navigate("/sent")}>
                    <ListItemText primary="Sent" />
                  </ListItem>
                </List>
              </Paper>
            </Popover>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Tooltip title="Timmer setup" arrow>
                <Link to={"/timer"}>
                  <AccessTimeRoundedIcon />
                </Link>
              </Tooltip>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        // variant="persistent"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <DrawerHeader
          onClick={() => navigate("/dashboard")}
          sx={{ cursor: "pointer" }}
        >
          <Typography sx={{ fontFamily: "'Raleway', sans-serif" }}>
            Company Management System
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/dashboard")}>
              <ListItemIcon>
                <SpaceDashboardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/admin")}>
              <ListItemIcon>
                <PersonRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={"Admin"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/attendance")}>
              <ListItemIcon>
                <AssignmentIndRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={"Attendance Report"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/myaccount")}>
              <ListItemIcon>
                <ContactEmergencyRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={"Account settings"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/table")}>
              <ListItemIcon>
                <DataObjectIcon />
              </ListItemIcon>
              <ListItemText primary={"Total User"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/aboutuspage")}>
              <ListItemIcon>
                <InfoRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={"About"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/help")}>
              <ListItemIcon>
                <ContactSupportRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={"Help"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <LogoutDialog
        dailogOpen={logoutDialogOpen}
        onClose={handleLogoutDialogClose}
      />
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
