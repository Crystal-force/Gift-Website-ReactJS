import React from 'react'

const Facebook = ({ color }) => {
  let fillColor = color || 'currentColor'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 45 45">
      <g transform="translate(-1001 -3621)">
        <circle cx="22.5" cy="22.5" r="22.5" transform="translate(1001 3621)" fill={fillColor} />
        <g transform="translate(1017.023 3630.276)">
          <g transform="translate(0)">
            <path  d="M136.433,9.276V5.9a1.687,1.687,0,0,1,1.687-1.687h1.687V0h-3.373a5.059,5.059,0,0,0-5.06,5.06V9.276H128v4.217h3.373V26.986h5.06V13.493h3.373l1.687-4.217Z" transform="translate(-128)" fill="#fff" />
          </g>
        </g>
      </g>
    </svg>

  )
}

export default Facebook;

