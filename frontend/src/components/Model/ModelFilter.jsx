import { Filter, ReferenceInput, SelectInput, useTranslate } from 'react-admin';

const ModelFilter = (props) => {
    const translate = useTranslate()
    return (
        <Filter {...props}>
            <ReferenceInput label={translate("Model")} source="model_id" reference="models" allowEmpty alwaysOn>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    )
}

export default ModelFilter