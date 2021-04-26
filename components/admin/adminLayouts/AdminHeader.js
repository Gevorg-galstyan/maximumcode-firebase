import Link from "next/link";
import {useRouter} from "next/router";
import {app} from "../../../config/firebase";
import {Button, Container, Nav, Navbar, Row} from "react-bootstrap";
import style from "../../../styles/Header.module.css";

const Header = () => {
    const router = useRouter();

    const handleLogOut = () => {
        app.auth()
            .signOut()
            .then(() => {
                router.push('/admin')
            })
    }
    return (
        <header className='mt-5'>
            <Container>
                <Row>
                    <Navbar bg="transparent" expand="lg" className={'px-0 w-100'}>
                        <Navbar.Brand href="/" className='mr-0'>
                            <img src={'/img/logo.png'} alt="Maximum Code" className={style.logo}/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link href="/admin">
                                    <a className={`${style.headerNav} nav-link`}>Admin Home</a>
                                </Link>

                                <Link href="/admin/portfolio">
                                    <a className={`${style.headerNav} nav-link`}>Portfolio</a>
                                </Link>
                                <Link href="/admin/about">
                                    <a className={`${style.headerNav} nav-link`}>About Us</a>
                                </Link>
                            </Nav>
                            <Nav className={'ml-auto'}>
                                <Button onClick={handleLogOut}>Log out</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container>
        </header>
    )
};

export default Header;
