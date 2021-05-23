import React from 'react'

const AddCircle = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 31 31">
      <path d="M15.5,31A15.5,15.5,0,1,1,31,15.5,15.5,15.5,0,0,1,15.5,31Zm0-29.062A13.563,13.563,0,1,0,29.063,15.5,13.563,13.563,0,0,0,15.5,1.938Zm0,0" fill={color || 'currentColor'} />
      <path d="M142.531,241.938H128.969a.969.969,0,0,1,0-1.937h13.563a.969.969,0,0,1,0,1.938Zm0,0" transform="translate(-120.25 -225.469)" fill={color || 'currentColor'} />
      <path d="M240.969,143.5a.969.969,0,0,1-.969-.969V128.969a.969.969,0,1,1,1.938,0v13.563a.969.969,0,0,1-.969.968Zm0,0" transform="translate(-225.469 -120.25)" fill={color || 'currentColor'} />
    </svg>

  )
}

export default AddCircle;

