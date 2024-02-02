import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import { NavLink, useNavigate } from 'react-router-dom';


const Header = () => {

    const navigate = useNavigate();
    const loginToken = JSON.parse(localStorage.getItem('Token'));

    const handleLogout = () => {
        localStorage.removeItem('Token');
        navigate('/login');
    }


    return (
        <header>
            <nav className='navbar_1'>
                <div className="container d-flex justify-content-between align-items-center">
                    <a href="mailto:iliyafitness@gmail.com" className='text-decoration-none pt-2
                     text-light d-flex align-items-center'>
                        <BsEnvelopeFill className='mx-2 pb-1' />
                        iliyafitness@gmail.com
                    </a>
                    <a href="tel:+989331070565" className='text-decoration-none pt-2
                     text-light d-flex align-items-center'>
                        <BsFillTelephoneFill className='mx-2 pb-1' />
                        احمدی:09331070565
                    </a>
                </div>
            </nav>
            <nav className='main_navbar'>
                <Navbar expand={"md"} className="navbar_2 mb-3">
                    <Container>
                        <Navbar.Brand href='/' className='fw-bold d-flex align-items-center fs-2 mx-2 brand_logo'>
                            <a className='a_tag fs-1' href="/">F</a>
                            <img src="/assets/images/gym_logo.png" className='d-none d-md-inline rounded-3 mx-1 py-2' alt="" />
                            <a className='a_tag fs-1' href="/">ITNESS</a>
                        </Navbar.Brand>
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
                            <Offcanvas.Body className='link_nav'>
                                <Nav className="justify-content-end align-items-center fw-semibold flex-grow-1">
                                    <NavLink className='text-light a_tag fw-semibold ms-3' to="/contactus">تماس با ما</NavLink>
                                    <NavLink className='text-light a_tag fw-semibold ms-3' to="/blog">وبلاگ</NavLink>
                                    <NavLink className='text-light a_tag fw-semibold ms-3' to="/aboutus">درباره ما</NavLink>
                                    <NavLink className='text-light a_tag fw-semibold ms-3' to="/products">محصولات</NavLink>
                                    <NavLink className='text-light a_tag fw-semibold ms-3' to="/">خانه</NavLink>
                                    {
                                        loginToken ? (
                                            <button onClick={handleLogout} className='btn btn-warning fw-bold ms-3'>خروج</button>
                                        ) : (
                                            <NavLink className='text-warning a_tag fw-bold ms-3' to="/login">ورود</NavLink>
                                        )
                                    }
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </nav>
        </header>
    )
}

export default Header
