// in src/theme.tsx

import { defaultTheme } from "react-admin";
import { PaletteMode } from "@mui/material";


export const lightTheme = {
    ...defaultTheme,
    palette: {
      mode: "light" as PaletteMode,
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#f50057",
      },
    },
  };
  
  
export const darkTheme = {
    ...defaultTheme,
    palette: {
      mode: "dark" as PaletteMode,
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#f50057",
      },
    },
  };