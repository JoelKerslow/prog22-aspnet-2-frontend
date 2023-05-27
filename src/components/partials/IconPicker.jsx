import { useState } from 'react'

const IconPicker = ({ icons, selectedIcon, onChange }) => {
  const [showIcons, setShowIcons] = useState(false)

  const handleIconClick = (icon) => {
    onChange(icon)
    setShowIcons(false)
  }

  return (
    <div className='icon-picker'>
      <div
        className='icon-picker__selected'
        onClick={() => setShowIcons(!showIcons)}
      >
        <i className={`fa-regular ${selectedIcon}`}></i>
      </div>
      {showIcons && (
        <div className={`icon-picker__icons ${!showIcons && 'hide'}`}>
          {icons.map((icon, index) => (
            <div
              key={index}
              className='icon-picker__icon'
              onClick={() => handleIconClick(icon)}
            >
              <i className={`fa-regular ${icon}`}></i>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default IconPicker
