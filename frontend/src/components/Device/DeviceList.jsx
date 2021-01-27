import * as React from "react";
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';

import ModelFilter from '../Model/ModelFilter'
import DeviceState from './State'
import Name from './Name'
import Actions from './Actions'

export const DeviceList = (props) => (
    <List {...props} filters={<ModelFilter />}>
        <Datagrid>
            <DeviceState source="state" sortable={false}/>
            <Name source="id" label="Name/ID" props sortable={true}/>
            <TextField source="serial" sortable={false} />
            <ReferenceField sortable={false} label="Model" source="model" reference="models">
                <TextField source="name"  />
            </ReferenceField>
            <Actions label="Actions" props/>
        </Datagrid>
    </List>
);

export default DeviceList