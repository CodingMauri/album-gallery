import React from "react";

import { Container, Form, Card } from "react-bootstrap";
import "../index.css";

export default function SearchAlbums({
  handleChange,
  album,
  search,
  handleSubmit,
}) {


   
  return (
    <Container>
      <h1> Album Gallery</h1>
      <Form.Control
        type="text"
        placeholder="search"
        value={search}
        onChange={handleChange}
        onSubmit={handleSubmit}
        style={{ margin: "0px 0px 30px 0px" }}
      />

      {album.map((values) => (
        <Card className="box">
          <Card.Img
            variant="top"
            src="https://lastfm.freetls.fastly.net/i/u/300x300/fbb55dcc63f0a4369e29605c4ab5ddc0.png"
          />
          <Card.Title>{values.name}</Card.Title>
          <Card.Text>{values.url}</Card.Text>
        </Card>
      ))}
    </Container>
    //         <Card.Img src = {value.image.text.large} />
    //         <Card.Body>
    //             <Card.Title>{value.name}</Card.Title>
    //             <Card.Text>something</Card.Text>
    //         </Card.Body>
    //     </Card
  );
}
