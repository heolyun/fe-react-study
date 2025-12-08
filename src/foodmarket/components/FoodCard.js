import { Button, Card } from "react-bootstrap";
import food1 from '../img/food1.jpg'
import { useNavigate } from "react-router";


export default function FoodCard({ food, foods, index }) {

    let navigate = useNavigate();
    
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + food.imgPath} />
            <Card.Body>
                <Card.Title>{foods[0].title}</Card.Title>
                <Card.Text>{foods[index].content}</Card.Text>
                <Card.Text>{food.price}</Card.Text>
                <Button variant="primary" onClick={()=>{
                    navigate('/detail/'+ food.id);
                }}>상세보기</Button>
            </Card.Body>
        </Card>

    )
}