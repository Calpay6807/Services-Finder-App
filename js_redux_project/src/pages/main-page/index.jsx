import React from "react";
import { useSelector } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import CategorySingle from "../../components/category-single";
const MainPage = () => {
  const categoryState = useSelector((state) => state.categoryState);
  return (
    <main>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal text-body-emphasis">
          Welcome To Service Finder Project
        </h1>
        <p className="fs-5 text-body-secondary">
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It’s built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div>
      <>
        <div className="row mb-3 text-center">
          <Splide
            options={{
              perPage: 3,
              gap: 10,
            }}
          >
            {categoryState.categories.map((category) => (
              <SplideSlide key={category.id}>
                <CategorySingle category={category} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </>

      <h2 className="display-6 text-center mb-4">Compare plans</h2>

      <div className="table-responsive">
        <table className="table text-center">
          <thead>
            <tr>
              <th style={{ width: "34%" }} />
              <th style={{ width: "22%" }}>Free</th>
              <th style={{ width: "22%" }}>Pro</th>
              <th style={{ width: "22%" }}>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Public
              </th>
              <td>
                <svg className="bi" width="24" height="24">
                  <use href="#check" />
                </svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24">
                  <use href="#check" />
                </svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24">
                  <use href="#check" />
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Private
              </th>
              <td />
              <td>
                <svg className="bi" width="24" height="24">
                  <use href="#check" />
                </svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24">
                  <use href="#check" />
                </svg>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Permissions
              </th>
              <td>
                <svg className="bi" width="24" height="24">
                  <use href="#check" />
                </svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24">
                  <use href="#check" />
                </svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24">
                  <use href="#check" />
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Sharing
              </th>
              <td />
              <td>
                <svg className="bi" width="24" height="24">
                  <use href="#check" />
                </svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24">
                  <use href="#check" />
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Unlimited members
              </th>
              <td />
              <td>
                <svg className="bi" width="24" height="24">
                  <use href="#check" />
                </svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24">
                  <use href="#check" />
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Extra security
              </th>
              <td />
              <td />
              <td>
                <svg className="bi" width="24" height="24">
                  <use href="#check" />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default MainPage;
