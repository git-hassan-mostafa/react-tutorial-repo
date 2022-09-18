import React from 'react'
import { FaReact, FaAngular,FaVuejs } from "react-icons/fa";
import { IconContext } from 'react-icons'

const ReactIcons = () => {
    return (
        <div>
            <IconContext.Provider value={
                {
                    color:'blue',
                    size:'100px'

                }
            } >
                <FaReact />
                <FaAngular color='red' />
                <FaVuejs color='green' />
            </IconContext.Provider>

        </div>
    )
}

export default ReactIcons
