import React from 'react'
import "../../assets/sass/index.scss";
import Sidebar from '../Sidebar/Sidebar';

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <div className='main'>{children}</div>
    </>
  )
}
