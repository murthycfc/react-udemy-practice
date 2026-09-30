import Button from "./Button";
import Card from "./Card";
import Title from "./Title";
import Description from "./Description";

export default function Product(){
    return(
        <Card>
            <Title>Laptop</Title>
            <Description>A good Laptop</Description>
            <Button>Add to cart</Button>
        </Card>
    )
}