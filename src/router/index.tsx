import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "../App";
import WorkoutOverview from "./routes/WorkoutOverview";
import WorkoutDetails from "./routes/WorkoutDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="workouts" element={<WorkoutOverview />} />
      <Route path="workouts/:workoutId" element={<WorkoutDetails />} />
    </Route>
  )
);

export default router;
