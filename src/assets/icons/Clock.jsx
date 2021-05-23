import React from 'react'

const Clock = ({ color }) => {
  let fillColor = color || 'currentColor'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 19.098 19.098">
      <g transform="translate(8.809 4.43)">
        <g >
          <path d="M240.311,125.584l-2.663-2v-4.068a.74.74,0,1,0-1.479,0v4.438a.738.738,0,0,0,.3.592l2.959,2.219a.74.74,0,0,0,.888-1.184Z" transform="translate(-236.169 -118.779)" fill={fillColor}/>
        </g>
      </g>
      <g >
        <g >
          <path d="M9.549,0A9.549,9.549,0,1,0,19.1,9.549,9.559,9.559,0,0,0,9.549,0Zm0,17.618a8.07,8.07,0,1,1,8.07-8.07A8.079,8.079,0,0,1,9.549,17.618Z" fill={fillColor}/>
        </g>
      </g>
    </svg>

  )
}

export default Clock;

