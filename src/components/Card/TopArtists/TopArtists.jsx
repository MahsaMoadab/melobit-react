import React from 'react'
import ArtistItem from './ArtistItem';

export default function TopArtists({ artists }) {
    const artistsItem = artists.length !== 0 ? artists.map((item, index) => (
        <ArtistItem 
            follower={item.sumSongsDownloadsCount}
            name={item.fullName}
            key={index}
            profile={item.image.cover.url}
            id={item.id}
        />
    )) : null;
    return (
        <div className='top_artist'>
            <h5>
                Top Artists
            </h5>
            <div className="top_artist_box">
                {artistsItem}
            </div>
        </div>
    )
}
