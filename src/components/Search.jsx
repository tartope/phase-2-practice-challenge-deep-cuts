import React from 'react'

function Search({ handleSearchTracks }) {

  function handleSearchChange(event) {
    event.preventDefault();
    const searchText = event.target.value
    handleSearchTracks(searchText)
  }

  return (
    <div className="search">
        <input
        type="text"
        placeholder="Search your Tracks"
        onChange={handleSearchChange}
        />
        <i className="">🔎</i>

  </div>
  )
}

export default Search