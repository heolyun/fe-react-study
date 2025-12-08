import { Container,Row, Col,Button  } from "react-bootstrap";
import { useParams } from "react-router";

export default function Detail({foods}) {


    let {id} = useParams();
    console.log(id);
    let food = foods.find((item)=>{
        return item.id ==id;
    })

    //food.title
    let foodIndex = foods.findIndex((item)=>{
        return item.id ==id;
    })

    if(foods == undefined || food == null){
        return(
            <div>
                <h1>없는 상풉입니다</h1>
                <h2>잘못된 접근</h2>
            </div>
        )
    }
    //foods[foodIndex].title
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img src={process.env.PUBLIC_URL + food.imgPath} width="100%" />
                </Col>
                <Col md={6}>
                    <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
                    <p>{food.content}</p>
                    <p>{food.price}</p>
                    <p>
                        <Button variant="dark">-</Button>
                        <span> 0 </span>
                        <Button variant="dark">+</Button>
                    </p>

                    <Button variant="primary">주문하기</Button>
                </Col>
            </Row>
        </Container >
    )
}
