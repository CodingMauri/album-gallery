import React from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import "../CSS/albumInfo.css";


export default function AlbumPage() {
  const { artistName } = useParams();
  const { albumName } = useParams();
  
  //Creating a piece of state to hold my album info data
  const [albumInfo, setAlbumInfo] = useState([]);
  

  //Creating a constant variable to hold my api key to make it easier for implementation
  const musicKey = process.env.REACT_APP_MUSIC_KEY;

  const URL2 = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${musicKey}&artist=${artistName}&album=${albumName}&format=json`;
  const getAlbumInfo = () => {
    axios
      .get(URL2)

      .then((res) => setAlbumInfo(res.data.album))

      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAlbumInfo();
  }, []);
  console.log(albumInfo.images)
  return (
    <Container className = "album-container">
    <div className = "album-title">
      <h1>{albumInfo.name}</h1>
      <h3>By: {albumInfo.artist}</h3>
    </div>
    <div className = "albu-img-cntnr">
      {albumInfo.image ? <img className = "album-img" src = {albumInfo.image[3]["#text"]} alt = "pic" /> : (<div>Loading...</div>)}  
    </div>
    {albumInfo.wiki ? <div className = "published">{albumInfo.wiki.published}</div>: null}
    <div className = "album-listeners">
      <h3>Playcount: {albumInfo.playcount}</h3>
      <h3>Listeners: {albumInfo.listeners}</h3>
    </div>
    <section className = "wiki-cntnr">
      <div className = "summary">
        <h3>Summary</h3>
        {albumInfo.wiki ? 
        <div className ="album-summary">
          {albumInfo.wiki.summary}
          </div>: (<div>loading...</div>)}
        {/* {albumInfo.wiki.summary} */}
      </div>
      <div className = "content">
        <h3>Content</h3>
        {albumInfo.wiki ? 
        <div className = "album-content">{albumInfo.wiki.content}</div> : null }
      </div>
    </section>

    
   </Container>
  )
}
