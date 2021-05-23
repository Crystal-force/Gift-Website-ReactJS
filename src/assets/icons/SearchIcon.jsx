import React from 'react'

const SearchIcon = ({ color }) => {
  let fillColor = color || 'currentColor'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 17.333 17.946">
      <path d="M18.051,16.349l-4.272-4.443a7.245,7.245,0,1,0-5.547,2.585,7.17,7.17,0,0,0,4.153-1.312l4.308,4.478a.945.945,0,0,0,1.363-1.311ZM8.231,1.892A5.358,5.358,0,1,1,2.874,7.249,5.358,5.358,0,0,1,8.231,1.892Z" transform="translate(-0.986 -0.001)" fill={fillColor} />
    </svg>

  )
}

export default SearchIcon;

