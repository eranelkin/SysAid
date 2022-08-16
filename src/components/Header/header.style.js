import { makeStyles } from "@mui/styles";

export const defaultStyles = () => ({
  header: {
    backgroundColor: "#97978F !important",
    marginBottom: 40,
  },
  buttonMargin: {
    marginLeft: 20,
  },
  buttonRight: {
    marginLeft: "auto",
  },
});

export const useStyles = makeStyles(defaultStyles);
