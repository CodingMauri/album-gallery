import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import "../CSS/albumInfo.css";
import AlbumProfile from "./AlbumProfile";

export default function AlbumPage({ search }) {
  const { artistName } = useParams();
  const { albumName } = useParams();
  console.log(artistName);
  //Creating a piece of state to hold my album info data
  const [albumInfo, setAlbumInfo] = useState([]);
  console.log(albumInfo);

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

  return (
    <div className = "album-profile-cntnr">

   <AlbumProfile info ={albumInfo}/>
    </div>
  )
}
