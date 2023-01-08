// import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react'
import { getLatestSliders } from '../../api/MelobitApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import PlayIcon from '../../assets/icon/play.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PlaySong from '../Card/PlaySong/PlaySong';

export default function Slider() {
    const [slider, setSlider] = useState(null);
    const [playMusic, setPlayMusic] = useState(false);
    const [run, setRun] = useState()

    useEffect(() => {
        getLatestSliders()
            .then(({ data }) => setSlider(data.results));
    }, []);

    function handlePlayMusic(play) {
        setPlayMusic(true);
        setRun(play)
        console.log(play);
    }

    const sliderItems = slider ? slider.map((item, index) => (
        <SwiperSlide key={index}>
            <div className='slider-item'>
                <img
                    className="d-block w-100"
                    src={item.image.slider.url}
                    alt="First slide"
                />
                <div className='slider-item_play'>
                    <h5>Listen</h5>
                    <button onClick={() => handlePlayMusic(item.id)}>
                        <img src={PlayIcon} alt="" />
                    </button>
                </div>
            </div>
        </SwiperSlide>
    )) : null;

    return (
        <>
            <div className='slider'>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={true}
                >
                    {slider && sliderItems}
                </Swiper>
            </div>
            {
                playMusic && <PlaySong musicId={run} />
            }
        </>

    )
}
