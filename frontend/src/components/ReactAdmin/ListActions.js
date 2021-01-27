import * as React from 'react';

import {
    TopToolbar,
    CreateButton,
    sanitizeListRestProps,
} from 'react-admin';

const ListActions = (props) => {
    const {
        className,
        exporter,
        filters,
        maxResults,
        ...rest
    } = props;

    return (
        <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
           <CreateButton />
        </TopToolbar>
    );
};

export default ListActions