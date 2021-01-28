import * as React from 'react';

import {
    TopToolbar,
    sanitizeListRestProps,
} from 'react-admin';

import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles({
    createButton: {
        marginRight: '15rem',
        fontSize: '2rem'
    }
})

const ListActions = (props) => {
    const classes = useStyles()
    const {
        className,
        exporter,
        filters,
        maxResults,
        ...rest
    } = props;

    return (
        <TopToolbar className={classes.createButton} {...sanitizeListRestProps(rest)}>
           <Button variant="outlined"><AddIcon /> <Typography variant="button"><b>new device</b></Typography></Button>
        </TopToolbar>
    );
};

export default ListActions