import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import App from "../App";
import WorkoutOverview from "./routes/WorkoutOverview";
import WorkoutDetails from "./routes/WorkoutDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/workouts" element={<WorkoutOverview />} />
      <Route path="/workouts/:workoutId" element={<WorkoutDetails />} />
      <Route path="" element={<Navigate to="/workouts" replace />} />
      <Route path="*" element={<Navigate to="/workouts" replace />} />
    </Route>
  )
);

export default router;
