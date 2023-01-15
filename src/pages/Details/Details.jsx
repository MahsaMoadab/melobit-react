import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import MusicIcon from '../../assets/icon/music.svg';
import { useParams } from 'react-router-dom';
import { getSongDetails } from '../../api/MelobitApi';
import { Col, Dropdown, Row } from 'react-bootstrap';
import { setPlayMusic, useMusicDispatch } from '../../context/MusicContext';
import UploadIcon from '../../assets/icon/upload.svg';
import PlayIcon from '../../assets/icon/play.svg';

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

                                <h4>
                                    {data.title}
                                </h4>

                                <h5>
                                    {data.artists[0].fullName}
                                </h5>

                                <p>
                                    <Dropdown>
                                        <Dropdown.Toggle className='play_music_upload' id={`dropdown-button-drop-up`}>
                                            <img src={UploadIcon} alt="" />
                                            {data.downloadCount}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item eventKey="1" href={data.audio.medium.url}>
                                                128
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="2" href={data.audio.high.url}>
                                                320
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </p>
                                <div className='play_now'>
                                    <h5>Play</h5>
                                    <button onClick={()=> setPlayMusic(playMusicDispatch, songId)}>
                                        <img src={PlayIcon} alt="" />
                                    </button>
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
