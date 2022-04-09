import React from "react";
import { useStyles } from "./styles";
import { Button, Box } from "@mui/material";

import career from "../../../assets/career.svg";
import work from "../../../assets/work.svg";
import create from "../../../assets/create.svg";

const Main = (props) => {
  const { isCool } = props;

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.topContent}>
          <Box className={classes.mainText}>
            <h1 className={classes.title}>GEEKTECH</h1>
            <h2 className={classes.subTitle}>
              Место, где <span>ты</span> станешь <span>программистом</span>
            </h2>
            <p className={classes.text}>
              Обучим IT - професиям с нуля и предоставим стажировку
            </p>
            <Button className={classes.callBtn} variant="contained">
              <p>Записаться на пробный урок</p>
            </Button>
          </Box>
          <div className={classes.background}></div>
        </Box>
        <Box className={classes.features}></Box>
      </Box>
      <Box className={classes.isCool}>
        <Box className={classes.container}>
          <h1 className={classes.isCoolTitle}>
            ПОЧЕМУ
            <span> IT ЭТО КРУТО?</span>
          </h1>
          <Box className={classes.cardBlock}>
            <Box className={classes.cards}>
              <Box className={classes.card}>
                <img src={career} alt="career"></img>
                <h2>Карьера в IT - компании</h2>
                <p>
                  Станьте частью новой культуры. Работайте над интересными
                  проектами в команде с лучшими и получайте достойную оплату.
                </p>
              </Box>
              <hr />
              <Box className={classes.card}>
                <img src={work} alt="work"></img>
                <h2>Работайте во фрилансе</h2>
                <p>
                  Работайте удалённо, принимая заказы из других стран. Высокий
                  доход, свободный график и никакого начальника.
                </p>
              </Box>
              <hr />
              <Box className={classes.card}>
                <img src={create} alt="create"></img>
                <h2>Создайте IT-стартап</h2>
                <p>
                  Научитесь воплощать свои идеи в жизнь. Постройте новый Google
                  или Facebook. Реализуйте свои мечты.
                </p>
              </Box>
            </Box>
          </Box>
          <Box className={classes.profits}>
            <div className={classes.profit}>
              <h3>{isCool?.vacancy}+</h3>
              <p>Вакансий ежедневно</p>
            </div>
            <div className={classes.profit}>
              <h3>{isCool?.company}+</h3>
              <p>Компаний</p>
            </div>
            <div className={classes.profit}>
              <h3>{isCool?.middle_salary}K+</h3>
              <p>Средняя з\п</p>
            </div>
            <div className={classes.profit}>
              <h3>100%</h3>
              <p>Профита</p>
            </div>
          </Box>
        </Box>
      </Box>
      <Box className={classes.whyGt}>
        <Box className={classes.container}>
          <h2 className={classes.whyGtTitle}>
            ПОЧЕМУ <span>GEEKTECH</span>
          </h2>
          <Box>
            <Box>
              <div>
                <img alt="."></img>
                <h4></h4>
                <p></p>
              </div>
              <div>
                <img alt="."></img>
                <h4></h4>
                <p></p>
              </div>
              <div>
                <img alt="."></img>
                <h4></h4>
                <p></p>
              </div>
            </Box>
            <Box>
              <div>
                <img alt="."></img>
                <h4></h4>
                <p></p>
              </div>
              <div>
                <img alt="."></img>
                <h4></h4>
                <p></p>
              </div>
              <div>
                <img alt="."></img>
                <h4></h4>
                <p></p>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
