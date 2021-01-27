import { Filter, ReferenceInput, SelectInput} from 'react-admin';

const ModelFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput label="Model" source="id" reference="models" allowEmpty alwaysOn>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export default ModelFilter