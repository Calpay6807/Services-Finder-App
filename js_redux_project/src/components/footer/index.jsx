import React, { useContext } from "react";
import image from "../../assets/svg/bootstrap-logo.svg";
import LinksContainer from "./components/footer-links-container";
import { useSelector } from "react-redux";
import { ThemeContext } from "../context/theme-context";
import { Button } from "react-bootstrap";
const Footer = () => {
  const themeContextValue = useContext(ThemeContext);
  const categoryState = useSelector((state) => state.categoryState);
  return (
    <>
      <footer className="pt-4 my-md-5 pt-md-5 border-top ">
        <div className="row ">
          <div className=" ">
            <img className="mb-2" src={image} alt="" width="24" height="19" />
            <small className="d-block mb-3 text-body-secondary">
              © 2017–2023
            </small>
          </div>

          <LinksContainer
            title="categories"
            links={categoryState.categories.slice(0, 5).map((category) => ({
              url: `/category/${category.slug}`,
              title: category.name,
            }))}
          />

          <LinksContainer
            title="örnek link grubu"
            links={[
              { url: "about-us", title: "About-us" },
              { url: "about-us/vision-mission", title: "Vision & Mission" },
              { url: "about-us/contact-us", title: "Contact Us" },
              { url: "about-us/privacy-policy", title: "Privacy Policy" },
            ]}
          />

          <div className="col-6 col-md">
            <h5>Theme CoLor</h5>
            <Button
              variant="light"
              onClick={() => themeContextValue.setTheme("light")}
            >
              {themeContextValue.theme === "light" ? (
                <i className="fa-regular fa-square-check" />
              ) : (
                <i className="fa-solid fa-check-to-slot" />
              )}
              &nbsp; Light
            </Button>
            <Button
              variant="dark"
              onClick={() => themeContextValue.setTheme("dark")}
            >
              {themeContextValue.theme === "dark" ? (
                <i className="fa-solid fa-check-to-slot" />
              ) : (
                <i className="fa-regular fa-moon" />
              )}
              &nbsp; Dark
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
