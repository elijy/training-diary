import { fireEvent, render, screen } from "@testing-library/react";

import ListItem from "../ListItem";

test("list item renders text inside", () => {
  render(<ListItem>words</ListItem>);
  expect(screen.getByText("words")).toBeInTheDocument();
});

test("on click should be called", () => {
  const onClickHandler = jest.fn();
  render(<ListItem onClick={onClickHandler}>words</ListItem>);
  fireEvent.click(screen.getByText("words"));
  expect(onClickHandler).toHaveBeenCalledTimes(1);
});

test("on delete should be called", () => {
  const onClickHandler = jest.fn();
  render(<ListItem onDelete={onClickHandler}>words</ListItem>);
  fireEvent.click(screen.getByTestId("delete"));
  expect(onClickHandler).toHaveBeenCalledTimes(1);
});
