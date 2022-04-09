import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: "0 auto",
    width: "100%",
    position: "absolute",
  },
  navigationBlock: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "space-around",
    width: "90%",
    marginLeft: "5%",
  },
  navigation: {
    width: "70%",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.12)",
    borderRadius: "35px",
    backgroundColor: "#fff",
    zIndex: "15",
  },
  callBtn: {
    borderRadius: "30px !important",
  },
}));
