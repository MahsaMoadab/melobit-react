import React, { useState, useEffect } from 'react'
import "../../assets/sass/index.scss";
import { useMusicState } from '../../context/MusicContext';
import Sidebar from '../Sidebar/Sidebar';
import PlaySong from '../Card/PlaySong/PlaySong'

export default function Layout({ children }) {

  const { musicId } = useMusicState();
  const [playMusic, setPlayMusic] = useState(false);

  useEffect(() => {
    setPlayMusic(true);
  }, [musicId])



  return (
    <>
      <Sidebar />
      <div className='main'>{children}</div>
      {
        playMusic && <PlaySong musicId={musicId} />
      }
    </>
  )
}
