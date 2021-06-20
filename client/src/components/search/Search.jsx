import { useState } from 'react'
import React from 'react'
import './search.css'

const Search = ({ onSearch, search }) => {
  const [album_id, setAlbumID] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    if(!album_id) {
        alert('Please enter album ID')
        return
    }

    search(album_id)
    setAlbumID('')
  }
    
    return (
        <div className='search-bar'>
            <form method="get" onSubmit={onSubmit}>
                <input type="text" value={album_id} onChange={e => setAlbumID(e.target.value)}/>
                <input type="submit" value="Search" onClick={onSearch}/>
            </form>
        </div>
    )
}

export default Search
