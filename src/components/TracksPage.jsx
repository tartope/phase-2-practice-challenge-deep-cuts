import React, { useEffect, useState } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

const tracksAPI = 'http://localhost:8001/tracks'

function TracksPage() {

  const [tracks, setTracks] = useState([]);
  const [searchTracks, setSearchTracks] = useState('');
  
  useEffect(() =>{
    fetch(tracksAPI)
    .then(response => response.json())
    .then(tracksData =>{
      // console.log(tracksData)
      setTracks(tracksData)
    })
  }, [])

  function handleAddNewTrack(track){
    fetch(tracksAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(track),
    })
    .then(response => response.json())
    .then(json =>{
      setTracks([...tracks, json])
    })
  }

  function handleSearchTracks(userInput){
    setSearchTracks(userInput)
  }

  const filteredTracks = tracks.filter(track =>{
    // console.log(track)
    return track.title.toUpperCase().includes(searchTracks.toUpperCase());
  })

  return (
    <div>
      <Search   handleSearchTracks={handleSearchTracks} />
      <AddTrackForm handleAddNewTrack={handleAddNewTrack} />
      <TracksList tracks={filteredTracks} />
    </div>
  )
}

export default TracksPage