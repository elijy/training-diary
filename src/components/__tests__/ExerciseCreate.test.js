import { fireEvent, render, screen } from "@testing-library/react";
import ExerciseCreate from "../ExerciseCreate";
import { Provider } from "react-redux";
import store from "../../store";
import userEvent from "@testing-library/user-event";

test("it clears the form after adding an exercise", () => {
  render(
    <Provider store={store}>
      <ExerciseCreate workoutId={123} />
    </Provider>
  );

  const input = screen.getByPlaceholderText("Bench Press");
  userEvent.type(input, "Squat");
  const form = screen.getByTestId("form");
  fireEvent.submit(form);
  expect(input.value).toBe("");
});
