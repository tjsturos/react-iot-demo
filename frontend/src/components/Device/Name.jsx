import React, { useRef } from 'react'

const Name = ({record}) => {
    const nameRef = useRef(null)
    return (
        <span ref={nameRef}>{record.name + ' ' + record.id}</span>
    )
}

export default Name