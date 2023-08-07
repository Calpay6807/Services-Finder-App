import React, { useEffect, useState } from "react";
import CategorySingle from "../../components/category-single";
import ServiceSingle from "../../components/service-single";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const CategoryDetail = () => {
  const params = useParams();
  const api = useApi();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    /* useEffect asyncron fonksiyon istemiyo yani yukarda yazamayız altta
    immidatal call fonksiyon yazarak async yaparız
    */
    (async () => {
      if (category !== null) {
        setCategory(null);
      }
      const response = await api.get(
        `public/categories/getBySlug/${params.slug}`
      );
      setCategory(response.data.data);
    })();
  }, [params.slug]);
  if (category === null) {
    return <div>Loading</div>;
  }
  console.warn("🚀 ~ file: index.jsx:9 ~ CategoryDetail ~ category:", category);

  return (
    <>
      <h1>{category.category.name}</h1>
      <p>{category.category.description}</p>
      <hr />

      <h1>Sub Categories</h1>

      {category.category.children.length > 0 ? (
        <>
          <div className="row ">
            {category.category.children.map((category) => (
              <CategorySingle category={category} />
            ))}
          </div>
        </>
      ) : null}

      <h1>services</h1>

      <>
        <div className="row ">
          {category.services.map((service) => {
            return <ServiceSingle service={service} />;
          })}
        </div>
      </>
    </>
  );
};

export default CategoryDetail;
