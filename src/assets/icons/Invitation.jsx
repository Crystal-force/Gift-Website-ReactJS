import React from 'react'

const Invitation = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 32.976 34.5">
      <g transform="translate(-9.668 0)">
        <g transform="translate(9.668 0)">
          <g transform="translate(0 0)">
            <path d="M42.382,12.295,38.141,8.755V3.734a.793.793,0,0,0-.82-.765H31.149L28.673.9a3.938,3.938,0,0,0-5.029.008L21.169,2.969H14.918a.793.793,0,0,0-.82.765v5.1L9.936,12.295a.779.779,0,0,0-.268.607h.016v17.65A3.935,3.935,0,0,0,13.6,34.5H38.708a3.934,3.934,0,0,0,3.918-3.949V12.9h.016A.716.716,0,0,0,42.382,12.295ZM38.141,10.8l2.483,2.065-2.483,1.845ZM24.653,2.118a2.367,2.367,0,0,1,3.019.008l1,.843H23.636ZM15.675,4.546H36.564V15.889l-8.978,6.685a2.4,2.4,0,0,1-2.846,0l-9.065-6.748V4.546ZM14.1,10.876v3.776l-2.4-1.789ZM41.057,30.543a2.36,2.36,0,0,1-2.341,2.381H13.6a2.358,2.358,0,0,1-2.341-2.373V14.47L23.81,23.843a3.95,3.95,0,0,0,4.7,0L41.057,14.47Z" transform="translate(-9.668 0)" fill={color || 'currentColor'} />
          </g>
        </g>
        <g transform="translate(20.483 10.852)">
          <g >
            <path d="M151.918,137.663h-4.257a.788.788,0,1,0,0,1.577h4.257a.788.788,0,1,0,0-1.577Z" transform="translate(-146.873 -137.663)" fill={color || 'currentColor'} />
          </g>
        </g>
        <g transform="translate(20.483 14.794)">
          <g transform="translate(0)">
            <path d="M157.436,187.663h-9.775a.788.788,0,0,0,0,1.577h9.775a.788.788,0,1,0,0-1.577Z" transform="translate(-146.873 -187.663)" fill={color || 'currentColor'} />
          </g>
        </g>
      </g>
    </svg>

  )
}

export default Invitation;

