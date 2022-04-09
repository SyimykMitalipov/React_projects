import React from "react";
import {Typography, Button, Grid} from "@mui/material";
// import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import {useStyles} from "./styles"

const MobileMain = () => {
    const classes = useStyles()
    return <>
        <div className={classes.container}>
            
            <div className={classes.background}>
            </div>
            <div className={classes.main__txts}>
                <Typography variant="h3" className={classes.name__geektech} style={{fontWeight: 'bold'}}>
                    GeekTech
                </Typography>
                <div className={classes.main__subtitle1}>
                    <Typography variant="h4" style={{fontWeight: 'bold'}}>
                        место, <span>где</span> ты станешь
                    </Typography>
                </div>
                <div className={classes.main__programmer}>
                    <Typography variant="h4" style={{fontWeight: 'bold'}}>
                        ПРОГРАММИСТОМ
                    </Typography>
                </div>
                <div className={classes.main__subtitle2}>
                    <Typography variant="subtitle 1">
                        Обучим IT - професси с нуля и предоставим стажировку
                    </Typography>
                </div>
                <div className={classes.main__btn__block}>
                    <Button variant="contained" className={classes.main__button}>
                        Записаться на пробный урок
                    </Button>
                </div>
            </div>
            <div className={classes.main__txt2}>
                <div className={classes.main__txt2__title}>
                    <Typography variant="h4" className={classes.main__txt2__title1} style={{fontWeight: 'bold'}}>
                        <span>ПОЧЕМУ</span> IT ЭТО КРУТО?
                    </Typography>
                </div>
                <div className={classes.main__txt2__block}>
                    <div className={classes.main__txt2__img}>
                        <img
                            src="https://images.pexels.com/photos/7567228/pexels-photo-7567228.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt="dd"/>
                    </div>
                    <div className={classes.main__txt2__block__sub}>
                        <Typography className={classes.text2__title} style={{
                            fontSize: '20px', textAlign: 'center', fontWeight: 'bold', color: '#252640'
                        }}>
                            Карьера в IT - компании
                        </Typography>
                        <Typography variant="subtitle 1" className={classes.main__txt2__sub1}>
                            Станьте частью новой культуры. Работайте над интересными проектами в команде с лучшими и
                            получайте достойную оплату.
                        </Typography>
                    </div>
                </div> 
            </div>
            <div className={classes.main__txt2}>
                <div className={classes.main__txt2__block}>
                    <div className={classes.main__txt2__img}>
                        <img
                            src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="dd"/>
                    </div>
                    <div className={classes.main__txt2__block__sub}>
                        <Typography className={classes.text2__title} style={{
                            fontSize: '20px', textAlign: 'center', fontWeight: 'bold', color: '#252640'
                        }}>
                            Работайте во фрилансе
                        </Typography>
                        <Typography variant="subtitle 1" className={classes.main__txt2__sub1}>
                            Работайте удалённо, принимая заказы из других стран. Высокий доход, свободный график и
                            никакого начальника.
                        </Typography>
                    </div>
                </div>
            </div>
            <div className={classes.main__txt2}>
                <div className={classes.main__txt2__block}>
                    <div className={classes.main__txt2__img}>
                        <img
                            src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="dd"/>
                    </div>
                    <div className={classes.main__txt2__block__sub}>
                        <Typography className={classes.text2__title} style={{
                            fontSize: '20px', textAlign: 'center', fontWeight: 'bold', color: '#252640'
                        }}>
                            Создайте IT-стартап
                        </Typography>
                        <Typography variant="subtitle 1" className={classes.main__txt2__sub1}>
                            Научитесь воплощать свои идеи в жизнь. Постройте новый Google или Facebook. Реализуйте свои
                            мечты.
                        </Typography>
                    </div>
                </div>
            </div>
            <div className={classes.main__statistic}>
                <Grid container spacing={3} className={classes.main__grid} align="center">
                    <Grid item xs={6} md={6} sm={6}>
                        <div className={classes.statistic1}>
                            <Typography variant="h4" className={classes.grids__title}
                                        style={{fontWeight: 'bold', fontSize: '56px'}}>20+</Typography>
                            <Typography variant="subtitle 1" className={classes.grids__subtitle}>
                                Вакансий ежедневно
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={6} sm={6}>
                        <div className={classes.statistic1}>
                            <Typography className={classes.grids__title}
                                        style={{fontWeight: 'bold', fontSize: '56px'}}>10+</Typography>
                            <Typography variant="subtitle 1" className={classes.grids__subtitle}>
                                Компаний
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={6} md={6}>
                        <div className={classes.statistic1}>
                            <Typography variant="h4" className={classes.grids__title}
                                        style={{fontWeight: 'bold', fontSize: '56px'}}>12K+</Typography>
                            <Typography variant="subtitle 1" className={classes.grids__subtitle}>
                                Средняя з\п
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                        <div className={classes.statistic1}>
                            <Typography variant="h4" className={classes.grids__title}
                                        style={{fontWeight: 'bold', fontSize: '56px'}}>100%</Typography>
                            <Typography variant="subtitle 1" className={classes.grids__subtitle}>
                                Профита
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.why__geek}>
                <Typography variant="h4" className={classes.why__geek__title} style={{fontWeight: 'bold'}}>
                    <span>ПОЧЕМУ</span> GEEKTECH?
                </Typography>
                <div className={classes.why__geek__block}>
                    <img src="https://cdn-icons-png.flaticon.com/512/6934/6934206.png" alt="working"/>
                    <div className={classes.why__geek__txt}>
                        <Typography variant="h3" className={classes.why__geek__koworking} style={{fontSize: '28px'}}>
                            Бесплатный коворкинг 24/7
                        </Typography>
                        <Typography variant="subtitle 1" className={classes.why__geek__koworking__sub}>
                            Коворкинг в центре города со всеми удобствами
                        </Typography>
                    </div>
                </div>
                <div className={classes.why__geek__block}>
                    <img
                        src="https://cdn-icons.flaticon.com/png/512/1972/premium/1972425.png?token=exp=1645683207~hmac=cb2f1cbea197ccb07c0c4b4dbf3f064d"
                        alt="working"/>
                    <div className={classes.why__geek__txt}>
                        <Typography variant="h3" className={classes.why__geek__koworking} style={{fontSize: '28px'}}>
                            НОУТБУК В РАССРОЧКУ БЕЗ %
                        </Typography>
                        <Typography variant="subtitle 1" className={classes.why__geek__koworking__sub}>
                            Предоставляется рассрочка без процентов и с гибким графиком
                        </Typography>
                    </div>
                </div>
                <div className={classes.why__geek__block}>
                    <img src="https://cdn-icons-png.flaticon.com/512/4214/4214146.png" alt="working"/>
                    <div className={classes.why__geek__txt}>
                        <Typography variant="h3" className={classes.why__geek__koworking} style={{fontSize: '28px'}}>
                            ПРЕПОДАВАТЕЛИ - ПРАКТИКИ
                        </Typography>
                        <Typography variant="subtitle 1" className={classes.why__geek__koworking__sub}>
                            Преподавательский состав состоит из программистов-профессионалов, имеющих опыт коммерческой
                            разработки.
                        </Typography>
                    </div>
                </div>
                <div className={classes.why__geek__block}>
                    <img
                        src="https://cdn-icons.flaticon.com/png/512/3000/premium/3000741.png?token=exp=1645683637~hmac=5c81d931e60b2d844e0de820ab76b4ed"
                        alt="working"/>
                    <div className={classes.why__geek__txt}>
                        <Typography variant="h3" className={classes.why__geek__koworking} style={{fontSize: '28px'}}>
                            НАСТОЯЩИЙ СЕРТИФИКАТ
                        </Typography>
                        <Typography variant="subtitle 1" className={classes.why__geek__koworking__sub}>
                            Наш сертификат соответствует всем стандартам и имеет госзнак
                        </Typography>
                    </div>
                </div>
                <div className={classes.why__geek__block}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1116/1116927.png" alt="working"/>
                    <div className={classes.why__geek__txt}>
                        <Typography variant="h3" className={classes.why__geek__koworking} style={{fontSize: '28px'}}>
                            БЕСПЛАТНЫЙ ПОВТОР
                        </Typography>
                        <Typography variant="subtitle 1" className={classes.why__geek__koworking__sub}>
                            Если вы не смогли освоить программу обучения, то вы можете заново пройти ее БЕСПЛАТНО!
                        </Typography>
                    </div>
                </div>
                <div className={classes.why__geek__block}>
                    <img
                        src="https://cdn-icons.flaticon.com/png/512/4215/premium/4215442.png?token=exp=1645683694~hmac=4d2def6193992d8690ce8647b511176a"
                        alt="working"/>
                    <div className={classes.why__geek__txt}>
                        <Typography variant="h3" className={classes.why__geek__koworking} style={{fontSize: '28px'}}>
                            ЗАМОРОЗКА КУРСА
                        </Typography>
                        <Typography variant="subtitle 1" className={classes.why__geek__koworking__sub}>
                            Если вы по каким-либо причинам не можете продолжить обучение, то можно взять паузу от 1 до
                            3-х месяцев!
                        </Typography>
                    </div>
                </div>
                <Button variant="outlined" className={classes.why__geek__button}>
                    Все приемущества
                </Button>
            </div>
            <div className={classes.our__courses}>
                <div className={classes.our__courses__title}>
                    <Typography variant="h4" className={classes.our__courses__h4} style={{fontWeight: 'bold'}}>
                        <span>НАШИ</span> КУРСЫ
                    </Typography>
                </div>
                <div className={classes.our__courses__block}>
                    <div className={classes.our__block__img}>
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="alt txt"/>
                    </div>
                    <div className={classes.our__courses__names}>
                        <Typography variant="h5" style={{fontSize: '20px', fontWeight: 'bold'}}>
                            UX/UI - дизайнер
                        </Typography>
                    </div>
                </div>
                <div className={classes.our__courses__block}>
                    <div className={classes.our__block__img}>
                        <img src="https://cdn-icons-png.flaticon.com/512/226/226770.png" alt="alt txt"/>
                    </div>
                    <div className={classes.our__courses__names}>
                        <Typography variant="h5" style={{fontSize: '20px', fontWeight: 'bold'}}>
                            Android - разработчик
                        </Typography>
                    </div>
                </div>
                <div className={classes.our__courses__block}>
                    <div className={classes.our__block__img}>
                        <img
                            src="https://cdn-icons.flaticon.com/png/512/2175/premium/2175370.png?token=exp=1645693304~hmac=370f21c1475b1f0455b2b69a4dc9317f"
                            alt="alt txt"/>
                    </div>
                    <div className={classes.our__courses__names}>
                        <Typography variant="h5" style={{fontSize: '20px', fontWeight: 'bold'}}>
                            iOS - разработчик
                        </Typography>
                    </div>
                </div>
                <div className={classes.our__courses__block}>
                    <div className={classes.our__block__img}>
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="alt txt"/>
                    </div>
                    <div className={classes.our__courses__names}>
                        <Typography variant="h5" style={{fontSize: '20px', fontWeight: 'bold'}}>
                            Frontend - разработчик
                        </Typography>
                    </div>
                </div>
                <div className={classes.our__courses__block}>
                    <div className={classes.our__block__img}>
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="alt txt"/>
                    </div>
                    <div className={classes.our__courses__names}>
                        <Typography variant="h5" style={{fontSize: '20px', fontWeight: 'bold'}}>
                            Backend - разработчик
                        </Typography>
                    </div>
                </div>
                <div className={classes.our__courses__block}>
                    <div className={classes.our__block__img}>
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="alt txt"/>
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="front-end"/>
                    </div>
                    <div className={classes.our__courses__names}>
                        <Typography variant="h5" style={{fontSize: '20px', fontWeight: 'bold'}}>
                            Fullstack - разработчик
                        </Typography>
                    </div>
                </div>
                <div className={classes.our__courses__block}>
                    <div className={classes.our__block__img}>
                        <img src="https://cdn-icons-png.flaticon.com/512/6943/6943445.png" alt="alt txt"/>
                    </div>
                    <div className={classes.our__courses__names}>
                        <Typography variant="h5" style={{fontSize: '20px', fontWeight: 'bold'}}>
                            GeekCamp <br/>
                            Основы программирования
                        </Typography>
                    </div>
                </div>
                <div className={classes.our__courses__block}>
                    <div className={classes.our__block__img}>
                        <img src="https://cdn-icons-png.flaticon.com/512/6943/6943445.png" alt="alt txt"/>
                    </div>
                    <div className={classes.our__courses__names}>
                        <Typography variant="h5" style={{fontSize: '20px', fontWeight: 'bold'}}>
                            Основы работы на компьютере
                        </Typography>
                    </div>
                </div>
                <div className={classes.our__courses__block}>
                    <div className={classes.our__block__img}>
                        <img src="https://cdn-icons-png.flaticon.com/512/6534/6534996.png" alt="alt txt"/>
                    </div>
                    <div className={classes.our__courses__names}>
                        <Typography variant="h5" style={{fontSize: '20px', fontWeight: 'bold'}}>
                            Английский язык
                        </Typography>
                    </div>
                </div>
            </div>
            <div className={classes.trial__lessons}>
                <div className={classes.trial__lessons__titles}>
                    <p className={classes.trial__title}>
                        <span>ПРОБНЫЕ</span> УРОКИ
                    </p>
                    <Typography variant="subtitle 1" className={classes.trial__lessons__sub}>
                        Бесплатные пробные уроки проводятся каждую неделю по 4 направлениям, примите участие и примите
                        решение по направлениям
                    </Typography>
                </div>
                <div className={classes.trial__containers}>
                    <div className={classes.trial__block}>
                        <div className={classes.trial__block__subtitle}>
                            <p className={classes.trial__block__name}>ANDROID</p>
                            <p className={classes.trial__block__title}>Вторник, Четверг, Суббота</p>
                            <p className={classes.trial__block__time}>15:00</p>
                        </div>
                        <div className={classes.trial__block__img}>
                            <img src="https://cdn-icons-png.flaticon.com/512/226/226770.png" alt="ddd"/>
                        </div>
                        <Button variant="contained" className={classes.trial__block__button}>
                            Записаться
                        </Button>
                    </div>
                    <div className={classes.trial__block}>
                        <div className={classes.trial__block__subtitle}>
                            <p className={classes.trial__block__name}>UX/UI</p>
                            <p className={classes.trial__block__title}>Пятница</p>
                            <p className={classes.trial__block__time}>15:00</p>
                        </div>
                        <div className={classes.trial__block__img}>
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="ddd"/>
                        </div>
                        <Button variant="contained" className={classes.trial__block__button}>
                            Записаться
                        </Button>

                    </div>
                    <div className={classes.trial__block}>
                        <div className={classes.trial__block__subtitle}>
                            <p className={classes.trial__block__name}>FRONTEND</p>
                            <p className={classes.trial__block__title}>Суббота</p>
                            <p className={classes.trial__block__time}>15:00</p>
                        </div>
                        <div className={classes.trial__block__img}>
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="ddd"/>
                        </div>
                        <Button variant="contained" className={classes.trial__block__button}>
                            Записаться
                        </Button>

                    </div>
                    <div className={classes.trial__block}>
                        <div className={classes.trial__block__subtitle}>
                            <p className={classes.trial__block__name}>BACKEND</p>
                            <p className={classes.trial__block__title}>Пятница</p>
                            <p className={classes.trial__block__time}>15:00</p>
                        </div>
                        <div className={classes.trial__block__img}>
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="ddd"/>
                        </div>
                        <Button variant="contained" className={classes.trial__block__button}>
                            Записаться
                        </Button>
                    </div>
                    <div className={classes.trial__photos}>
                        <div className={classes.trial__background}></div>
                        <div className={classes.trial__background2}>
                            <p variant="h5" className={classes.trial__photo__sub}>
                                Пройдите тест <br/>
                                чтобы определиться
                                с направлением
                            </p>
                            <img src="https://cdn-icons-png.flaticon.com/512/271/271226.png" alt="sdf"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.about__us}>
                <div className={classes.about__us__title}>
                    <p className={classes.about__us__h4}>
                        <span>О</span> НАС
                    </p>
                </div>
                <div className={classes.about__us__title2}>
                    <Typography variant="h4" style={{fontWeight: 'bold'}}>Образовательный центр GeekTech </Typography>
                </div>
                <div className={classes.about__us__sub}>
                    <Typography variant="subtitle 1" className={classes.about__us__sub__txt}>
                        Образовательный центр GeekTech (ГикТек) был основан Fullstack-разработчиком Айдаром Бакировым и
                        Android-разработчиком Нургазы Сулаймановым в 2018-ом году в Бишкеке с целью дать возможность
                        каждому человеку, даже без опыта в технологиях, гарантированно освоить IT-профессию.
                        В данный момент более 400 студентов в возрасте от 12 до 45 лет изучают здесь программирование,
                        дизайн и английский язык. Филиальная сеть образовательного центра представлена в таких городах,
                        как Бишкек, Ош и Кара-Балта.
                    </Typography>
                </div>
                <div className={classes.about__statistic}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={6} sm={6} className={classes.about__statistic__item}>
                            <p className={classes.about__statistic__nums}>
                                200+
                            </p>
                            <div className={classes.about__statistic__colors}>
                                <div className={classes.about__statistic__blue}></div>
                                <div className={classes.about__statistic__red}></div>

                            </div>
                            <Typography variant="h6" className={classes.about__statistic__txt} style={{fontWeight: '550'}}>
                            Выпускников
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} sm={6} className={classes.about__statistic__item}>
                            <p className={classes.about__statistic__nums}>
                                30+
                            </p>
                            <div className={classes.about__statistic__colors}>
                                <div className={classes.about__statistic__red}></div>
                                <div className={classes.about__statistic__blue}></div>
                            </div>
                            <Typography variant="h6" className={classes.about__statistlzic__txt}  style={{fontWeight: '550'}}>
                            Преподавателей
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} sm={6} className={classes.about__statistic__item}>
                            <p className={classes.about__statistic__nums}>
                            3
                            </p>
                            <div className={classes.about__statistic__colors}>
                                <div className={classes.about__statistic__blue}></div>
                                <div className={classes.about__statistic__red}></div>
                            </div>
                            <Typography variant="h6" className={classes.about__statistic__txt}  style={{fontWeight: '550'}}>
                            Филиала
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} sm={6} className={classes.about__statistic__item}>
                            <p className={classes.about__statistic__nums}>
                            30+ 
                            </p>
                            <div className={classes.about__statistic__colors}>
                                <div className={classes.about__statistic__red}></div>
                                <div className={classes.about__statistic__blue}></div>
                            </div>
                            <Typography variant="h6" className={classes.about__statistic__txt}  style={{fontWeight: '550'}}>
                            Сотрудников
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.reviews}>
                    <div className={classes.reviews__title}>
                    <p style={{ fontFamily: ["Roboto", "-apple-system", "sans-serif"],}}>ОТЗЫВЫ</p>   
                    </div>
                    <div className={classes.reviews__video}>
                    
                </div>
                <div className={classes.reviews__video}>
            
                </div>
                </div>
            </div>
        </div>
    </>;
};

export default MobileMain;
