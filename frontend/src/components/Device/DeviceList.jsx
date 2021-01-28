import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, useTranslate } from 'react-admin';
import { makeStyles } from '@material-ui/core';
import ModelFilter from '../Model/ModelFilter'
import DeviceState from './State'
import Name from './Name'
import Actions from './Actions'
import ListActions from '../ReactAdmin/ListActions'
/**
 * The Actions text doesn't show up over the center unless you have this.
 * There is still a gap inbetween a small and medium that could be better served
 * with this css, but it doesn't pay unless there is actually devices that are that
 * specific size.
 */
const useStyles = makeStyles(theme => ({
    list: {
        'box-shadow': "none !important",
        alignContent: "space-between"
    },
    nameColumn: {
        paddingRight: '18rem'
    },
    column: {
        paddingRight: '7rem'
    },
    actionsColumn: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '2rem'
        }
    }
}));



export const DeviceList = (props) => {
    const classes = useStyles();
    const translate = useTranslate()
    return (
        <List {...props}
            bulkActionButtons={false}
            exporter={false}
            filters={<ModelFilter />}
            actions={<ListActions
            basePath="/devices"/>}
            classes={{content: classes.list}}
        >
            <Datagrid>
                <DeviceState source="state" sortable={false}/>
                <Name headerClassName={classes.nameColumn} source="id" label={translate("Name/ID")} props sortable={true}/>
                <ReferenceField
                    headerClassName={classes.column}
                    sortable={false}
                    label={translate("Model")}
                    source="model_id"
                    reference="models"
                >
                    <TextField source="name"  />
                </ReferenceField>
                <TextField headerClassName={classes.column} source="serial" sortable={false} />
                <Actions label={translate("Actions")} headerClassName={classes.actionsColumn} props/>
            </Datagrid>
        </List>
    )
    };

export default DeviceList