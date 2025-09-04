import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should have Login button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginBtn = screen.getByRole("button", { name: "login" });
  expect(loginBtn).toBeInTheDocument();
});
it("should have cart Items 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText(/Cart/); //regex
  expect(cartItems).toBeInTheDocument();
});

it("should toggle login and logout button correctly", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Initially "login"
  const btn = screen.getByRole("button", { name: /login/i });
  expect(btn).toBeInTheDocument();

  // Click → "logout"
  fireEvent.click(btn);
  expect(screen.getByRole("button", { name: /logout/i })).toBeInTheDocument();

  // Click → "login" again
  fireEvent.click(screen.getByRole("button", { name: /logout/i }));
  expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
});
