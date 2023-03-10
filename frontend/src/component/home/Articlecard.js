import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const Articlecard = (props) => {
  let { imgSrc, title, description } = props.data;
  return (
    <Card className="p-0 overflow-hidden  h-100 shadow ">
      <div className="overflow-hidden rounded p-0 shadow bg-light">
        <Card.Img variant="top" src={imgSrc} />
      </div>
      <Card.Body className="text-center">
        <Card.Title className="display-6 ">{description}</Card.Title>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Button className="w-100 rounded-0" variant=" success" color="#1E90FF">
        Read More
      </Button>
    </Card>
  );
};

export default Articlecard;
