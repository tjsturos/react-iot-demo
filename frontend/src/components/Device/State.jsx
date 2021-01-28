import * as React from "react";
import StateIcon from '@material-ui/icons/LensRounded'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    state: status =>({
        color: status ? 'green' : 'red',
        fontSize: '1rem',
        paddingTop: '0.3rem',
        paddingLeft: '0.3rem'
    })
})
const DeviceState = ({ record }) => {
    const classes = useStyles(record.state)
    return <StateIcon classes={{root: classes.state}} />

}

export default DeviceState