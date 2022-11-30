import React from "react";

const CharacterCard = ({
  name,
  url,
  image,
  status,
  location,
  origin,
  species,
  key,
}) => {
  return (
    <div className="card" key={key}>
      <img src={image} className="" alt={name} />
      <div className="carddetails">
        <p className="cardname">{name}</p>
        <p>
          <i className={`fa fa-circle ${status.toLowerCase()}`}></i>
          {status}-{species}
        </p>
        <p className="cardlastlocation">
          Last known location : <br />
          <span>{location}</span>
        </p>
        <p className="cardseen">
          First seen in : <br />
          <span>{origin}</span>
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
