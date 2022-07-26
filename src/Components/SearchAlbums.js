import React from "react";

import { Container, Form } from "react-bootstrap";
import "../CSS/index.css";
import "../CSS/gallery.css";
import Gallery from "./Gallery";

export default function SearchAlbums({
  handleChange,
  album,


  
}) {
  return (
    <Container>
      <h1 className = "app-name"> AlbumZ </h1>
      <Form.Control
        type="text"
        placeholder="Search your some of your favorite albums!"
        onChange={handleChange}
        style={{ margin: "0px 0px 30px 0px" }}
      />{" "}
      <div className="albm-container">
         {album ?
        album.map((values) => (
          // Values from user search call is named track
          <Gallery key={values.url} track={values}  />
        )): <div>Loading...</div>}
      </div>
    </Container>
  );
}
