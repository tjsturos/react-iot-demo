import * as React from 'react';
import {Typography, Badge, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    bar: {
        background: theme.palette.info.main,
        paddingTop: 0
    },
    menuButton: {
      marginLeft: theme.spacing(2.5),
    },
    title: {
      flexGrow: 1,
    },
    spacer: {
      flexGrow: 17
    }
  }));

const MyAppBar = props => {
    const classes = useStyles();
    return (
      <AppBar className={classes.bar} position="relative">
          <Toolbar >
              <MenuIcon />
              <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.title}
              >IoT Devices</Typography>
              <span className={classes.spacer} />
              <Badge badgeContent={4} color="error" className={classes.menuButton}>
                  <MailIcon  />
              </Badge>
              <Badge badgeContent={17} color="error" className={classes.menuButton} >
                  <NotificationsIcon />
              </Badge>
              <PersonIcon className={classes.menuButton}/>
          </Toolbar>
      </AppBar>
    );
};

export default MyAppBar;