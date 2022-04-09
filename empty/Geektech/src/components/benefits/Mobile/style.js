import {makeStyles} from "@mui/styles"; 



export const useStyles = makeStyles((theme) => ({
    conteiner: {
        width: '100%',
        
    },
    why__geek: {
        width: '102%',
        height: '50px',
        border: '1px solid red',
        textAlign: 'center',
        color: theme.palette.primary.main,
        '& span': {
            color: theme.palette.secondary.main,
        }
    },
    effect__method: {
        width: '102%',
        height: '750px',
        background: '#E5E5E5',
        paddingTop: '10px',
    },
    effect__method__title: {
        textAlign: 'center',
        color: '#252640',
        fontSize: '25px',
        paddingBottom: '10px'
    },
    effect__method__container: {
        widht: '102%',
        height: '100%'
    },
    effect__method__grid: {
        width: '102%',
        height: '200px',
        display: 'flex',
        justifyContent: 'space-around',
        transition: 'all 2s',
        flexWrap: 'wrap',

    },
   effect__method__item: {
       border: '1px solid red',
        width: '48%',
        height: '200px',
        textAlign: 'center',
        marginBottom: '10px',
        '& img': {
            width: '60px',
            height: '60px',
            border: '1px solid red'
        },
       
   },
   background__white: {
    border: '1px solid red',
    width: '48%',
    height: '200px',
    textAlign: 'center',
    marginBottom: '10px',
    '& img': {
        width: '60px',
        height: '60px',
        border: '1px solid red'
    },
},
   background__red: {
    border: '1px solid red',
    width: '48%',
    height: '200px',
    textAlign: 'center',
    marginBottom: '10px',
    background: theme.palette.primary.main,
    color: '#ffffff',
    '& img': {
        width: '60px',
        height: '60px',
        border: '1px solid red'
    },
   
   }
   
}))
