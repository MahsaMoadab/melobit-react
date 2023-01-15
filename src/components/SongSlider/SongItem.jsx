import React, { useEffect, useState } from 'react'
import PlayIcon from '../../assets/icon/play.svg';
import MusicIcon from '../../assets/icon/music.svg';
import { Link } from 'react-router-dom';

export default function SongItem({ url, title, singer, handlePlayMusic, id }) {
    return (<>

        <div className="song_item">
            <div className='item_overlay'></div>
            <Link to={`player/details/${id}`}>
                <img src={url} alt="" />
            </Link>


            <div className="item_details fadeIn-bottom">
                <div className='item_details_p'>
                    <p className="song_item_title">
                        <img src={MusicIcon} alt="" />
                        {title}
                    </p>
                    <p className="song_item_singer">
                        {singer}
                    </p>
                </div>
                <button onClick={handlePlayMusic} id={id}>
                    <img src={PlayIcon} alt="" />
                </button>
            </div>

        </div>
    </>
    )
}
