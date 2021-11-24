import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  color: {
    primary: "#D32F2F",
    secondary: "#00BCD4",
    error: "#E64A19",
    textColor: "#FFFFFF",
    defaultTextColor: `#000000`,
    hover: `rgba(0, 0, 0, 0.08)`,
  },
  typoraphy: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: 4,
    background: "#512DA8",
    color: "#FFFFFF",
    borderColor: "#CCCCCC",
  },
});

export default theme;
