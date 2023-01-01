import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react'
import { getLatestSliders } from '../../api/MelobitApi';

export default function Slider() {
    const [slider, setSlider] = useState(null);

    useEffect(() => {
        getLatestSliders()
            .then(({ data }) => setSlider(data.results));
    }, []);
    const sliderItems = slider ? slider.map(item => (
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={item.image.slider.url}
                alt="First slide"
            />
            <Carousel.Caption>
                <h5>{item.title}</h5>
            </Carousel.Caption>
        </Carousel.Item>
    )) : null;
    return (
        <div className='slider'>
            <Carousel variant="dark" fade>
                {slider && sliderItems}
            </Carousel>
        </div>
    )
}
