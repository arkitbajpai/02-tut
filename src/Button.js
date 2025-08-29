import React from 'react'

const Button = ({buttonText, reqType, setReqType}) => {
    return (
    <button
            className={buttonText === reqType ? "selected" : null}
            
            onClick={() => setReqType(buttonText)}
        >{buttonText}</button>
  )
}

export default Button
