import React from "react";
import { Link } from "react-router-dom";
import ImgFallBack from "../img-fallback/index";

const CategorySingle = (props) => {
  return (
    <>
      <div className="col-md-12">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3" style={{ height: "100px" }}>
            <h4 className="my-0 fw-normal">{props.category.name}</h4>
          </div>
          <div className="card-body">
            <ImgFallBack
              src={props.category.image}
              className="img-fluid"
              style={{ objectFit: "cover", height: "200px" }}
            />

            <Link
              to={`/category/${props.category.slug}`}
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

export default CategorySingle;
