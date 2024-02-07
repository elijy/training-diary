import { render, screen } from "@testing-library/react";

import ExerciseListItem from "../ExerciseListItem";

test("list item renders exercie name", () => {
  render(<ExerciseListItem exercise={{ name: "bench" }} />);
  expect(screen.getByText("bench")).toBeInTheDocument();
});
