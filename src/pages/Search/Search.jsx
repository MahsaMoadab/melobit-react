import React, { useState } from 'react'
import Header from '../../components/Header/Header';
import SearchIcon from '../../assets/icon/search.svg';
import { getSearchArtistOrSong } from '../../api/MelobitApi';
import SongItem from '../../components/SongSlider/SongItem';
import { setPlayMusic, useMusicDispatch } from '../../context/MusicContext';
import { Col, Row } from 'react-bootstrap';
import HedphoneIcon from '../../assets/icon/hedphone.svg';

export default function Search() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false)
  const playMusicDispatch = useMusicDispatch();

  const handleChangeParams = (query) => {
    getSearchArtistOrSong(query)
      .then(({ data }) => {
        console.log((data.results).map(item => item.song));
        setData(data.results);
        setLoad(true);

      });
    console.log(data.map(item => item));
  };

  const list = data.length !== 0 ? data.map((item, index) => (
    item.song !== undefined ?
      <Col xxl={3} xl={3} lg={4} md={6} sm={12} key={index}>
        <SongItem
          id={item.song.id}
          url={item.song.image.cover.url}
          title={item.song.title}
          singer={item.song.artists[0].fullName}
          handlePlayMusic={() => setPlayMusic(playMusicDispatch, item.song.id)} /></Col>
      : ''
  )) : null;
  return (
    <>
      <Header logo={SearchIcon} title={"Search"} />
      <div className='search'>
        <input
          type="text"
          placeholder='search...'
          value={query}
          onChange={(e) => setQuery(e.target.value)} />
        <img src={SearchIcon} alt="" onClick={() => handleChangeParams(query)} />
      </div>

      {
        !load && <img className='img_no_search' src={HedphoneIcon} alt="" />
      }
      <Row className='search_list'>
        {
          load && list
        }
      </Row>

    </>)
}
