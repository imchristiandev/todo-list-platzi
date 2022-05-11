import React from 'react'
import './TodoIcon.css'
import { ReactComponent as CheckIcon } from './check.svg'
import { ReactComponent as DeleteIcon } from './close.svg'

function TodoIcon({type, color, onClick}) {
    const iconTypes = {
        "check": (
            <CheckIcon className='Icon-svg Icon-svg--check' fill={color} />
        ),
        "delete": (
            <DeleteIcon className='Icon-svg Icon-svg--delete' fill={color} />
        )
    }

    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type]}
        </span>
    )
}

export { TodoIcon }