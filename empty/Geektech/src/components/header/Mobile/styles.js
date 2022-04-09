import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  navigationBlock: {
    padding: "5px",
    margin: "0 auto",
    width: "100%",
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0px 2px 2px 2px rgba(0, 0, 0, 0.03)",
    zIndex: "15",
  },
}));
