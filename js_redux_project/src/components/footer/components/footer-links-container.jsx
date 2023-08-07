import React from "react";
import { Link } from "react-router-dom";

const LinksContainer = (props) => {
  return (
    <>
      <div className="col-6 col-md ">
        <h5>{props.title}</h5>
        <ul className="list-unstyled text-small">
          {props.links.map((item, index) => (
            <li className="mb-1" key={index}>
              <Link
                className="link-secondary text-decoration-none"
                to={item.url}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LinksContainer;
