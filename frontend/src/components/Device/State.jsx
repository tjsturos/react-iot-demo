import * as React from "react";
import StateIcon from '@material-ui/icons/LensRounded'

const DeviceState = ({record}) => {
    return <span style={{ color: record.state === 1 ? 'green' : 'red', paddingY: 'auto'}}><StateIcon /></span>
};

export default DeviceState