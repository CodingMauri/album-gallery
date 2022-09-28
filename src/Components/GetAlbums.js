import { useEffect } from "react";



const GetAlbums = ({ search, setAlbum }) => {
  const searchOptions = {
    api_key:process.env.REACT_APP_MUSIC_API_KEY,
    limit: 10,
    api: "http://ws.audioscrobbler.com/2.0/",
  };

  //Creating my URL
  const URL = `${searchOptions.api}?method=album.search&album=${search}&api_key=${searchOptions.api_key}&limit=10&format=json`;

  //Going to start making my fetch call to retrieve my data

  let cancel = false;

  useEffect(() => {
    if (cancel) return;
    if (!search) return setAlbum([]);

    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setAlbum(res.results.albummatches.album);
      })
      .catch((err) => {
        return err;
      });
  }, [search]);
  return () => (cancel = true);
};

export default GetAlbums;
