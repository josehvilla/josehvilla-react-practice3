import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import useFetchDogInfo from "../../hooks/useFechDogInfo";
import "./index.css";

const DogInfo = () => {
  const { dog, loading, error } = useFetchDogInfo();

  const RenderDogInfo = () => (
    <section>
      {dog.map((item) => {
        const {
          id,
          name,
          reference_image_id,
          description,
          bred_for, 
          height,
          weight,
          breed_group,
          life_span,
          temperament,
        } = item;

        return (
          <main className="content" key={id}>
            <article>
              <img
                className="dog-image"
                src={`https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`}
                alt={name}
                width={500}
              />
            </article>

            <article>
              <h1 className="dog-name">{name}</h1>
              {description && <p>{description}</p>}

              <ul className="dog-info">
                <li>
                  <span>Bred For:</span> {bred_for}
                </li>
                <li>
                  <span>Height:</span> {height.metric} kgs
                </li>
                <li>
                  <span>Weight:</span> {weight.metric} cm
                </li>
                <li>
                  <span>Breed Group:</span> {breed_group}
                </li>
                <li>
                  <span>Lifespan:</span> {life_span}
                </li>
                <li>
                  <span>Temperament:</span> {temperament}
                </li>
              </ul>
              <button className="back-button">
                <Link to="/">&larr; Back</Link>
              </button>
            </article>
          </main>
        );
      })}
    </section>
  );

  const renderContent = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error al cargar</p>;
    return <RenderDogInfo />;
  };

  return <Fragment>{renderContent()}</Fragment>;
};

export default DogInfo;
