import React from 'react'

const Location = ({ color }) => {
  let fillColor = color || 'currentColor'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 19.098 23.875">
      <path d="M115.683,57.357a6.837,6.837,0,1,0,6.863,6.837A6.858,6.858,0,0,0,115.683,57.357Zm0,12.741a5.9,5.9,0,1,1,5.931-5.9A5.924,5.924,0,0,1,115.683,70.1Z" transform="translate(-106.134 -54.682)" fill={fillColor} />
      <path d="M60.777,0a9.541,9.541,0,0,0-9.549,9.512A12.767,12.767,0,0,0,52.7,15.3a20.209,20.209,0,0,0,3.2,4.5,26.359,26.359,0,0,0,4.632,4,.466.466,0,0,0,.5,0,26.357,26.357,0,0,0,4.632-4,20.211,20.211,0,0,0,3.2-4.5,12.767,12.767,0,0,0,1.469-5.785A9.541,9.541,0,0,0,60.777,0ZM64.99,19.153a26.641,26.641,0,0,1-4.213,3.693,26.638,26.638,0,0,1-4.213-3.693c-2.009-2.185-4.4-5.632-4.4-9.641a8.616,8.616,0,0,1,17.232,0C69.393,13.52,67,16.967,64.99,19.153Z" transform="translate(-51.228)" fill={fillColor} />
      <path d="M186.65,129.751l-1.781-.525-1.049-1.531a.466.466,0,0,0-.769,0L182,129.226l-1.781.525a.466.466,0,0,0-.238.732l1.132,1.471-.051,1.856a.466.466,0,0,0,.622.452l1.749-.622,1.749.622a.466.466,0,0,0,.622-.452l-.051-1.856,1.132-1.471a.466.466,0,0,0-.238-.732Zm-1.735,1.766a.466.466,0,0,0-.1.3l.037,1.341-1.264-.45a.466.466,0,0,0-.313,0l-1.264.45.037-1.341a.466.466,0,0,0-.1-.3l-.818-1.063,1.287-.379a.466.466,0,0,0,.253-.184l.759-1.107.759,1.107a.466.466,0,0,0,.253.184l1.287.379Z" transform="translate(-173.886 -121.547)" fill={fillColor} />
    </svg>

  )
}

export default Location;

