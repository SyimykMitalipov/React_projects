import { makeStyles } from "@mui/styles";
import Background from "../../../assets/background.png";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "90%",
    marginLeft: "10%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  topContent: {
    display: "flex",
  },
  background: {
    height: "710px",
    width: "743px",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    zIndex: 1,
  },
  mainText: {
    margin: "auto",
    width: "470px",
    zIndex: 2,
  },
  title: {
    color: theme.palette.secondary.main,
    margin: "0",
    fontSize: "55px",
    fontWeight: "bold",
    fontFamily: ["Roboto", "-apple-system", "sans-serif"],
  },
  subTitle: {
    color: theme.palette.secondary.main,
    margin: "0",
    fontFamily: ["Roboto", "-apple-system", "sans-serif"],
    fontSize: "40px",
    fontWeight: "bold",
    "& span": {
      color: theme.palette.primary.main,
    },
  },
  text: {
    fontSize: "25px",
    marginTop: "15px",
    fontFamily: ["Roboto", "-apple-system", "sans-serif"],
    color: "#252640",
  },
  callBtn: {
    height: "60px",
    width: "370px",
    "& p": {
      fontSize: "16px",
      fontFamily: ["Roboto", "-apple-system", "sans-serif"],
    },
  },
  isCool: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: " #F8F8F8",
    margin: "auto",
  },
  isCoolTitle: {
    color: theme.palette.secondary.main,
    fontFamily: ["Roboto", "-apple-system", "sans-serif"],
    fontSize: "40px",
    fontWeight: "bold",
    marginTop: "60px",
    marginBottom: "50px",
    "& span": {
      color: theme.palette.primary.main,
    },
  },
  cardBlock: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "-11%",
  },
  cards: {
    display: "flex",
    justifyContent: "space-around",
    width: "80%",
    backgroundColor: "#fff",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "350px",
    height: "388px",
    marginLeft: "2%",
    fontFamily: ["Roboto", "-apple-system", "sans-serif"],
    "& img": {
      width: "78px",
      height: "78px",
      marginTop: "59px",
    },
    "& h2": {
      color: "#252640",
      fontSize: "28px",
    },
    "& p": {
      color: "#1E0E62",
      opacity: "0.6",
      fontSize: "16px",
      height: "52px",
      width: "230px",
      fontWeight: "600",
      overflowWrap: "break-word",
      textAlign: "center",
    },
  },
  profits: {
    display: "flex",
    justifyContent: "space-around",
    marginLeft: "-5%",
    width: "100%",
    height: "115px",
    marginTop: "50px",
    marginBottom: "60px",
  },
  profit: {
    fontFamily: ["Roboto", "-apple-system", "sans-serif"],
    "& h3": {
      color: theme.palette.secondary.main,
      fontSize: "50px",
      fontWeight: "bold",
      margin: 0,
    },
    "& p": {
      fontSize: "24px",
      color: "#1E1B1B",
      opacity: "0.7",
      fontWeight: "600",
      marginTop: "10px",
    },
  },
  whyGt: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: " #F8F8F8",
    margin: "auto",
  },
  whyGtTitle: {
    color: theme.palette.primary.main,
    fontFamily: ["Roboto", "-apple-system", "sans-serif"],
    fontSize: "40px",
    fontWeight: "bold",
    marginTop: "60px",
    marginBottom: "50px",
    "& span": {
      color: theme.palette.secondary.main,
    },
  },
}));

