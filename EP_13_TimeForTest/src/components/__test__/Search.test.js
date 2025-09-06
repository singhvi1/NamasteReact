import { render, screen, act, fireEvent } from "@testing-library/react";
import Body from "../Body";
import mock_data from "../mocks/mock_data.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mock_data);
    },
  });
});
it("should serach Burger", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardBeforeClick =screen.getAllByTestId("resCard");
  expect(cardBeforeClick.length).toBe(20);
  const searchBtn= await  screen.findByRole("button",{name :/search/i})
  // console.log(searchBtn);
  expect(searchBtn).toBeInTheDocument();

  //search
  const searchInput=screen.getByTestId("searchInput")
  fireEvent.change(searchInput,{target : {value : "burger"}});
  fireEvent.click(searchBtn);
  //now screen will load burger 4 card
  const cardAfterclick=screen.getAllByTestId("resCard");
  expect(cardAfterclick.length).toBe(1);
});
it("should top Raterd Restro", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardBeforeFilter =screen.getAllByTestId("resCard");
  expect(cardBeforeFilter.length).toBe(20);
  const filterBtn=screen.getByRole("button",{name :/top Rated Restaurent/i})
  // console.log(filterBtn);
  expect(filterBtn).toBeInTheDocument();
  fireEvent.click(filterBtn);
  //now screen will filter the restaurents
  const cardAfterFilter=screen.getAllByTestId("resCard");
  // console.log(cardAfterFilter)
  expect(cardAfterFilter.length).toBe(3);
});
