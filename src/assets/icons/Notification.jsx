import React from 'react'

const Notification = ({ size, color }) => {
  let fillColor = color || 'currentColor'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size ? `${size}px` : '1em'} viewBox="0 0 37 28.18">
      <g transform="translate(-0.001)">
        <g transform="translate(5.634)">
          <g >
            <path id="Trazado_2915" data-name="Trazado 2915" d="M101.628,83.911a10.444,10.444,0,0,1-1.76-5.812V72.2a9.034,9.034,0,0,0-7.976-8.972V61H89.724v2.238a9.112,9.112,0,0,0-7.92,9.048v5.807a10.444,10.444,0,0,1-1.759,5.818l-2.072,3.109h9.8a3.254,3.254,0,0,0,6.13,0h9.8Zm-19.61.94A12.6,12.6,0,0,0,83.971,78.1V72.286a6.92,6.92,0,0,1,6.841-6.95h.025A6.864,6.864,0,0,1,97.7,72.2v5.893a12.6,12.6,0,0,0,1.953,6.752Z" transform="translate(-77.973 -61)" fill={fillColor} />
          </g>
        </g>
        <g transform="translate(32.394 6.681)">
          <g transform="translate(0 0)">
            <path d="M449.849,153.469,448.317,155a8.31,8.31,0,0,1,.091,11.658l1.562,1.509a10.478,10.478,0,0,0-.115-14.7Z" transform="translate(-448.317 -153.468)" fill={fillColor} />
          </g>
        </g>
        <g transform="translate(29.328 9.753)">
          <g transform="translate(0 0)">
            <path d="M407.423,195.9l-1.532,1.533a3.974,3.974,0,0,1,.031,5.588l1.549,1.517a6.142,6.142,0,0,0-.048-8.637Z" transform="translate(-405.891 -195.9)" fill={fillColor} />
          </g>
        </g>
        <g transform="translate(0.001 6.682)">
          <g>
            <path d="M4.6,155l-1.532-1.532a10.478,10.478,0,0,0-.115,14.7l1.562-1.509A8.309,8.309,0,0,1,4.608,155Z" transform="translate(-0.001 -153.469)" fill={fillColor} />
          </g>
        </g>
        <g transform="translate(4.335 9.748)">
          <g transform="translate(0)">
            <path d="M63.331,197.428,61.8,195.9a6.142,6.142,0,0,0-.048,8.637l1.549-1.517a3.974,3.974,0,0,1,.031-5.588Z" transform="translate(-60 -195.895)" fill={fillColor} />
          </g>
        </g>
      </g>
    </svg>

  )
}

export default Notification;

