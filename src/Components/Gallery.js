import React from 'react'
import {Card} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "../CSS/gallery.css"
import "../"
import { motion } from 'framer-motion'
export default function Gallery({track}) {

  const URL3 = `/album/${track.name}/${track.artist}`
  return (
  
  

    

    <Card className = "gallery" >
    
      
        <NavLink to ={URL3}><Card.Img  src = {track.image[2]["#text"]} key = {track.url} className = 'album-art'></Card.Img></NavLink>
        <Card.Title className = "album-title">{track.name}</Card.Title>
        <Card.Text className = "album-artist">By: {track.artist}</Card.Text>

    </Card>

      
  

 
  )
}
