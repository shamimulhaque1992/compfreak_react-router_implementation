import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Links = (props) => {
  const { name, link } = props.route;
  return (
    <div>
      <li className='mr-10'>
        <CustomLink className=' text-black text-uppercase' to={link}>{name}</CustomLink>
      </li>
    </div>
  );
};

export default Links;
