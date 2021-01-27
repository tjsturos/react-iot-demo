import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, useTranslate } from 'react-admin';
import { makeStyles } from '@material-ui/core';
import ModelFilter from '../Model/ModelFilter'
import DeviceState from './State'
import Name from './Name'
import Actions from './Actions'

/**
 * The Actions text doesn't show up over the center unless you have this.
 * There is still a gap inbetween a small and medium that could be better served
 * with this css, but it doesn't pay unless there is actually devices that are that
 * specific size.
 */
const useStyles = makeStyles(theme => ({
    centerHeaderText: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '55px'
        },
    },
}));

export const DeviceList = (props) => {
    const classes = useStyles();
    const translate = useTranslate()
    return (
        <List {...props} filters={<ModelFilter />}>
            <Datagrid>
                <DeviceState source="state" sortable={false}/>
                <Name source="id" label={translate("Name/ID")} props sortable={true}/>
                <TextField source="serial" sortable={false} />
                <ReferenceField sortable={false} label={translate("Model")} source="model_id" reference="models">
                    <TextField source="name"  />
                </ReferenceField>
                <Actions label={translate("Actions")} headerClassName={classes.centerHeaderText} props/>
            </Datagrid>
        </List>
    )
    };

export default DeviceList