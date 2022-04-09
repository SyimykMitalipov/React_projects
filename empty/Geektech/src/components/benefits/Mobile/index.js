import React from "react";
import { Typography, Grid} from "@mui/material";
import { useStyles } from "./style";
import { useState } from "react";
import { theme } from "../../../theme";



export const BenefitsMobile = () => {
    const classes = useStyles()
   const [ background , setBackground] = useState(classes.background__white)
//    const [ font, setFont ] = useState({color: 'black'})
   const handleMouseClick = (event) => {
       if(background === classes.background__white) {
        setBackground(classes.background__red)
       }
        
   }
   console.log(background)
    return <>
     <div className={classes.conteiner}>
        <div className={classes.why__geek}>
            <Typography variant="h5" style={{fontWeight: 'bold',paddingTop: '10px'}}>
            <span>ПОЧЕМУ</span> GEEKTECH?
            </Typography>
        </div>
        <div className={classes.effect__method}>
            <div className={classes.effect__method__title}>
                <p variant="h5" style={{fontWeight: 'bold'}}> 
                Эффективный метод обучения
                </p>
            </div>
            <div className={classes.effect__method__container}>
                <div className={classes.effect__method__grid}>
                    <div className={background}
                    >
                    <div onClick={() => handleMouseClick()}>
                        
                    <img src="https://cdn-icons-png.flaticon.com/512/o185/185578.png"  alt="" />
                    <div>
                            
                            <Typography variant="h5"> 
                            Новый преподаватель каждый месяц
                            </Typography>
                            </div>
                    </div>
                       
                    </div>
                    <Grid item className={background}>
                    <img src="https://cdn-icons.flaticon.com/png/512/3127/premium/3127995.png?token=exp=1646025819~hmac=04fc30fbd11cf3febde08ca85a47539b"  alt="" />
                    
                        <Typography variant="h5"> 
                        Отдел обучения
                        </Typography>
                    
                    </Grid>
                    <Grid item className={classes.effect__method__item} style={{marginBottom: '10px'}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/318/318255.png"  alt="" />
                        <div>
                        <Typography variant="h5"> 
                        Бесплатный повтор
                        </Typography>
                        </div>
                    </Grid>
                    <Grid item className={classes.effect__method__item}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2643/2643502.png"  alt="" />
                        <div>
                        <Typography variant="h5"> 
                        Помощь менторов
                        </Typography>
                        </div>
                    </Grid>
                    <div className={classes.effect__method__item}>
                    <img src="https://cdn-icons.flaticon.com/png/512/1913/premium/1913812.png?token=exp=1646026662~hmac=65b8bb0c9005675e660d893169380ba2"  alt="" />
                        <div>
                        <Typography variant="h5"> 
                        Запись урока
                        </Typography>
                        </div>
                    </div>
                    <div className={classes.effect__method__item}>
                    <img src="https://cdn-icons.flaticon.com/png/512/2486/premium/2486444.png?token=exp=1646026740~hmac=733d3ce3ff3cf88bf7a01dadf10d442a"  alt="" />
                        <div>
                        <Typography variant="h5"> 
                        Заморозка курса
                        </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes}>
        
        </div>
    </div>
    </>
       
    
}