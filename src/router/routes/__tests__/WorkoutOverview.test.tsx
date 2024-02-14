import { render, screen } from "@testing-library/react";

import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import { Provider } from "react-redux";
import store from "../../../store";
import { BrowserRouter } from "react-router-dom";

import WorkoutOverview from "../WorkoutOverview";

const handlers = [
  http.get("http://localhost:3001/workouts", () => {
    return HttpResponse.json([
      {
        id: "40bf",
        date: "2024-02-04T19:51:04.463Z",
      },
      {
        id: "087e",
        date: "2024-03-04T19:54:58.613Z",
      },
    ]);
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("it loads some workouts", async () => {
  render(
    <Provider store={store}>
      <WorkoutOverview />
    </Provider>,
    { wrapper: BrowserRouter }
  );
  expect(screen.getByText("Start a new workout")).toBeInTheDocument();
  expect(
    await screen.findByText(new Date("2024-02-04T19:51:04.463Z").toDateString())
  ).toBeInTheDocument();
  expect(
    await screen.findByText(new Date("2024-03-04T19:51:04.463Z").toDateString())
  ).toBeInTheDocument();
});
