import React, { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material";
import LightModeOutlineIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutline from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlineIcon from "@mui/icons-material NotificationsOutlined";
import SettingsOutlineIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMose = useContext(ColorModeContext);
  return <Box display="flex" justifyContent="space-between" p={2}>

    <IconButton></IconButton>
  </Box>;
};

export default TopBar;
