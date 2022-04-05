import React from "react";
import { Link } from "react-router-dom";

const Links = (props) => {
  const { name, link } = props.route;
  return (
    <div>
      <li className='mr-10'>
        <Link className='text-decoration-none text-black text-uppercase' to={link}>{name}</Link>
      </li>
    </div>
  );
};

export default Links;
