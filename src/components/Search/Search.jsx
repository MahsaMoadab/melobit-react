import React from 'react'
import SearchIcon from '../../assets/icon/search.svg';

export default function Search() {
  return (
    <div className='search'>
        <input type="text" placeholder='search...' />
        <img src={SearchIcon} alt="" />
    </div>
  )
}
