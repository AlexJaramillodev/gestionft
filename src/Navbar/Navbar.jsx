import "./Navbar.css";

export function Navbar() {
  return (
    <>
      <nav className="navbar bg-primary-subtle shadow-sm border-bottom-3" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img 
              src="../../src/assets/suramericana_logo.png"
              alt="Bootstrap"
              width="30"
              height="24"
            />
          </a>
        </div>
      </nav>
    </>
  );
}
