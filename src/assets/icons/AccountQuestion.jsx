import React from 'react'

const AccountQuestion = ({ questionColor, color }) => {
  let fillColor = color || 'currentColor'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 27.666 29.896">
      <g transform="translate(-554 -1655)">
        <g >
          <path d="M42.709,19.228a13.769,13.769,0,0,0-5.571-3.4,8.475,8.475,0,1,0-8.422,0A13.852,13.852,0,0,0,19.094,29.01a.886.886,0,0,0,.886.886H45.874a.886.886,0,0,0,.886-.886A13.742,13.742,0,0,0,42.709,19.228Z" transform="translate(534.906 1655)" fill={fillColor} />
          <path d="M260.213,15.827A8.473,8.473,0,0,0,256,0V29.9h12.947a.886.886,0,0,0,.886-.886,13.852,13.852,0,0,0-9.622-13.183Z" transform="translate(311.832 1655)" fill={fillColor} />
          <g transform="translate(562.082 1660.812)">
            <path d="M242.463,197.93a1.651,1.651,0,1,0-1.651-1.651,1.67,1.67,0,0,0,1.651,1.651Z" transform="translate(-237.337 -180.558)" fill={questionColor || '#fff'} />
            <path d="M214.009,78.04a1.651,1.651,0,0,1-1.651-1.651v-2.5a1.651,1.651,0,0,1,1.651-1.651,1.823,1.823,0,1,0-1.823-1.823,1.651,1.651,0,0,1-3.3,0,5.126,5.126,0,1,1,6.777,4.853v1.12A1.651,1.651,0,0,1,214.009,78.04Z" transform="translate(-208.883 -65.29)" fill={questionColor || '#fff'} />
          </g>
        </g>
      </g>
    </svg>

  )
}

export default AccountQuestion;

