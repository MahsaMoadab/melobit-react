import { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { getLatestSong, getTopDaySong, getTopWeekSong } from '../../api/MelobitApi';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SongItem from './SongItem';
import PlaySong from '../Card/PlaySong/PlaySong';

function SongSlider() {
  const [latestSong, setLatestSong] = useState([]);
  const [daySong, setDaySong] = useState([]);
  const [weekSong, setWeekSong] = useState([]);
  const [playMusic, setPlayMusic] = useState(false);
  const [run, setRun] = useState()


  useEffect(() => {
    getLatestSong(0, 7)
      .then(({ data }) => setLatestSong(data.results));
    getTopDaySong(0, 14)
      .then(({ data }) => setDaySong(data.results));
    getTopWeekSong(0, 30)
      .then(({ data }) => setWeekSong(data.results));
  }, []);

  function handlePlayMusic(play) {
    setPlayMusic(true);
    setRun(play)
  }

  const latestItem = latestSong.length !== 0 ? latestSong.map((item, index) => (
    <SwiperSlide key={index}>
      <SongItem
        url={item.image.cover.url}
        title={item.title}
        singer={item.artists[0].fullName}
        handlePlayMusic={()=>handlePlayMusic(item.id)}
      />
    </SwiperSlide>
  )) : null;
  const dayItem = daySong.length !== 0 ? daySong.map((item, index) => (
    <SwiperSlide key={index}>
      <SongItem
        url={item.image.cover.url}
        title={item.title}
        singer={item.artists[0].fullName}
        handlePlayMusic={()=>handlePlayMusic(item.id)} />
    </SwiperSlide>
  )) : null;
  const weekItem = weekSong.length !== 0 ? weekSong.map((item, index) => (
    <SwiperSlide key={index}>
      <SongItem
        url={item.image.cover.url}
        title={item.title}
        singer={item.artists[0].fullName}
        handlePlayMusic={()=>handlePlayMusic(item.id)} />
    </SwiperSlide>
  )) : null;
  return (
    <div className="song_tab">
      <Tabs
        defaultActiveKey="new"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="new" title="New Songs">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
          >
            {latestItem}
          </Swiper>
        </Tab>
        <Tab eventKey="today" title="Today Trending ">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
          >
            {dayItem}
          </Swiper>
        </Tab>
        <Tab eventKey="week" title="Week Trending">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
          >
            {weekItem}
          </Swiper>
        </Tab>
      </Tabs>
      {
        playMusic && <PlaySong musicId={run} />
      }
    </div>


  );
}

export default SongSlider;