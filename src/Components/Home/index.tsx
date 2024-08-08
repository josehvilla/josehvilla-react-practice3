import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import useFetchDogs from "../../hooks/useFetchDogs";
import "./index.css";

const Home = () => {
  const { dogs, loading, error } = useFetchDogs();
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredDogs = dogs.filter((dog) =>
    dog.name.toLowerCase().includes(search.toLowerCase())
  );

  const RenderDogs = () => (
    <Fragment>
      <header>
        <div>
          <h1 className="title">Buscador de perros</h1>

          <form>
            <input
              type="text"
              value={search}
              onChange={handleChange}
              placeholder="Buscar por raza/perro"
            />
          </form>
        </div>
      </header>

      <main className="grid">
        {filteredDogs.map((dog) => {
          const { id, name, bred_for, reference_image_id } = dog;

          return (
            <Link to={`/${name}`} key={id}>
              <article className="dogs">
                <img
                  className="dogs-image"
                  src={`https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`}
                  alt={name}
                />
                <h2 className="dogs-name">{name}</h2>
                <p className="bred-for">Bred for: {bred_for} </p>
              </article>
            </Link>
          );
        })}
      </main>
    </Fragment>
  );

  const renderContent = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error al cargar</p>;
    return <RenderDogs />;
  };

  return <Fragment>{renderContent()}</Fragment>;
};

export default Home;
