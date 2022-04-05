import React from "react";
import { Card } from "react-bootstrap";
import "./Serv.css"

const Serv = (props) => {
    const {img, service_name, description} = props.service
  return (
    <Card className="mx-auto" style={{ width: "18rem" }}>
      <Card.Img className="card_img" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{service_name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Serv;
