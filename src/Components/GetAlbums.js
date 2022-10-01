import { useEffect } from "react";
import axios from "axios";

const GetAlbums = ({ search, setAlbum }) => {
  const searchOptions = {
    api_key: process.env.REACT_APP_MUSIC_KEY,
    limit: 10,
    api: "http://ws.audioscrobbler.com/2.0/",
  };

  //Creating my URL
  const URL = `${searchOptions.api}?method=album.search&album=${search}&api_key=${searchOptions.api_key}&limit=10&format=json`;

  //Going to start making my fetch call to retrieve my data

  const albums = async () => {
    try {
      const albumData = await axios.get(URL).then((res) => {
        console.log(res);
        setAlbum(res.data.albummatches.album);
      });
    } catch (e) {
      console.log(e);
    }
  };

  let cancel = false;
  useEffect(() => {
    albums();
  }, [search]);
  return () => (cancel = true);
};

export default GetAlbums;
