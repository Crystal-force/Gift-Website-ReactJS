import React from 'react'

const Send = ({ color }) => {
  let fillColor = color || 'currentColor'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 9 8.771">
      <g transform="translate(0.001 -6.196)">
        <g transform="translate(-0.001 6.196)">
          <path d="M8.9,10.171a.943.943,0,0,0-.437-.437L1.354,6.291A.943.943,0,0,0,.067,7.49L1.3,10.582.067,13.674a.943.943,0,0,0,1.287,1.2L8.467,11.43A.943.943,0,0,0,8.9,10.171ZM1.08,14.306a.314.314,0,0,1-.428-.4l1.2-3.011H8.129Zm.773-4.039L.651,7.256a.314.314,0,0,1,.428-.4l7.048,3.41Z" transform="translate(0.001 -6.196)" fill={fillColor} />
        </g>
      </g>
    </svg>

  )
}

export default Send;

