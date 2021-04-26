import React, {useState} from 'react';
import Link from "next/link";
import {Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import style from "../../styles/Header.module.css";


const Header = () => {
    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    return(
        <header className='mt-5'>
            <Container>
                <Row>
                    <Navbar bg="transparent" expand="lg"  className={'px-0 w-100'}>
                        <Navbar.Brand href="/" className='mr-0'>
                            <img src={'/img/logo.png'} alt="Maximum Code" className={style.logo}/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link href="/">
                                    <a className={`${style.headerNav} nav-link`}>Home</a>
                                </Link>
                                <NavDropdown
                                    title="Services"
                                    id="service-dropdown"
                                    className={'nav-link'}
                                    show={show}
                                    onMouseEnter={showDropdown}
                                    onMouseLeave={hideDropdown}
                                >
                                    <Link href="/services/web-development">
                                        <a className={`${style.headerNavDropdown}`}> Website Development</a>
                                    </Link>
                                    <Link href="/services/mobile-applications">
                                        <a className={`${style.headerNavDropdown}`}>  Mobile Applications</a>
                                    </Link>
                                    <Link href="/services/graphic-design">
                                        <a className={`${style.headerNavDropdown}`}>  Graphic Design</a>
                                    </Link>
                                    <Link href="/services/ui-ux-design">
                                        <a className={`${style.headerNavDropdown}`}>  Ui Ux Design</a>
                                    </Link>

                                </NavDropdown>
                                <Link href="/portfolio">
                                    <a className={`${style.headerNav} nav-link`} >Portfolio</a>
                                </Link>
                                <Link href="/about">
                                    <a className={`${style.headerNav} nav-link`} >About Us</a>
                                </Link>
                                <Link href="/contacts">
                                    <a className={`${style.headerNav} nav-link`} >Contact Us</a>
                                </Link>
                            </Nav>
                            <Nav className='ml-auto'>
                                <Link href="/order">
                                    <a className={style.headerNavButton} >Order</a>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container>
        </header>
    )
};

export default Header;
