import React from 'react'

const Twitter = ({ color }) => {
  let fillColor = color || 'currentColor'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 45 45">
      <g transform="translate(-1067 -3621)">
        <circle cx="22.5" cy="22.5" r="22.5" transform="translate(1067 3621)" fill={fillColor} />
        <g transform="translate(1079.385 3634.82)">
          <path d="M46.788,36.113a8.876,8.876,0,0,1-2.555.7,4.461,4.461,0,0,0,1.956-2.461,8.906,8.906,0,0,1-2.825,1.079,4.453,4.453,0,0,0-7.581,4.058,12.628,12.628,0,0,1-9.17-4.649,4.453,4.453,0,0,0,1.376,5.94,4.417,4.417,0,0,1-2.015-.557v.057a4.452,4.452,0,0,0,3.569,4.362,4.469,4.469,0,0,1-2.009.077,4.453,4.453,0,0,0,4.156,3.09A8.98,8.98,0,0,1,25.1,49.649,12.649,12.649,0,0,0,44.584,38.99q0-.29-.013-.575a9.023,9.023,0,0,0,2.22-2.3Z" transform="translate(-25.104 -34.028)" fill="#fff" />
        </g>
      </g>
    </svg>

  )
}

export default Twitter;

