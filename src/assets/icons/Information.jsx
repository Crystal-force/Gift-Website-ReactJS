import React from 'react'

const Information = ({ color }) => {
  let fillColor = color || 'currentColor'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 16 16">
      <path id="Path_3638" data-name="Path 3638" d="M53,17a8,8,0,1,0,8,8A8,8,0,0,0,53,17Z" transform="translate(-45 -17)" fill={fillColor} />
      <g id="Group_3731" data-name="Group 3731" transform="translate(-45 -17)">
        <path id="Path_3621" data-name="Path 3621" d="M53,27a1,1,0,0,0,1-1V20a1,1,0,0,0-2,0v6A1,1,0,0,0,53,27Z" fill="#f1f2f2" />
        <path id="Path_3622" data-name="Path 3622" d="M53,31a1,1,0,0,0,1-1V29a1,1,0,0,0-2,0v1A1,1,0,0,0,53,31Z" fill="#f1f2f2" />
      </g>
    </svg>
  )
}

export default Information;

