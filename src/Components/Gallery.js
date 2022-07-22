import React from 'react'
import {Card} from 'react-bootstrap'
import SearchAlbums from './SearchAlbums'
import '../gallery.css'
import {Router,Route} from 'react-router-dom'


export default function Gallery({track}) {
  return (
    <div>
   

    <Card className = "gallery" >
      
        <a href = {track.url}><Card.Img  src = {track.image[2]["#text"]} key = {track.url} className = 'album-art'></Card.Img></a>

        
        <Card.Title>{track.name}</Card.Title>
        <Card.Text>{track.artist}
    
        </Card.Text>

    </Card>

    </div>


 
  )
}
