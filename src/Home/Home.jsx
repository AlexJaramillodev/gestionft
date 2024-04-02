import "./Home.css";

import basedatos from "../utils/basedatos.json";

export function Home() {
  console.log(basedatos.length);

  return (
    <>
      <nav className=" container-fluid navbar bg-primary text-white px-5 d-flex justify-content-start" data-bs-theme="dark">
      <img className="me-2 img-fluid d-block" src="../../src/assets/images/logosura.png" alt="logo sura" />
      <h1 className="fs-2" >Gestion Rehabilitacion</h1>


      </nav>

      <section className="navbar bg-body-tertiary">
        <form className="container-fluid justify-content-start">
          <button className="btn btn-outline-success me-2" type="button">
            Main button
          </button>
          <button className="btn btn-sm btn-outline-secondary" type="button">
            Smaller button
          </button>
        </form>
      </section>
    </>
  );
}
