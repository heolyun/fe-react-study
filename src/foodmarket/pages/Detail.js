import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import './Detail.css';

export default function Detail({ foods }) {


    let [orderCount, setOrderCount] = useState(0);
    let [test, setTest] = useState(0);

    let [viewStatus, setViewStatus] = useState('');

    let [modalShow, setModalShow] = useState(true); // 모달창 표시 여부


    let { id } = useParams();
    console.log(id);
    let food = foods.find((item) => {
        return item.id == id;
    })

    //food.title
    let foodIndex = foods.findIndex((item) => {
        return item.id == id;
    })

    //useEffect(실행할함수,의존성배열)
    //useEffect(실행할함수)
    //useEffect(실행할함수{return()=>{clean up function}},의존선배열)
    useEffect(() => {
        console.log('useEffect 실행 (의존성배열 없음');
    }); // 의존성배열X -> 로딩되는 매번 실행
    useEffect(() => {
        console.log('useEffect 실행 ([]빈 의존성 배열');
    }, []); // 빈 배열 -> 로딩 1 회 실행
    useEffect(() => {
        console.log('useEffect 실행 ([]빈 의존성 배열');
        return () => {
            console.log('useEffect 실행, [orderCount]-> return 실행');
        }
    }, [orderCount]); // 의종선 배열에 값 존재
    useEffect(() => {
        console.log('useEffect 실행 ([]빈 의존성 배열');
    }, [test]); //의존성 배열에 값 존재

    useEffect(() => {
        console.log('setViewStatus end 처리');
        // setViewStatus('end');
        setTimeout(() => {
            setViewStatus('end')
        }, 300);
    }, []);

    //Modal 창 안보이게 적용

    useEffect(() => {
        //modalShow

        let tmout = setTimeout(() => {
            setModalShow(false);
        }, 2000);

        //setTimeout
        //setInterval
        //비동기 작동 방식

        //clearInterval
        //clearTimeout

        return () => {
            clearTimeout(tmout);
        }
    }, [])









    if (foods == undefined || food == null) {
        return (
            <div>
                <h1>없는 상풉입니다</h1>
                <h2>잘못된 접근</h2>
            </div>
        )
    }
    //foods[foodIndex].title
    return (
        <Container className={"start " + viewStatus}>
            <Row>
                <Col md={6}>
                    <img src={process.env.PUBLIC_URL + food.imgPath} width="100%" />
                </Col>
                <Col md={6}>
                    <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
                    <p>{food.content}</p>
                    <p>{food.price}</p>
                    <p>재고 수량 = {food.stockCount}</p>
                    <p>
                        <Button variant="dark" onClick={() => setOrderCount(prev => Math.max(prev - 1, 0))}
                        >-</Button>
                        <span> {orderCount} </span>
                        <Button
                            variant="dark"
                            onClick={() => {
                                if (orderCount + 1 > food.stockCount) {
                                    alert("주문 수량은 재고 수량을 넘을 수 없습니다.");
                                    return;
                                }
                                setOrderCount(orderCount + 1);
                            }}>
                            +
                        </Button>

                    </p>

                    {food.stockCount === 0 ? (
                        <Button variant="secondary" disabled> 품절 </Button>
                    ) : (<Button variant="primary">주문하기</Button>
                    )}
                </Col>
            </Row>

            <Modal show={modalShow} onHide={() => { setModalShow(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title>ㅎㅇ</Modal.Title>
                </Modal.Header>
                <Modal.Body>존맛탱</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        setModalShow();
                    }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container >
    )
}
