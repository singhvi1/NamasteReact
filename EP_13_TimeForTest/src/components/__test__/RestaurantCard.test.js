import RestaurantCard from ".././RestaurantCards";
import MOCK_DATA from "../mocks/resCardMock.json";
import { render,screen } from  "@testing-library/react";
import "@testing-library/jest-dom";

it("should render Restaurant card with props Data",()=>{
    render(<RestaurantCard  resData={MOCK_DATA}/>)
    const name=screen.getByText("Burger King");
    expect(name).toBeInTheDocument();

    expect(screen.getByText("Burgers, American")).toBeInTheDocument()
    expect(screen.getByText(/4.3/)).toBeInTheDocument()
    expect(screen.getByText(/mins/i)).toBeInTheDocument()
});
it("should render res image with correct src",()=>{
    render(<RestaurantCard  resData={MOCK_DATA}/>)
    const img=screen.getByAltText("res-logo")
    expect(img).toHaveAttribute("src");
});