import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate,Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Info from "./pages/Info";
import MyPage from "./pages/MyPage";
import Cart from "./pages/Cart";

export default function Quiz01() {
    let navigate = useNavigate();

    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/Main">main</Nav.Link>
                    <Nav.Link as={Link} to="/Info">info</Nav.Link>
                    <Nav.Link as={Link} to="/MyPage">mypage</Nav.Link>
                    <Nav.Link as={Link} to="/Cart">cart</Nav.Link>
                </Nav>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/Main" element={<Main />} />
                    <Route path="/Info" element={<Info />} />
                    <Route path="/MyPage" element={<MyPage />} />
                    <Route path="/Cart" element={<Cart />} />
                </Routes>
            </Container>
        </Navbar>

    );
}
