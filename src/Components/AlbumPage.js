import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../CSS/albumInfo.css";

export default function AlbumPage({ search }) {
  //Creating a piece of state to hold my album info data
  const [albumInfo, setAlbumInfo] = useState([]);

  console.log(albumInfo);
  //Creating a constant variable to hold my api key to make it easier for implementation
  const musicKey = process.env.REACT_APP_MUSIC_API_KEY;

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
            src={albumInfo.image}
            key = {albumInfo.url}
            alt="album-pic"
          />
          <div className="album-plays">
            <h2>Playcount: {albumInfo.playcount}</h2>
            <h2>Listeners: {albumInfo.listeners}</h2>
          </div>
        </div>
        <div className="published">
          <p>Published:{albumInfo.wiki.published}</p>
        </div>

        <article className="summmary-container">
          <h3>Summary</h3>
          <p>
            {albumInfo.wiki.summary}
          </p>
        </article>
        <article className="content-container">
          <h3>Content</h3>
          <p>
            Amet dolore ea exercitation mollit esse sunt. Qui cillum
            exercitation velit aliqua fugiat esse ut est. Magna ad occaecat
            proident ad culpa quis ex nulla duis et aute eiusmod mollit.Ex
            aliquip nostrud exercitation culpa dolore cillum adipisicing
            consectetur consectetur elit duis cupidatat excepteur culpa. Mollit
            qui ullamco sunt laboris. Ut ex ullamco eiusmod ad ex dolor minim
            culpa ipsum adipisicing in. Est nulla excepteur ad tempor dolor quis
            magna irure duis est ullamco mollit. Mollit velit excepteur nulla
            exercitation duis Lorem consequat consectetur. Mollit velit ad elit
            fugiat sunt adipisicing consequat do id in aute enim ut cillum.
          </p>
        </article>
      </section>
    </div>
  );
}
