import { makeStyles } from "@mui/styles";

export const defaultStyles = () => ({
  history: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: 850,
  },
  historyBoard: {
    height: "100%",
    width: 600,
    borderRadius: 10,
    border: "2px solid black",
    marginBottom: 20,
    backgroundColor: "rgba(0, 0, 0, .70)",
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: 30,
    padding: 10,
    overflow: "scroll",
  },
  historyRow: {
    display: "flex",
    margin: 10,
    alignItems: "center",
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
    marginRight: 40,
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
