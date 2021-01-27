import { Filter, ReferenceInput, SelectInput, useTranslate } from 'react-admin';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    filter: {
            'background-color': 'white'


    },
});

const ModelFilter = (props) => {
    const translate = useTranslate()
    const classes = useStyles()
    return (
        <Filter  {...props}>
            <ReferenceInput
                label={translate("Model")}
                source="model_id"
                reference="models"
                allowEmpty
                alwaysOn
            >
                <SelectInput variant="standard" classes={{ filled: classes.filter}} optionText="name" />
            </ReferenceInput>
        </Filter>
    )
}

export default ModelFilter