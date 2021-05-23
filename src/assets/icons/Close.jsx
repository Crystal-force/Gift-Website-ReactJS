import React from 'react'

const Close = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 15.015 15">
      <g transform="translate(0.017 0.001)">
        <path d="M8.814,7.493,14.707,1.6A.939.939,0,1,0,13.381.273l-5.89,5.9L1.6.273A.939.939,0,1,0,.274,1.6l5.893,5.89L.274,13.383A.937.937,0,1,0,1.6,14.707l5.89-5.89,5.89,5.89a.937.937,0,1,0,1.326-1.324Z" transform="translate(0 0)" fill={color || 'currentColor'} />
      </g>
    </svg>

  )
}

export default Close;

