import React from 'react';
import Sidebar from './components/Sidebar';
import { makeStyles } from '@mui/styles';
import Header from './components/Header';
import { useStyles } from './style';
const App = () => {
  const classes = useStyles();
  return (
    <>
      <Sidebar />
      <div className={classes.appMain}>
        <Header />
      </div>
    </>
  );
};

export default App;
