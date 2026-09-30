import styled from 'styled-components';

    const Button = styled.button`
        background-color: ${(props) => props.$color};
        color: white;
        padding: 10px 20px;
        margin: 5px;
        border: none;
        border-radius: 5px;
        &:hover{
            background-color: ${(props) => props.$hover} }
        }
    `
export default function ButtonComponent(){


    return(
        <>
            <Button $color="green" $hover="#71ea71">Green</Button>
            <Button $color="red" $hover="#f55c5c">Red</Button>
            <Button $color="blue" $hover="#6868ec">Blue</Button>
        </>
    )
}