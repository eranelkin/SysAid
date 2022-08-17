import { makeStyles } from "@mui/styles";

export const defaultStyles = () => ({
  header: {
    backgroundColor: "#99EDFA !important",
    marginBottom: 40,
  },
  buttonMargin: {
    marginLeft: "20px !important",
  },
  buttonRight: {
    marginLeft: "auto",
  },
  selected: {
    backgroundColor: "#002EFF !important",
  },
});

export const useStyles = makeStyles(defaultStyles);
