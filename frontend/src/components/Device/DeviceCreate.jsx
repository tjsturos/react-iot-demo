import * as React from "react";
import { SelectInput, Create, SimpleForm, TextInput, ReferenceInput, useNotify, useRedirect, number, required } from 'react-admin';

const DeviceCreate = (props) => {
    const notify = useNotify();
    const redirect = useRedirect();

    const onSuccess = ({ data }) => {
        notify(`Device "${data.name}" was created`)
        redirect('/devices');
    };
    return (
        <Create onSuccess={onSuccess} title="Create a Device" {...props}>
            <SimpleForm>
                <TextInput source="name" validate={required()} />
                <TextInput source="serial" validate={[required(), number()]} />
                <ReferenceInput label="Model" source="model" reference="models">
                    <SelectInput validate={required()} optionText="name" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    )
};

export default DeviceCreate