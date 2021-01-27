// in src/MyAppBar.js
import * as React from 'react';
import { Menu } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    menu: {
        display: 'none'
    }
});

const MyMenu = props => {
    const classes = useStyles();
    return (
        <Menu className={classes.menu} {...props} />
    );
};

export default MyMenu;