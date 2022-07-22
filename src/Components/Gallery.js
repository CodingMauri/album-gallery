import React from 'react'
import {Card} from 'react-bootstrap'
import SearchAlbums from './SearchAlbums'
import '../gallery.css'
import {Router,Route} from 'react-router-dom'


export default function Gallery({images}) {
  return (

    <Card className = "gallery" >
        
        <Card.Img className = 'album-art' src = "https://lastfm.freetls.fastly.net/i/u/174s/190429befa66419db3510a86774006cb.png" />
        <Card.Title>{images.name}</Card.Title>
        <Card.Text>{images.artist}
    
        </Card.Text>
    </Card>



 
  )
}
