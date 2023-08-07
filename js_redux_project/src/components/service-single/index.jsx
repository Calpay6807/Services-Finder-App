import React from "react";
import { Link } from "react-router-dom";
import ImgFallBack from "../img-fallback";

const ServiceSingle = (props) => {
  return (
    <>
      <div className="row col-md-4 p-5">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div
            className="card-header py-3 bg-primary text-bg-primary"
            style={{ height: "100px" }}
          >
            <h4 className="my-0 fw-normal">{props.service.name}</h4>
          </div>
          <div className="card-body">
            <ImgFallBack
              src={props.service.image}
              className="img-fluid"
              style={{ objectFit: "cover", height: "200px" }}
            />
            <Link
              to={`/service/${props.service.slug}`}
              className="w-100 btn btn-lg btn-outline-primary"
            >
              Detail..
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSingle;
