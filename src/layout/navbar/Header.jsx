import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";


const Header = () => {
    return (
        <div>
            <div>
                <div className='navbar_1'>
                    <div className="container d-flex justify-content-between align-items-center">
                        <a href="/" className='text-decoration-none mt-1 text-light d-flex align-items-center'>
                            <BsEnvelopeFill className='mx-2 ' />
                            alimahdavi30000@gmail.com
                        </a>
                        <a href="/" className='text-decoration-none mt-1 text-light d-flex align-items-center'>
                            <BsFillTelephoneFill className='mx-2 ' />
                            09012559469
                        </a>
                    </div>
                </div>
                <div className='main_navbar'>
                    <Navbar expand={"md"} className="navbar_2 mb-3">
                        <Container>
                            <Navbar.Brand className='fw-bold fs-3 mx-2 brand_logo' href="#">ILIYAFITNESS</Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} className='bg-warning' />
                            <Navbar.Offcanvas
                                className="navbar_2"
                                id={`offcanvasNavbar-expand-md`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton className='bg-dark'>
                                    <Offcanvas.Title className='fw-bold fs-3 mx-2 brand_logo' id={`offcanvasNavbarLabel-expand-md`}>
                                        ILIYAFITNESS
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className='navbar_2'>
                                    <Nav className="justify-content-end fw-semibold flex-grow-1">
                                        <Nav.Link className='text-light ms-3' href="#action2">تماس با ما</Nav.Link>
                                        <Nav.Link className='text-light ms-3' href="#action2">وبلاگ</Nav.Link>
                                        <Nav.Link className='text-light ms-3' href="#action2">درباره ما</Nav.Link>
                                        <Nav.Link className='text-light ms-3' href="#action2">محصولات</Nav.Link>
                                        <Nav.Link className='text-light ms-3' href="#action1">خانه</Nav.Link>
                                        <Nav.Link className='text-warning fw-bold ms-3' href="#action1">ورود</Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </div>
    )
}

export default Header
