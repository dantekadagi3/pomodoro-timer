// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function Button({text,func}){
    return(
        <div className='mt-3 '>
            <button  className="text-3xl text-white font-bold border-2 px-4 py-4 w-40 rounded-full" onClick={func}>{text}</button>
        </div>
    )
}export default Button;