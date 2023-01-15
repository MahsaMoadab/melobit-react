import React from 'react'
import SearchIcon from '../../assets/icon/search.svg';

export default function SearchInput({ handleChangeParams,setInput,input }) {
  return (
    <div className='search'>
      <input
        type="text"
        placeholder='search...'
        value={input}
        onChange={(e) => setInput(e.target.value)} />
      <img src={SearchIcon} alt="" onClick={handleChangeParams} />
    </div>
  )
}
