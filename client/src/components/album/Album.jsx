import React from 'react'
import './album.css'

const Album = ({ albums }) => {
    return (
        <div className='album-div'>
            {
                albums.map(album => {
                return <div className='album' key={album.id}>
                            <div className='album-desc'>
                                <h2>Title: {album.title}</h2>
                                <h3>Artist: {album.artist}</h3>
                            </div>
                            <img src={album.image} alt={album.title}/>
                        </div>
                })
            }
        </div>
    )
}

export default Album
