import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import MusicIcon from '../../assets/icon/music.svg';
import { useParams } from 'react-router-dom';
import { getSongDetails } from '../../api/MelobitApi';
import { Col, Row } from 'react-bootstrap';
import { setPlayMusic, useMusicDispatch } from '../../context/MusicContext';
import PlayIcon from '../../assets/icon/play.svg';
import headphoneIcon from '../../assets/icon/headphone.svg';
import microphoneIcon from '../../assets/icon/microphone.svg';
import dataIcon from '../../assets/icon/date.svg';
import moment from 'jalali-moment';

export default function Details() {
    let { songId } = useParams();
    const [data, setData] = useState([]);
    const playMusicDispatch = useMusicDispatch();

    useEffect(() => {
        getSongDetails(songId)
            .then(({ data }) => setData(data))
    }, [songId, data])


    return (
        <>
            {
                data.length !== 0 &&
                <>
                    <Header logo={MusicIcon} title={data.title} />
                    <div className="details_container">
                        <Row>
                            <Col xxl={4}>
                                <div className="details_container_image">
                                    <img onClick={() => setPlayMusic(playMusicDispatch, songId)} src={data.image.cover.url} alt="" />
                                </div>
                            </Col>
                            <Col xxl={4} className={'mt-5'}>
                                <p className='feature_p w-100 feature_p_one'>
                                    <img src={microphoneIcon} alt="" />
                                    {data.artists[0].fullName}
                                </p>
                                <div className='feature'>

                                    <p className='feature_p'>
                                        <img src={dataIcon} alt="" />
                                        {moment(data.releaseDate, 'YYYY-M-D')
                                            .locale('fa')
                                            .format('YYYY/M/D')}
                                    </p>
                                    <p className='feature_p'>
                                        <img src={headphoneIcon} alt="" />
                                        {data.downloadCount}
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">

                                    <div className='play_now'>
                                        <h5>Play</h5>
                                        <button onClick={() => setPlayMusic(playMusicDispatch, songId)}>
                                            <img src={PlayIcon} alt="" />
                                        </button>
                                    </div>
                                </div>

                            </Col>
                            <Col xxl={4}>
                                <p className='poem'>
                                    {data.lyrics}
                                </p>
                            </Col>
                        </Row>
                    </div>
                </>
            }


        </>
    )
}
