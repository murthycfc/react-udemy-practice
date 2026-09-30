import { render, screen } from "@testing-library/react"
import Async from "./Async"
describe('Async component', ()=>{
    test('renders "Posts" if request succeed', async()=>{

        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post'}]
        })

        render(<Async />)

        const items =  await screen.findAllByRole('listitem');
        expect(items).not.toHaveLength(0);
    })
})