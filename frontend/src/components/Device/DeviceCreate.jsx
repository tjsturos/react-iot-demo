import * as React from "react";
import {
    SelectInput,
    Create,
    SimpleForm,
    TextInput,
    ReferenceInput,
    useNotify,
    useRedirect,
    number,
    required,
    useTranslate,
} from 'react-admin';

const DeviceCreate = (props) => {
    const notify = useNotify();
    const redirect = useRedirect();
    const translate = useTranslate()

    const onSuccess = () => {
        notify(translate('Device was created!'))
        redirect('/devices');
    };
    return (
        <Create onSuccess={onSuccess} title="Create a Device" {...props}>
            <SimpleForm>
                <TextInput source="name" validate={required()} />
                <TextInput source="serial" validate={[required(), number()]} />
                <ReferenceInput label={translate("Model")} source="model_id" reference="models">
                    <SelectInput validate={required()} optionText="name" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    )
};

export default DeviceCreate