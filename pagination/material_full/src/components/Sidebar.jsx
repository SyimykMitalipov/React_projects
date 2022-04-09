import React from 'react';
import { makeStyles, withStyles } from '@mui/styles';

const useStyles = makeStyles({
    side: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053'
        
    }
})
const Sidebar = () => {
    const classes = useStyles()
    return (
        <div className={classes.side}>
            <h2>Hello world</h2>
        </div>
    );
}

export default Sidebar;
