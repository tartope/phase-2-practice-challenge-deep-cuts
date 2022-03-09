import React from 'react'

function AddTrackForm({ handleAddNewTrack }) {

  function handleFormSubmit(event){
    event.preventDefault();
    const image = event.target['image'].value
    const title = event.target['title'].value
    const artist = event.target['artist'].value
    const bpm = event.target['bpm'].value

    const newTrack = {
      title: title,
      artist: artist,
      BPM: bpm,
      image: image,
    }

    handleAddNewTrack(newTrack)
    event.target.reset()
  }

  return (
      <form onSubmit={handleFormSubmit}>
        <div>
          <input type="text" name="image" placeholder="Image URL"/>
          <input type="text" name="title" placeholder="title" />
          <input type="text" name="artist" placeholder="Artist" />
          <input type="number" name="bpm" placeholder="BPM" step="1.00" />
       </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm

//removed 'value="" ' from lines 26-29 (this was not allowing me to grab value dynamically, instead creating a default); added 'id's'.