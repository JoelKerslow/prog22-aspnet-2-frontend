import React from 'react'

const InputBox = ({ type, className, placeholder }) => {
  return (
    <div className="input-field-group">
      <label>{placeholder.toUpperCase()}</label>
      <input
        type={type}
        className={`InputBox ${className}`}
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputBox
