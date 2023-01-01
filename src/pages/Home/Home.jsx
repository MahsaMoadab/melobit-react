import React from 'react'
import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'
import HomeIcon from '../../assets/icon/home.svg';

export default function Home() {
  return (
    <>
        <Header logo={HomeIcon} title={"Home"}/>
        <Slider />
    </>
  )
}
