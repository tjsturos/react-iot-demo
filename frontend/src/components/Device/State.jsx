import * as React from "react";
import StateIcon from '@material-ui/icons/LensRounded'

const DeviceState = ({ record }) => {
    return (
        <span
            style={
                {
                    color: record.state === 1 ? 'green' : 'red',
                    padding: '0 0 0'
                }
            }
        ><StateIcon /></span>
    )
}

export default DeviceState