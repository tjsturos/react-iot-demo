import * as React from 'react'
// import DeleteButton from './DeleteButton'
import { EditButton, DeleteButton } from 'react-admin'

const Actions = ({record}) => {
    return (
        <div>
            <EditButton basePath="/devices" record={record} label=''  undoable={false} />
            <DeleteButton basePath="/devices" undoable={false} label='' record={record} />
        </div>
    )
}

export default Actions