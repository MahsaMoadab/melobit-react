import React from 'react'
import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'
import HomeIcon from '../../assets/icon/home.svg';
import SongSlider from '../../components/SongSlider/SongSlider';
import { Col, Row } from 'react-bootstrap';
import Mood from '../../components/Card/Mood/Mood';
import TopGeners from '../../components/Card/TopGeners/TopGeners';

export default function Home() {
  return (
    <>
      <Header logo={HomeIcon} title={"Home"} />
      <Row xxl={12} className={'align-items-end mt-2'}>
        <Col xl={7}>
          <Slider />
        </Col>
        <Col xl={5}>
          <Mood />
          <TopGeners />
        </Col>
      </Row>
      <Row>
        <Col xl={7} className={'mt-3'}>
          <SongSlider />
        </Col>
        <Col xl={5}>
          {/* <Mood />
          <TopGeners /> */}

        </Col>
      </Row>
      {/* <audio controls >
          <source src="https://dl.melobit.com/mp3s/Aron-Afshar-Khandehato-Ghorboon-128.mp3" />
        </audio> */}

    </>
  )
}
