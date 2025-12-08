import "./FoodMarket.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col, Card, Button } from 'react-bootstrap';

// 이미지
// import
import banner_bg from './img/banner_bg.jpg';
import food1 from './img/food1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';

// 기존 data import
import foodsData from './data/foodsData';
import { useState } from "react";
import FoodCard from "./components/FoodCard";
import Home from "./pages/Home";
import { Routes,Route,Link, useNavigate } from "react-router";
import CustomerService from "./pages/CustomerService";
import Detail from "./pages/Detail";

export default function FoodMarket() {

    let [foods, setFoods] = useState(foodsData);
    let navigate = useNavigate();

    return (
        <div>

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand onClick={()=>{navigate("/")}}>FoodMarket</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
                        {/* <Nav.Link href="#features"><Link to="/detail">FoodDetail</Link></Nav.Link> */}
                        <Nav.Link onClick={()=>{navigate('/detail')}}>FoodDetail</Nav.Link>
                        <Nav.Link onClick={()=>{navigate('/info')}}>Info</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/*
이미지 사용
react 컴포넌트 js에서 이미 사용시, import 후 사용
<img src="https://...외부 url/"/>
<img src={importimage}/> @@ import @@
*/}
            {/* <div className="main-bg" style={{ backgroundImage: "url(" + banner_bg + ")" }}></div> */}

            {/* <Container>
                <Row>

                    {/* {
                        foods.map((food, index)=>{
                            return (<Col md={4} sm={2}>
                            <FoodCard food={food} foods= {foods} index={index}/>
                            </Col>)
                        })
                    } */}
                    {/* <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food1} />
                            <Card.Body>
                                <Card.Title>{foods[0].title}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food2} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food3} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col> */}
                {/* </Row> */}
            {/* </Container> */ }

            <Routes>
                <Route path = "/" element={<Home foods={foods}/>}></Route>
                <Route path = "/detail" element={<div><h1>detail page</h1></div> }></Route>
                <Route path = "/info" element={<div><h1>info</h1></div>}></Route>
                <Route path = "/help" element={<CustomerService/>}>고객센터</Route>
                <Route path="/detail/:id" element={<Detail foods={foods} />}></Route>

                <Route path = "*" element={<div><h1>존재하지 않는 주소입니다.</h1></div>}></Route>
            </Routes>

        </div>
    )
}