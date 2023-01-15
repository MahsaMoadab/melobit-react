import React from 'react'
import { Link } from 'react-router-dom'
import ArrowIcon from '../../../assets/icon/arrow_right.svg'

export default function ArtistItem({ id, name, follower, profile }) {
    return (
        <div className='top_artist_box_item'>
            <div className='d-flex'>
                <img src={profile} alt="" />
                <div className='top_artist_box_item_title'>
                    <p>{name}</p>
                    <p>{follower}</p>
                </div>

            </div>
            {/* <Link id={id}>
                See Albums
                <img src={ArrowIcon} alt="" />
            </Link> */}
        </div>
    )
}
