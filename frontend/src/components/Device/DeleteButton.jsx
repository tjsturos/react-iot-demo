import * as React from "react";
import { useDelete } from 'react-admin';
import DeleteIcon from '@material-ui/icons/Delete'
const DeleteButton = ({record}) => {
    const [deleteOne, { loading, error }] = useDelete('devices', record.id);

    if (error) { return <p>ERROR</p>; }
    return <DeleteIcon style={{ color:'red', marginY: 'auto', paddingY: 'auto'}} disabled={loading} onClick={deleteOne} />;
}

export default DeleteButton