import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="hero is-primary">
        <div className="hero-body">
          <h1 className="title">Training App</h1>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
