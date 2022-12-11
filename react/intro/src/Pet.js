import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, images, location, id }) => {
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="info">
        <h1>{name}</h1>
        <h2>{animal}</h2>
        <h2>{breed}</h2>
        <h2>{location}</h2>
        <h2>{id}</h2>
      </div>
    </Link>
  );
};

export default Pet;
