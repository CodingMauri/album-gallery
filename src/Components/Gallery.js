import React from 'react'
import {Card} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "../CSS/gallery.css"
import "../"

export default function Gallery({track}) {
  return (
    <div>
   

    <Card className = "gallery" >
      
        <NavLink to = "/album"><Card.Img  src = {track.image[2]["#text"]} key = {track.url} className = 'album-art'></Card.Img></NavLink>
        
        <Card.Title>{track.name}</Card.Title>
        <Card.Text>{track.artist}
    
        </Card.Text>

    </Card>

    </div>


 
  )
}
