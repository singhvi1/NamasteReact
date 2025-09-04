import { render } from "@testing-library/react"
import Body from "../Body"
import resCardMock from "../mocks/resCardMock.json"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(resCardMock)
        }
    })
})
it("should render the Body Component with search",()=>{
    render(<Body/>)
})