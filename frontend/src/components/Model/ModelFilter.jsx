import { Filter, ReferenceInput, SelectInput} from 'react-admin';

const ModelFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput label="Model" source="model_id" reference="models" allowEmpty alwaysOn>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export default ModelFilter