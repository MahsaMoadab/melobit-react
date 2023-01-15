import React from 'react'

export default function Header({ logo, title }) {
    return (
        <div className='header'>
            <div className="header_title">
                <img src={logo} alt="" />
                <h4>
                    {title}
                </h4>
            </div>
        </div>
    )
}
