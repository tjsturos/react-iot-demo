// in src/MyLayout.js
import * as React from 'react';
import { Layout, Notification, Title } from 'react-admin';
import MyAppBar from './AppBar';
import {
    Typography,
    CardContent,
    Card,
    CardHeader
} from'@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';
import MyMenu from './Menu';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appFrame: {
        marginTop: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    header: {
        padding: "0.5em 0 0.5em"
    },
    card: {
        'box-shadow': '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'
    },
    cardContent: {
        paddingTop: '0'
    },
    title: {
      background: "#4791db",
      flexGrow: 1,
      'text-align': 'left',
      color: 'white'
    },
  }));
const MyLayout = ({children}) => {
    const classes = useStyles()

    return (<Layout classes={{root: classes.root}} menu={MyMenu} appBar={MyAppBar} notification={Notification} >
        <div className={classes.appFrame}>
            <Typography classes={{root: classes.header}} align='left' variant="h3" component="h2">
                Dashboard
            </Typography>
            <Card classes={{root: classes.card}}>
                <CardHeader title="Devices" classes={{ root: classes.title }}></CardHeader>
                <CardContent classes={{ root: classes.cardContent }}>
                    {children}
                </CardContent>
            </Card>
            </div>

    </Layout>)
}

export default MyLayout;