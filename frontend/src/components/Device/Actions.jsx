import * as React from 'react'
import { EditButton, DeleteButton } from 'react-admin'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        width: 15,
    },
});

const CustomEditButton = ({record}) => {
    const classes = useStyles();
    return <EditButton className={classes.button} basePath="/devices" label='' undoable={false} record={record} />
}

const CustomDeleteButton = ({ record }) => {
    const classes = useStyles();
    return <DeleteButton className={classes.button} basePath="/devices" undoable={false} label='' record={record} />
}

const Actions = ({record}) => {
    return (
        <div>
            <CustomEditButton record={record} />
            <CustomDeleteButton record={record} />
        </div>
    )
}

export default Actions