import React from "react";
import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";

const UserDashboardPage = () => {
  const authState = useSelector((state) => state.authState);
  return (
    <>
      <main>
        <div
          className="d-flex flex-column flex-shrink-0 p-3 bg-light"
          style={{ width: "280px" }}
        >
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
              <a href="#" className="nav-link active">
                <svg className="bi me-2" width="16" height="16">
                  <use href="#speedometer2" />
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark">
                <svg className="bi me-2" width="16" height="16">
                  <use href="#table" />
                </svg>
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark">
                <svg className="bi me-2" width="16" height="16">
                  <use href="#grid" />
                </svg>
                Products
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark">
                <svg className="bi me-2" width="16" height="16">
                  <use href="#people-circle" />
                </svg>
                Customers
              </a>
            </li>
          </ul>
          <hr />
          <Dropdown>
            <Dropdown.Toggle
              className="d-flex align-items-center justify-content-center w-100 link-dark text-decoration-none
            dropdown-toggle"
              variant="dark text-white"
              id="dropdown-basic"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>{authState.user?.fullname}</strong>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item>
              <Dropdown.Item href="#/action-2">My Project</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Setting</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="javascript:void()">LogOut</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </main>
    </>
  );
};

export default UserDashboardPage;
