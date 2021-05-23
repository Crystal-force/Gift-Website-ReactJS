import React from 'react'

const Tridot = ({ color }) => {
  let fillColor = color || 'currentColor'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 24 6">
      <g transform="translate(24 -192) rotate(90)">
        <g transform="translate(192)">
          <g >
            <circle cx="3" cy="3" r="3" transform="translate(0 9)" fill={fillColor} />
            <circle cx="3" cy="3" r="3" transform="translate(0 18)" fill={fillColor} />
            <circle cx="3" cy="3" r="3" fill={fillColor} />
          </g>
        </g>
      </g>
    </svg>

  )
}

export default Tridot;

