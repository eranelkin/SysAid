import { makeStyles } from "@mui/styles";

export const defaultStyles = () => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    width: 450,
    height: 570,
    border: "2px solid black",
    borderRadius: 10,
    margin: "auto",
    // marginTop: 40,
    backgroundColor: "#F5F9BB",
  },
  display: {
    backgroundColor: "rgba(0, 0, 0, .70)",
    color: "rgba(255, 255, 255, 0.75)",
    display: "flex",
    alignItems: "flex-start",
    padding: 30,
    fontSize: 36,
    width: 385,
    height: 110,
  },
});

export const useStyles = makeStyles(defaultStyles);
