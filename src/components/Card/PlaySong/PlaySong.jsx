import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect, useState } from 'react'
import { getSongDetails } from '../../../api/MelobitApi'
import UploadIcon from '../../../assets/icon/upload.svg';
import PlayIcon from '../../../assets/icon/play.svg';
import PauseIcon from '../../../assets/icon/pause.svg';
import NextIcon from '../../../assets/icon/next.svg';
import PrevIcon from '../../../assets/icon/prev.svg';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
export default function PlaySong({ musicId }) {

  const [play, setPlay] = useState();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    getSongDetails(musicId)
      .then(({ data }) => {
        setPlay(data);
        setLoad(true);
      });

    return () => {
      setLoad(false);
    }
  }, [musicId]);


  const playButton = React.createElement('img', { src: PlayIcon });
  const pauseButton = React.createElement('img', { src: PauseIcon });
  const nextButton = React.createElement('img', { src: NextIcon });
  const prevButton = React.createElement('img', { src: PrevIcon });


  return (
    <>

      {
        load &&
        <div className='play_music'>
          {/* <Player music={play.image.cover.url} /> */}
          <img className='play_music_img' src={play.image.cover.url} alt="" />
          <div>
            <p className='play_music_title'>
              {play.title}
            </p>
            <p className='play_music_singer'>
              {play.artists[0].fullName}
            </p>
          </div>
          <Dropdown>
            <Dropdown.Toggle className='play_music_upload' id={`dropdown-button-drop-up`}>
              <img src={UploadIcon} alt="" />
              {play.downloadCount}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1" href={play.audio.medium.url}>
                128
              </Dropdown.Item>
              <Dropdown.Item eventKey="2" href={play.audio.high.url}>
                320
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <AudioPlayer
            autoPlay
            src={play.audio.medium.url}
            onPlay={e => console.log("onPlay")}
            customIcons={{
              play: playButton,
              pause: pauseButton,
              forward: nextButton,
              rewind: prevButton,
              loop: false,
            }}
            className='music_player'
            customAdditionalControls={[]}
            customVolumeControls={[]}
            layout="horizontal-reverse"
          />

        </div>
      }
    </>
  )
}
