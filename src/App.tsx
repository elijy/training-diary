import { Outlet, useNavigate } from "react-router-dom";

function App(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div>
      <div className="hero is-primary">
        <div className="hero-body">
          <h1
            className="title"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/workouts")}
          >
            Training App
          </h1>
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
