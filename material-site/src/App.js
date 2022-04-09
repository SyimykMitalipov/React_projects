import './App.css';
// import Button from '@mui/material/Button';
import { AppBar, Container, IconButton, Toolbar, Typography, Box , Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { makeStyles } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow:1
    }
}))


function App() {
  const classes = useStyles();  
  return (
    <AppBar position="fixed">
        <Container fixed>
            <Toolbar>
                <IconButton edge="start"
                            color="inherit" aria-laabel="menu" className={classes.menuButton}>
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>Syimyk MItalipov React projet</Typography>
                <Box mr={3}>
                    <Button color="inherit" variant="outlined">Log In </Button>
                </Box>
                <Button color="secondary" variant="contained">Sign Up </Button>

            </Toolbar>
        </Container>
        </AppBar>
  );
}

export default App;
