import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import NewWorkout from "./routes/NewWorkout";
import WorkoutOverview from "./routes/WorkoutOverview";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<WorkoutOverview />} />
      <Route path="/new-workout" element={<NewWorkout />} />
    </Route>
  )
);

export default router;
