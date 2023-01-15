import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'
import HomeIcon from '../../assets/icon/home.svg';
import SongSlider from '../../components/SongSlider/SongSlider';
import { Col, Row } from 'react-bootstrap';
import Mood from '../../components/Card/Mood/Mood';
import { getLatestSliders, getLatestSong, getTopDaySong, getTopWeekSong, getTrendingArtist } from '../../api/MelobitApi';
import TopArtists from '../../components/Card/TopArtists/TopArtists';
import { useMusicDispatch, setPlayMusic } from '../../context/MusicContext';

export default function Home() {
  const [latestSong, setLatestSong] = useState([]);
  const [daySong, setDaySong] = useState([]);
  const [weekSong, setWeekSong] = useState([]);
  const [artists, setArtists] = useState([]);

  const [slider, setSlider] = useState(null);
  const playMusicDispatch = useMusicDispatch();

  useEffect(() => {
    getLatestSliders()
      .then(({ data }) => setSlider(data.results));
    getLatestSong(0, 7)
      .then(({ data }) => setLatestSong(data.results));
    getTopDaySong(0, 14)
      .then(({ data }) => setDaySong(data.results));
    getTopWeekSong(0, 30)
      .then(({ data }) => setWeekSong(data.results));
    getTrendingArtist(0, 10)
      .then(({ data }) => setArtists(data.results))
  }, []);

  return (
    <>
      <Header logo={HomeIcon} title={"Home"} />
      <Row xxl={12}>
        <Col xl={7}>
          <Slider slider={slider} handlePlayMusic={(e) => setPlayMusic(playMusicDispatch, e.target.id)} />
          <SongSlider
            daySong={daySong}
            latestSong={latestSong}
            weekSong={weekSong}
            handlePlayMusic={(e) => setPlayMusic(playMusicDispatch, e.target.id)} />
        </Col>
        <Col xl={5}>
          <Mood />
          <TopArtists artists={artists} />
        </Col>
      </Row>
    </>
  )
}
