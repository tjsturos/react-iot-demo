import * as React from "react";
import { List, Datagrid, SelectInput, Edit, Create, SimpleForm, TextField, EditButton, DeleteButton, TextInput, DateInput } from 'react-admin';

import StateIcon from '@material-ui/icons/LensRounded'

const DeviceState = ({state}) => {
    return <span style={{ color: state ? 'green' : 'red'}}>{{StateIcon}}</span>
};
export const DeviceList = (props) => (
    <List {...props}>
        <Datagrid>
            <DeviceState source="state" />
            <TextField source="name" sortable="true" />
            <TextField source="serial" />
            <TextField source="model" />
            <EditButton basePath="/devices" />
            <DeleteButton basePath="/devices" />
        </Datagrid>
    </List>
);

const DeviceTitle = ({ name }) => {
    return <span>{name}</span>
}

export const DeviceEdit = (props) => (
    <Edit title={<DeviceTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="serial" />
            <SelectInput source="model" choices={[
                { id: 'sense-100', name: 'sense-100'},
                { id: 'sense-200', name: 'sense-200'},
                { id: 'sense-300', name: 'sense-300'},
                { id: 'sense-400', name: 'sense-400'},
            ]} />
        </SimpleForm>
    </Edit>
);

export const DeviceCreate = (props) => (
    <Create title="Create a Device" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="serial" />
            <SelectInput label="Model" source="model" choices={[
                { id: 'sense-100', name: 'sense-100'},
                { id: 'sense-200', name: 'sense-200'},
                { id: 'sense-300', name: 'sense-300'},
                { id: 'sense-400', name: 'sense-400'},
            ]} />
        </SimpleForm>
    </Create>
);