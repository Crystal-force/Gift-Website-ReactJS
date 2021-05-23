import React from 'react'

const Coin = ({ color }) => {
  let fillColor = color || 'currentColor'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 19.098 19.098">
      <g>
        <g>
          <path d="M16.3,2.8A9.549,9.549,0,0,0,2.8,16.3,9.549,9.549,0,0,0,16.3,2.8ZM9.549,17.979a8.43,8.43,0,1,1,8.43-8.43A8.439,8.439,0,0,1,9.549,17.979Z" fill={fillColor} />
        </g>
      </g>
      <g transform="translate(6.592 3.596)">
        <g >
          <path d="M180.29,101.795h-1.2a1.238,1.238,0,0,1,0-2.477h2.4a.56.56,0,1,0,0-1.119H180.25V96.961a.56.56,0,0,0-1.119,0V98.2h-.04a2.357,2.357,0,1,0,0,4.715h1.2a1.238,1.238,0,0,1,0,2.477h-2.4a.56.56,0,1,0,0,1.119h1.238v1.238a.56.56,0,0,0,1.119,0v-1.238h.04a2.357,2.357,0,0,0,0-4.715Z" transform="translate(-176.734 -96.401)" fill={fillColor} />
        </g>
      </g>
    </svg>

  )
}

export default Coin;

