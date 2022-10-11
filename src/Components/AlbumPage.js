import React from "react";
import axios from "axios"
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import "../CSS/albumInfo.css";
import { HiOutlineHome } from "react-icons/hi";
import { motion } from "framer-motion";


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
  console.log(albumInfo.images);

  //Going to create Variant for animations

  const bubble ={
    hidden :{
      opacity:0,
      x: '-100vw',
    },
    visible:{
      opacity:1,
        x:0,
      transition :{
        type:"spring",
        x:{duration:1},
        default:{ease:"linear"}
      }
    }
  }
  return (
    <Container className="album-container">
      <motion.div
      variants={bubble}
      initial = "hidden"
      animate = "visible"
      >
      <motion.div
        className="home-btn"
      
        whileHover={{ scale: 1.2, originX: 0 }}
        whileTap={{ scale: 1.2, originX: 0 }}
        >
        <NavLink to="/">
          <HiOutlineHome />
        </NavLink>
      </motion.div>
      <div className="album-title">
        <h1>{albumInfo.name}</h1>
        <h3>By: {albumInfo.artist}</h3>
      </div>
      <div className="album-img-cntnr">
        {albumInfo.image ? (
          <img
          className="album-img"
          src={albumInfo.image[3]["#text"]}
          alt="pic"
          />
          ) : (
            <div>Loading...</div>
            )}
        <div className="album-listeners">
          <p>Playcount: {albumInfo.playcount}</p>
          <p>Listeners: {albumInfo.listeners}</p>
        </div>
      </div>
      {albumInfo.wiki ? (
        <div className="published">Published : {albumInfo.wiki.published}</div>
        ) : null}
      <section className="wiki-cntnr">
        <div className="summary">
          <h3>Summary</h3>
          {albumInfo.wiki ? (
            <div className="album-summary">{albumInfo.wiki.summary}</div>
            ) : (
              <div>Not Found</div>
              )}
          {/* {albumInfo.wiki.summary} */}
        </div>
        <div className="content">
          <h3>Content</h3>
          {albumInfo.wiki ? (
            <div className="album-content">{albumInfo.wiki.content}</div>
            ) : null}
        </div>
      </section>
            </motion.div>
    </Container>
  );
}
