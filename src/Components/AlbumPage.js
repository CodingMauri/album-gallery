import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../CSS/albumInfo.css";

export default function AlbumPage({ search }) {
  //Creating a piece of state to hold my album info data
  const [albumInfo, setAlbumInfo] = useState([]);

  console.log(albumInfo);
  //Creating a constant variable to hold my api key to make it easier for implementation
  const musicKey = process.env.REACT_APP_MUSIC_KEY;

  const URL2 = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${musicKey}&artist=Cher&album=Believe&format=json`;
  const getAlbumInfo = () => {
    axios
      .get(URL2)
      .then((res) => setAlbumInfo(res.data.album))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAlbumInfo();
  }, []);

  return (
    <div className="album-container">
      <div className="album-title">
        <h1>{albumInfo.name}</h1>
        <h3 style = {{color:"white"}}> By: {albumInfo.artist}</h3>
      </div>
      <section className="album-info">
        <div className="album-img-container">
          <img
            src= ""
            key = {albumInfo.url}
            alt="album-pic"
          />
          <div className="album-plays">
            <h2>Playcount: {albumInfo.playcount}</h2>
            <h2>Listeners: {albumInfo.listeners } </h2>
          </div>
        </div>
        <div className="published">
        
        </div>

        <article className="summmary-container">
          <h3>Summary</h3>
          <p>
            {/* {albumInfo.wiki.summary} */}
          </p>
        </article>
        <article className="content-container">
          <h3>Content</h3>
          <p>
            {/* {albumInfo.wiki.content} */}
          </p>
        </article>
      </section>
    </div>
  );
}
