import { makeStyles } from "@mui/styles";

export const defaultStyles = () => ({
  panel: {
    display: "grid",
    marginTop: 10,
    gridTemplateColumns: "repeat(4, 6rem)",
    justifyContent: "space-around",
    "& .MuiButton-root": {
      cursor: "pointer",
      fontSize: 40,
      alignItems: "center",
      border: "1px solid rgba(0, 0, 0, .70)",
      backgroundColor: "rgba(255, 255, 255, .75)",
      borderRadius: 10,
      margin: "10px 0",
      width: 90,
      height: 90,
      "&:hover": {
        backgroundColor: "#D3EA8D",
      },
    },
  },
});

export const useStyles = makeStyles(defaultStyles);
