import React from 'react'

const Account = ({ color }) => {
  let fillColor = color || 'currentColor'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 15.108 17.748">
      <defs>
        <clipPath >
          <rect width="15.108" height="17.748" fill={fillColor} />
        </clipPath>
      </defs>
      <g clipPath="url(#clip-path)">
        <path d="M379.338,307.259h.117a3.384,3.384,0,0,0,2.585-1.119c1.412-1.591,1.177-4.319,1.151-4.58a3.742,3.742,0,0,0-1.778-3.326,4.075,4.075,0,0,0-1.973-.517h-.062a4.082,4.082,0,0,0-1.973.5,3.744,3.744,0,0,0-1.8,3.341c-.026.26-.26,2.988,1.151,4.58a3.37,3.37,0,0,0,2.582,1.119Zm-2.754-5.607c0-.011,0-.022,0-.029.121-2.629,1.988-2.911,2.787-2.911h.044c.99.022,2.673.425,2.787,2.911a.075.075,0,0,0,0,.029c0,.026.26,2.519-.906,3.832a2.4,2.4,0,0,1-1.888.785h-.037a2.4,2.4,0,0,1-1.885-.785c-1.163-1.306-.913-3.81-.91-3.832Zm0,0" transform="translate(-371.868 -297.718)" fill={fillColor} />
        <path d="M377.93,334.891v-.011c0-.029,0-.059,0-.092-.022-.726-.07-2.424-1.661-2.967l-.037-.011a10.587,10.587,0,0,1-3.044-1.386.495.495,0,0,0-.568.81,11.421,11.421,0,0,0,3.348,1.529c.855.3.95,1.218.976,2.054a.716.716,0,0,0,0,.092,6.685,6.685,0,0,1-.077,1.133,14.646,14.646,0,0,1-12.934,0,6.339,6.339,0,0,1-.077-1.133c0-.029,0-.059,0-.092.026-.836.121-1.749.975-2.054a11.535,11.535,0,0,0,3.348-1.529.5.5,0,0,0-.568-.811,10.464,10.464,0,0,1-3.044,1.386l-.037.011c-1.592.546-1.639,2.244-1.661,2.966a.713.713,0,0,1,0,.092v.011a5.629,5.629,0,0,0,.187,1.661.47.47,0,0,0,.191.231,15.491,15.491,0,0,0,14.316,0,.492.492,0,0,0,.191-.231,5.907,5.907,0,0,0,.176-1.658Zm0,0" transform="translate(-362.865 -320.824)" fill={fillColor} />
      </g>
    </svg>

  )
}

export default Account;

