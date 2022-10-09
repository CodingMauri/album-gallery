import React from "react";

export default function AlbumProfile({ info }) {
  return (
    <div className="album-container">
      <div className="album-title">
        <h1>{info.title ? info.title }</h1>
        <h3 className="album-artist" style={{ color: "white" }}>
          By:{info.artist}
        </h3>
      </div>
      <section className="album-info">
        <div className="album-img-container">
          <img src="" key={info.url} alt="album-pic" />
          <div className="album-plays">
            <h2>Playcount: {info.playcount}</h2>
            <h2>Listeners: {info.listeners} </h2>
          </div>
        </div>
        <div className="published">
            <p></p>
        </div>

        <article className="summmary-container">
          <h3>Summary</h3>
          <p> </p>
        </article>
        <article className="content-container">
          <h3>Content</h3>
          <p></p>
        </article>
      </section>
    </div>
  );
}
