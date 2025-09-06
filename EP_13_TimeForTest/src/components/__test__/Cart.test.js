import RestaurantMenu from "../RestaurantMenu"
import { render, screen, act, fireEvent } from "@testing-library/react";
import mock_resData from "../mocks/mock_resData.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"



global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json : ()=> {
            return Promise.resolve(mock_resData)
        }
    })
})

it("sholuld load restaurent Menu Component",async ()=>{
    await act(async ()=> render(<RestaurantMenu/>))
})