import { useState, useEffect } from 'react'
import './App.css'
import Album from './components/album/Album'
import Search from './components/search/Search'

function App() {
  const [albums, setAlbums] = useState([])
  const [album, setAlbum] = useState([])
  const [is_search, setIs_search] = useState(false)

  useEffect(() => {
    const getAlbums = async () => {
      const res = await fetchAlbums()
      setAlbums(res)
    }
    
    getAlbums()
  }, [])

  // Get all albums
  const fetchAlbums = async () => {
    const res = await fetch('/api/albums')
    const data = await res.json()

    return data
  }

  // Get album by search ID
  const get_album = async id => {
    const res = await fetch(`/api/albums/${id}`)
    const data = await res.json()

    setAlbum(data)
  }
 
  return (
    <div className='App'>
      <Search onSearch={() => setIs_search(true)} search={get_album}/>
      <Album albums={!is_search ? albums : album}/> 
    </div>
  )
}

export default App
