import React from 'react'
import Search from '../Search/Search'

export default function Header({ logo, title }) {
    return (
        <div className='header'>
            <div className="header_title">
                <img src={logo} alt="" />
                <h4>
                    {title}
                </h4>
            </div>
            <Search />
        </div>
    )
}
