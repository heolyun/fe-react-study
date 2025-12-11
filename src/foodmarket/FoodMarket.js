import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FoodMarket.css';
import { Row, Col, Card, Button } from 'react-bootstrap';

//이미지 import
import banner_bg from './img/banner_bg.jpg';
import food1 from './img/food1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';


//기준 data import
import foodsData from './data/foodsData';

import { useState } from 'react';
import FoodCard from './components/FoodCard';
import Home from './pages/Home';
import CustomerService from './pages/CustomerService';

import { Routes, Route, Link, useNavigate } from 'react-router';
import Detail from './pages/Detail';

function FoodMarket() {

    let [foods, setFoods] = useState(foodsData);
    

    //경로이동 <a href=...
    // location.href = '....

    //react-router
    // Link to=..
    // navigate(..)

    let navigate = useNavigate();

    return (
        <div>

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand onClick={()=>{ navigate("/")}}>FoodMarket</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"> <Link to="/">Home</Link> </Nav.Link>
                        {/* <Nav.Link href="#features"> <Link to="/detail">FoodDetail</Link> </Nav.Link> */}
                        <Nav.Link onClick={()=>{ navigate('/detail') }}> FoodDetail </Nav.Link>
                        <Nav.Link onClick={()=>{ navigate("/info") }}> Info </Nav.Link>
                        <Nav.Link onClick={()=>{ navigate("/help") }}> 고객센터 </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


            <Routes>
                <Route path="/" element={<Home foods={foods} />}></Route>
                <Route path="/detail" element={<div><h1>detail page</h1></div>}></Route>
                <Route path="/info" element={<div><h1>info page</h1></div>}></Route>
                <Route path="/help" element={<CustomerService/>}></Route>
                <Route path="/detail/:id" element={ <Detail foods={foods} />}></Route>
                <Route path="*" element={<div><h1>존재하지 않는 주소입니다.</h1></div>}></Route>
            </Routes>



            {/* 
                이미지 사용

                1. css 이미지 경로 (상대경로 ./img/...)

                2. js 사용
                react 컴포넌트 js 에서 이미사용시, import 후 사용
                <img src="https://...외부url/"/>
                <img src={importimage}/>
                <img src={banner_bg}/>

                3. public 폴더에 이미지 저장 후 사용
                <img src={'/images/food1.jpg'}/>

                <img src={process.env.PUBLIC_URL + '/images/food1.jpg'}/>

                package.json
                "homepage":"/detailServicePath"  상세경로 설정
                
             */}








            {/* <Container>
                <Row>
                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food1}/>
                            <Card.Body>
                                <Card.Title>{foods[0].title}</Card.Title>
                                <Card.Text>{foods[0].content}</Card.Text>
                                <Card.Text>{foods[0].price}</Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food2}/>
                            <Card.Body>
                                <Card.Title>{foods[1].title}</Card.Title>
                                <Card.Text>{foods[1].content}</Card.Text>
                                <Card.Text>{foods[1].price}</Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food3} />
                            <Card.Body>
                                <Card.Title>{foods[2].title}</Card.Title>
                                <Card.Text>{foods[2].content}</Card.Text>
                                <Card.Text>{foods[2].price}</Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> */}




            {/* <Container>
                <Row>
                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food1}/>
                            <Card.Body>
                                <Card.Title>카드 타이틀</Card.Title>
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
                            <Card.Img variant="top" src={food2}/>
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
                    </Col>
                </Row>
            </Container> */}

        </div>
    )
}

export default FoodMarket;