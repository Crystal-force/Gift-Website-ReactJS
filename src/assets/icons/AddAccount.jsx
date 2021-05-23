import React from 'react'

const AddAccount = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 21.5 21.178">
      <g transform="translate(0 -0.066)">
        <path d="M16.406,293.975a5.051,5.051,0,0,0-3.7,1.593,7.742,7.742,0,0,0-4.857-1.69H7.835a7.684,7.684,0,0,0-5.547,2.329A8.227,8.227,0,0,0,0,302.036a.478.478,0,0,0,.134.329.458.458,0,0,0,.329.134l12.155-.023c.028.032.055.06.083.093a5.095,5.095,0,1,0,3.7-8.594ZM.94,301.569a7.241,7.241,0,0,1,2.01-4.718A6.753,6.753,0,0,1,7.835,294.8h.014a6.833,6.833,0,0,1,4.288,1.491,5.1,5.1,0,0,0-.176,5.256Zm15.466,1.667a4.167,4.167,0,1,1,4.167-4.168A4.167,4.167,0,0,1,16.406,303.236Zm0,0" transform="translate(0 -282.92)" fill={color || 'currentColor'} />
        <path d="M84.343,9.855a4.894,4.894,0,1,0-4.894-4.894A4.894,4.894,0,0,0,84.343,9.855Zm0-8.863a3.968,3.968,0,1,1-3.968,3.968A3.968,3.968,0,0,1,84.343.992Zm0,0" transform="translate(-76.504 0)" fill={color || 'currentColor'} />
        <path d="M383.718,372.7h-1.412v-1.412a.463.463,0,1,0-.926,0V372.7h-1.412a.463.463,0,0,0,0,.926h1.412v1.412a.463.463,0,0,0,.926,0v-1.412h1.412a.463.463,0,0,0,0-.926Zm0,0" transform="translate(-365.437 -357.019)" fill={color || 'currentColor'} />
      </g>
    </svg>

  )
}

export default AddAccount;

