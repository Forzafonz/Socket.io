import React, { useReducer, useEffect, useState } from 'react';
import './Playlist.scss'


function Playlist({id, name, rating, thumbnail, setPlaylistId }) {
  return (

    <li className='playlist__item'>
      <img
        className="playlist__image"
        src={thumbnail}
        size
      />
      <div className>
        playlist id: {id}  
      </div>

      <div className>
        playlist name: {name}
      </div>

      <div className>
        playlist rating: {rating}
      </div>

      <button onClick={()=> {
        console.log("playlist Id", id)
        setPlaylistId(id)
        }
        }>SELECT</button>
     
    </li>
    
  )
}

export default Playlist;