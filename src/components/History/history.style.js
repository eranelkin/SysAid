import { makeStyles } from "@mui/styles";

export const defaultStyles = () => ({
  history: {
    display: "flex",
    // justifyContent: "center",
    flexDirection: "column",
    margin: "auto",
    width: 600,
    height: 850,
    // justifyContent: "flex-start",
  },
  historyBoard: {
    height: "100%",
    borderRadius: 10,
    border: "2px solid black",
    marginBottom: 20,
    backgroundColor: "rgba(0, 0, 0, .70)",
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: 30,
    padding: 10,
  },
  historyRow: {
    display: "flex",
    margin: 10,
  },
  clearHistory: {
    width: 200,
  },
  action: {
    border: "1px solid white",
    borderRadius: 5,
    minWidth: 50,
    padding: 5,
    height: 40,
    textAlign: "center",
  },
  counter: {
    width: 30,
    marginRight: 20,
  },
  error: {
    color: "red",
    border: "none",
  },
  total: {
    color: "green",
    borderColor: "green",
  },
});

export const useStyles = makeStyles(defaultStyles);
