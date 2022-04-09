import {makeStyles} from "@mui/styles";
import Backround from '../../../assets/background.png';
import BackgroundTrial from '../../../assets/background2.svg'
import BackgroundReviews from '../../../assets/reviews__back.png'
export const useStyles = makeStyles((theme) => ({

    conteiner: {
        width: "100%",
        marginLeft: "5%",
        margin: '0',
        padding: '0'
    },
    background: {
        width: '100%',
        height: '306px',
        background: `url(${Backround})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // margin: '10px',

        // border: '1px solid red'
    },
    main__txts: {
        height: '350px',
        padding: '20px',
        // border: '1px solid red'


    },
    name__geektech: {
        color: theme.palette.secondary.main,
        width: '200px',
        height: '40px',
        marginTop: '25px',

    },
    main__subtitle1: {
        width: '350px',
        height: '30px',
        color: theme.palette.secondary.main,
        marginTop: '25px',
        '& span': {
            color: theme.palette.primary.main,

        }
    },
    main__programmer: {
        width: '270px',
        height: '30px',
        color: theme.palette.primary.main,
        fontSize: '24px',
        marginTop: '25px',
        fontWeight: 'bold'
    },
    main__subtitle2: {
        width: '230px',
        height: '40px',
        color: '#252640',
        marginTop: '40px',
        fontSize: '18px'

    },
    main__btn__block: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px',
        color: '#252640'
    },
    main__button: {
        width: '100%',
    },
    main__txt2: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '1px solid red',
        flexDirection: 'column',
        background: '#F8F8F8',
        paddingTop: '30px',
        // margin: '10px',

    
    },
    main__txt2__title: {
        width: '100%',
        height: '40px',
        // border: '1px solid red',
        marginBottom: '20px',
        textAlign: 'center'
    },
    main__txt2__title1: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        '& span': {
            color: theme.palette.secondary.main
        }
    },
    main__txt2__block: {
        width: '350px',
        height: '250px',
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center'
    },
    main__txt2__img: {
        width: '100px',
        height: '100px',
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
            width: '100px',
            height: '100px',
            
        }
    },
    text2__title: {

    },
    main__txt2__sub1: {
        color: 'color: #1E0E62',
        opacity: '0.6'
    },
    main__statistic: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '25px',
        background: '#F8F8F8',
        // margin: '10px',
    },
    statistic1: {
        width: '200px',
        height: '190px',
        
    },
    grids__title: {
        color: theme.palette.secondary.main,
    },
    grids__subtitle: {
        color: '#1E1B1B',
        fontSize: '30px',
        fontWeight: 'bold',
        opacity: '0.7'
    },
    why__geek: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '10px',
        background: '#ECF8F9',
        paddingBottom: '30px'
        // border: '1px solid red'

    },
    why__geek__title: {
        color: theme.palette.secondary.main,
        '& span': {
            color: theme.palette.primary.main
        }
    },
    why__geek__block: {
        width: '100%',
        height: '250px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        // border: '1px solid red',
        '& img': {
            width: '75px',
            height: '70px',
            paddingBottom: '10px'
        }
    },
    why__geek__koworking: {
        color: '#1E0E62',
        paddingBottom: '10px'
        
        


    },
    why__geek__koworking__sub: {
        width: '220px',
        height: '35px',
        color: '#252640',
        fontSize: '20px',
        marginBottom: '20px',
        // border: '1px solid red'
    },
    why__geek__button: {
        width: '90%'
    },
    our__courses: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: '#F2F2F2',
        margin: '10px'
        
    },
    our__courses__title: {
        width: '200px',
        height: '20px',
        marginBottom: '20px',
        marginTop: '20px'
        
        // border: '1px solid red'


    },
    our__courses__h4: {
        color: theme.palette.secondary.main,
        width: '220px',
        height: '30px',
        // border: '1px solid red',
        textAlign: 'center',
        '& span': {
            color: theme.palette.primary.main
        }
    },
    our__courses__block: {
        width: '85%',
        height: '230px',
        // border: '1px solid red',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: '#FFFFFF',
        '& img': {
            width: '70px',
            height: '60px',
            paddingLeft: '20px'
        }
    },
    our__courses__names: {
        width: '280px',
        height: '30px',
        // boder: '1px solid red',
        textAlign: 'center',
        paddingTop: '15px'
    },
    trial__lessons: {
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        // border: '1px solid red',
        textAlign: 'center',
        background: '#FFFFFF',
        marginBottom: '20px'
    },
    trial__lessons__titles: {
        width: '300px',
        height: '170px',
        // border: '1px solid red',
        textAlign: 'center',
        marginBottom: '20px',
        margin: '0 auto'

    },
    trial__title: {
        color: theme.palette.secondary.main,
        fontSize: '30px',
        fontWeight: 'bold',
        // border: '1px solid red',
        '& span': {
            color: theme.palette.primary.main,
        }
    },
    trial__lessons__sub: {
        color: '#252640',
        opacity: '0.7'
    },
    trial__containers: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: '8px',
        // border: '1px solid red'

    },
    trial__block: {
        width: '48%',
        height: '360px',
        background: '#ECF8F9',
        marginBottom: '12px',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'column'
    },
    trial__block__subtitle: {
        width: '200px',
        height: '150px',
        // border: '1px solid red',
        margin: 'auto'
    },
    trial__block__name: {
        widt: '80px',
        height: '25px',
        fontSize: '25px',
        color: '#1E0E62',
        fontWeight: 'bold',
        fontFamily: ["Roboto", "-apple-system", "sans-serif"],

    },
    trial__block__title: {
        width: '180px',
        height: '50px',
        color: '#252640',
        opacity: '0.7',
        fontSize: '20px',  
        fontFamily: ["Roboto", "-apple-system", "sans-serif"],     
    },
    trial__block__img: {
        width: '80px',
        height: '80px',
        margin: '0 auto',
        marginTop: '25px',
        marginBottom: '15px',
        '& img': {
            width: '70px',
            height: '70px'
        }
    },
    trial__block__time: {
        color: '#252640',
        opacity: '0.7',
        fontSize: '25px',
        fontWeight: 'bold',
        fontFamily: ["Roboto", "-apple-system", "sans-serif"],
    },
    trial__block__button: {
        width: '85%',
        height: '40px'
    },
    trial__photos: {
        width: '100%',
        height: '200px',
        display: 'flex',
        justifyContent: 'space-around', 
    },
    trial__background: {
       width: '50%',
        maxHeight: '95%',
        background: `url(${BackgroundTrial})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '10px',
        // border: '1px solid red'
    },
    trial__background2: {
        maxWidth: '50%',
        maxHeight: '105%',
        backgroundColor: '#EA0723',
        '& img': {
            width: '30px',
            height: '30px',
            // border: '1px solid white',
            float: 'right',
            marginRight: '20px'
        },

        border: '1px solid red'
    },
    trial__photo__sub: {
        width: '200px',
        height: '180x',
        fontSize: '25px',
        color: 'white',
        fontWeight: 'bold',
        // border: '1px solid white',
        textAlign: 'left',
        padding: '3px',
        fontFamily: ["Roboto", "-apple-system", "sans-serif"],
       
    },
    about__us: {
        width: '100%',
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#FFFFFF'
    },
    about__us__title: {
        width: '150px',
            height: '70px',
            // border: '1px solid red',
            textAlign: 'center',
            margin: '0 auto'
    },
    about__us__h4: {
        color: theme.palette.secondary.main,
        fontWeight: 'bold',
        fontSize: '35px',
        fontFamily: ["Roboto", "-apple-system", "sans-serif"],
        '& span': {
            color: theme.palette.primary.main
        }
    },
    about__us__title2: {
        width: '300px',
        height: '70px',
        // border: '1px solid red',
        marginTop: '20px',
        textAlign: 'center'
    },
    about__us__sub: {
        maxWidht: '90%',
        // border: '1px solid red ',
        padding: '10px',
        marginBottom: '20px'
    },
    about__us__sub__txt: {
        fontSize: '25px',
        color: '#232536',
        opacity: '0.7'
    },
    about__statistic: {
        maxWidth: '100%',
        paddingLeft: '20px',
        border: '1px solid red'

    },
    about__statistic__item: {
        maxWidth: '35%',
        maxHeight: '100%',
        border: '1px solid red',
        // marginTop: '30px',
        dispay: 'flex',
        marginLeft: '20px'
    },
    about__statistic__nums: {
        fontSize: '70px',
        color: '#252640',
        fontWeight: 'bold',
        margin: '0 auto',
        fontFamily: ["Roboto", "-apple-system", "sans-serif"],

    },
    about__statistic__colors: {
        width: '120px',
        height: '10px',
        display: 'flex',
        justifyContent: 'space-around',
        border: '1px solid red'
    },
    about__statistic__red: {
        width: '50%',
        height: '100%',
        border: '1px solid red',
        backgroundColor: theme.palette.primary.main
    },
    about__statistic__blue: {
        width: '50%',
        height: '100%',
        border: '1px solid red',
        backgroundColor: theme.palette.secondary.main
    },
    about__statistic__txt: {
        color: '#1E0E62',
        opacity: '0.87',
        padding: '10px'
         
    },
    reviews: {
        width: '100%',
        height: '700px',
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingBottom: '20px'
        
    },
    reviews__title: {
        width: '180px',
        height: '100px',
        // border: '1px solid red',
        color: 'white',
        fontSize: '35px',
        textAlign: 'center',
        margin: '0 auto'
    },
    reviews__video: {
        width: '90%',
        height: '300px',
        marginBottom: '15px',
        // border: '1px solid red',
        margin: '0 auto',
        background: `url(${BackgroundReviews})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
}));