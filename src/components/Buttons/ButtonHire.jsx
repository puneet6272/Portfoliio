import React from 'react'
import { navLinks } from '../../constants'
import './Button.css'


function ButtonHire() {

    console.log(navLinks[2].title)
    return (


        <a href={`#${navLinks[2].id}`}>
            <button className='buttons'>Contact Me
            </button>
        </a>

    )
}

export default ButtonHire
