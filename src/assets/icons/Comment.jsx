import React from 'react'

const Comment = ({ color }) => {
  let fillColor = color || 'currentColor'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 19.098 17.57">
      <path d="M16.473-1.332H2.626A2.628,2.628,0,0,0,0,1.294V9.767a2.629,2.629,0,0,0,2.616,2.626v3.845l5.526-3.845h8.33A2.629,2.629,0,0,0,19.1,9.767V1.294a2.628,2.628,0,0,0-2.626-2.626Zm1.507,11.1a1.508,1.508,0,0,1-1.507,1.507H7.792L3.736,14.1V11.274H2.626A1.508,1.508,0,0,1,1.12,9.767V1.294A1.508,1.508,0,0,1,2.626-.213H16.473a1.508,1.508,0,0,1,1.507,1.507Zm0,0" transform="translate(-0.001 1.332)" fill={fillColor} />
      <path d="M171.293,131.172h8.875v1.119h-8.875Zm0,0" transform="translate(-166.182 -127.218)" fill={fillColor} />
      <path d="M171.293,211.172h8.875v1.119h-8.875Zm0,0" transform="translate(-166.182 -204.831)" fill={fillColor} />
      <path d="M171.293,291.172h8.875v1.119h-8.875Zm0,0" transform="translate(-166.182 -282.444)" fill={fillColor} />
    </svg>

  )
}

export default Comment;

