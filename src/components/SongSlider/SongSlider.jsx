import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SongItem from './SongItem';

function SongSlider({ latestSong, daySong, weekSong, handlePlayMusic }) {

  const latestItem = latestSong.length !== 0 ? latestSong.map((item, index) => (
    <SwiperSlide key={index}>
      <SongItem
        id={item.id}
        url={item.image.cover.url}
        title={item.title}
        singer={item.artists[0].fullName}
        handlePlayMusic={handlePlayMusic}
      />
    </SwiperSlide>
  )) : null;
  const dayItem = daySong.length !== 0 ? daySong.map((item, index) => (
    <SwiperSlide key={index}>
      <SongItem
        id={item.id}
        url={item.image.cover.url}
        title={item.title}
        singer={item.artists[0].fullName}
        handlePlayMusic={handlePlayMusic} />
    </SwiperSlide>
  )) : null;
  const weekItem = weekSong.length !== 0 ? weekSong.map((item, index) => (
    <SwiperSlide key={index}>
      <SongItem
        id={item.id}
        url={item.image.cover.url}
        title={item.title}
        singer={item.artists[0].fullName}
        handlePlayMusic={handlePlayMusic} />
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
    </div>
  );
}

export default SongSlider;