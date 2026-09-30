import Greeting from "./Greeting"
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
describe('Greeting component', ()=>{
    test('renders Hello world as a text', ()=>{
    // Arrange
    render(<Greeting />)

    // Act

    // Assert
    const text = screen.getByText('Hello world', {exact: false});
    expect(text).toBeInTheDocument();
    })

    test('render "Before" before clicking the button', ()=>{
        render(<Greeting />)

        const before = screen.getByText('Before');
        expect(before).toBeInTheDocument();
    })

    test('render "After" before clicking the button', ()=>{
        render(<Greeting />)

        const btnElement = screen.getByRole('button');
        userEvent.click(btnElement) 

        const after = screen.getByText('After');
        expect(after).toBeInTheDocument();
    })

    test('dooes not render "Before" after clicking the button', ()=>{
        render(<Greeting/>)

        const btnElement = screen.getByRole('button');
        userEvent.click(btnElement) 

        const before = screen.queryByText('Before');
        expect(before).toBeNull();

    })
})
