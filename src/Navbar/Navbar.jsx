import "./Navbar.css";

export function Navbar() {
  return (
    <>
      <nav className="navbar shadow-sm border-bottom-3 nav-color" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img 
              src="../../src/assets/images/logo-sura.svg"
              alt="Bootstrap"
              width="30"
              height="24"
              className="img-logo"
            />
          </a>
        </div>
      </nav>
    </>
  );
}
