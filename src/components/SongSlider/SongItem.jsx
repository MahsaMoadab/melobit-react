import React, { useEffect, useState } from 'react'
import { ColorExtractor } from 'react-color-extractor';
// import { ColorExtractor } from 'react-color-extractor';
import PlayIcon from '../../assets/icon/play.svg';
import MusicIcon from '../../assets/icon/music.svg';
import PlaySong from '../Card/PlaySong/PlaySong';

export default function SongItem({ url, title, singer, handlePlayMusic }) {
    const [color, setColor] = useState();


    const [load, setLoad] = useState(false);
    useEffect(() => {
        setLoad(true);
    }, [color]);

    // function handlePlayMusic(play) {
    //     return play;
    // }

    return (<>

        <div className="song_item">
            <ColorExtractor getColors={colors => setColor(colors)}>
                <img className='d-none' src={url} alt="..." />
            </ColorExtractor>
            {/* {console.log(color)} */}
            <div className='item_overlay'></div>
            <img src={url} alt="" />
            {
                load &&
                <>
                    <div className="item_details fadeIn-bottom" style={{ background: ` linear-gradient(263.22deg, #000 -13.83%, #000000 96.59%)` }}>
                        <div className='item_details_p'>
                            <p className="song_item_title">
                                <img src={MusicIcon} alt="" />
                                {title}
                            </p>
                            <p className="song_item_singer">
                                {singer}
                            </p>
                        </div>
                        <button onClick={handlePlayMusic}>
                            <img src={PlayIcon} alt="" />
                        </button>
                    </div>
                </>
            }
        </div>
    </>
    )
}
