import React from 'react';
// import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const options = {
  edit: false,
  color: 'rgba(20,20,20,0.1)',
  activeColor: 'tomato',
  size: window.innerWidth < 600 ? 20 : 25,
  value: 2.5,
  isHalf: true,
};

const disea = (props) => {
  const { photo, name, id, description } = props;

  return (
    <div className="diseaCard">
      {/**<link classname="diseaCard" to={id} / */}
      <img src={photo} alt={name} />
      <span>{id}</span>
      <p>{name}</p>
      <div>
        <ReactStars {...options} /> <span> (256 reviews) </span>
      </div>
      <span>{description}</span>
    </div>
  );
};
export default disea;
