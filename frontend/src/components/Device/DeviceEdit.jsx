import * as React from "react";
import { required, number, SelectInput, Edit, SimpleForm, TextInput, ReferenceInput, useNotify, useRefresh, useRedirect } from 'react-admin';

const DeviceTitle = ({ name }) => {
    return <span>{name}</span>
}

const DeviceEdit = (props) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = (data) => {
        notify(`Device was updated`)
        redirect('/devices');
        refresh();
    };

    return (
        <Edit onSuccess={onSuccess} title={<DeviceTitle />} {...props}>
            <SimpleForm>
                <TextInput source="name" validate={required()}/>
                <TextInput source="serial" validate={required(), number()}/>
                <ReferenceInput label="Model" source="model" reference="models">
                    <SelectInput optionText="name" />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    )
}

export default DeviceEdit
