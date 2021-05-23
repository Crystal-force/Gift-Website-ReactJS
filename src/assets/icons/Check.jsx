import React from 'react'

const Check = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 20.5 20.5">
      <path d="M10.25,0A10.25,10.25,0,1,0,20.5,10.25,10.25,10.25,0,0,0,10.25,0Zm0,0" fill={color || "currentColor"} />
      <path d="M151.115,166.786l-5.552,5.552a.853.853,0,0,1-1.208,0l-2.776-2.776a.854.854,0,1,1,1.208-1.208l2.172,2.172,4.948-4.948a.854.854,0,1,1,1.208,1.208Zm0,0" transform="translate(-135.67 -158.709)" fill="#fff" />
    </svg>

  )
}

export default Check;

