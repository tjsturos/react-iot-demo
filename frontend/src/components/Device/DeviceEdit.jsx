import * as React from "react";
import { SaveButton, DeleteButton, Toolbar, required, number, SelectInput, Edit, SimpleForm, TextInput, ReferenceInput, useNotify, useRedirect } from 'react-admin';

import { makeStyles } from '@material-ui/core/styles';
const DeviceTitle = ({ name }) => {
    return <span>{name}</span>
}

const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

const CustomToolbar = props => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton />
        <DeleteButton undoable={false} />
    </Toolbar>
);

const DeviceEdit = (props) => {
    // const notify = useNotify();
    // const redirect = useRedirect();

    // const onSuccess = (data) => {
    //     notify(`Device was updated`)
    //     redirect('/devices');
    // };

    return (
        <Edit title={<DeviceTitle />} {...props}>
            <SimpleForm toolbar={<CustomToolbar />}>
                <TextInput source="name" validate={required()}/>
                <TextInput source="serial" validate={[required(), number()]}/>
                <ReferenceInput label="Model" source="model" reference="models">
                    <SelectInput optionText="name" />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    )
}

export default DeviceEdit
