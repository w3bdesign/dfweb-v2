import React from "react"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const Coffee = <FontAwesomeIcon icon={faCoffee} />

ReactDOM.render(Coffee, document.body)