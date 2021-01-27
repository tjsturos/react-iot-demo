import * as React from "react";
import { SelectInput, Create, SimpleForm, TextInput, ReferenceInput, useNotify, useRefresh, useRedirect } from 'react-admin';

const DeviceCreate = (props) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({ data }) => {
        notify(`Device "${data.name}" was created`)
        redirect('/devices');
        refresh();
    };
    return (
        <Create onSuccess={onSuccess} title="Create a Device" {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="serial" />
                <ReferenceInput label="Model" source="model" reference="models">
                    <SelectInput optionText="name" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    )
};

export default DeviceCreate