import * as React from "react";
import { redirect, List, Datagrid, TextField, EditButton, DeleteButton, ReferenceField } from 'react-admin';

import StateIcon from '@material-ui/icons/LensRounded'
import ModelFilter from '../Model/ModelFilter'

const DeviceState = (record) => {
    console.log(record)
    return <span style={{ color: record.record.state === 1 ? 'green' : 'red', paddingY: 'auto'}}><StateIcon /></span>
};



const Actions = ({record}) => {
    return (
        <div>
            <EditButton basePath="/devices" record={record}  />
        </div>
    )
}

const Name = ({record}) => {
    return (
        <span>{record.name + ' ' + record.id}</span>
    )
}

export const DeviceList = (props) => (
    <List {...props} filters={<ModelFilter />}>
        <Datagrid>
            <DeviceState source="state" />
            <Name label="Name/ID" props sortable />
            <TextField source="serial" />
            <ReferenceField label="Model" source="model" reference="models">
                <TextField source="name" />
            </ReferenceField>
            <Actions label="Actions" props/>
            <DeleteButton basePath="/devices" undoable={false} />
        </Datagrid>
    </List>
);

export default DeviceList