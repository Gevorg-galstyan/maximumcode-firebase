import React from 'react';
import Link from "next/link";
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons"
import style from "../../styles/Footer.module.css";

const Footer = () => {

    return (
        <footer className={style.footer}>
            <Container>
                <Row>
                    <div className={`w-100 d-flex align-items-center justify-content-between`}>
                        <div>
                            <img src={'/img/logo.png'} className={`${style.logo} img-fluid`} alt=""/>
                        </div>
                        <ul className={style.soc}>
                            <li className={'soc-icons'}>
                                <a href="https://www.facebook.com/MaximumCodes" className={style.socLink}
                                   rel="noreferrer" target='_blank'>
                                    <FontAwesomeIcon icon={faFacebookF}/>
                                </a>
                            </li>
                            <li className={'soc-icons'}>
                                <a href="https://www.instagram.com/maximumcodes" className={style.socLink}
                                   rel="noreferrer" target='_blank'>
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </a>
                            </li>
                            <li className={'soc-icons'}>
                                <a href="https://www.linkedin.com/company/19095874/" className={style.socLink}
                                   rel="noreferrer" target='_blank'>
                                    <FontAwesomeIcon icon={faLinkedinIn}/>
                                </a>
                            </li>
                            <li className={'soc-icons'}>
                                <a href="https://twitter.com/MaximumCodes" className={style.socLink} rel="noreferrer"
                                   target='_blank'>
                                    <FontAwesomeIcon icon={faTwitter}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <Row className={`${style.footerMiddle} mx-0`}>
                        <Col lg={4} md={6}>
                            <div>
                                <h5 className={'color-white mb-4'}>About Us</h5>
                                <p className={`${style.footerAbout} pr-lg-4 m-0`}>
                                    We have been working in the field of programming for almost 15 years. Many companies
                                    and individual entrepreneurs have become our friends and partners over the years, we
                                    are modestly proud of this and devote all our working and even free time to our
                                    friends !!! Become one of our friends and we guarantee that we won’t let you down
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <h5 className={'color-white mb-4'}>Pages</h5>


                            <nav className="mr-auto verticalNav">
                                <Link href="/">
                                    <a className={`nav-link ${style.footerNav}`}>Home</a>
                                </Link>
                                <Link href="/about">
                                    <a className={`nav-link ${style.footerNav}`}> About Us</a>
                                </Link>
                                <Link href="/contacts">
                                    <a className={`nav-link ${style.footerNav}`}> Contact Us</a>
                                </Link>
                                <Link href="/portfolio">
                                    <a className={`nav-link ${style.footerNav}`}>Portfolio</a>
                                </Link>
                            </nav>
                        </Col>
                        <Col lg={4} md={6}>
                            <h5 className={'color-white mb-4'}>Services</h5>
                            <nav className="mr-auto verticalNav">
                                <Link href="/services/web-development">
                                    <a className={`nav-link ${style.footerNav}`}>Website Development</a>
                                </Link>
                                <Link href="/services/mobile-applications">
                                    <a className={`nav-link ${style.footerNav}`}>Mobile Applications</a>
                                </Link>
                                <Link href="/services/graphic-design">
                                    <a className={`nav-link ${style.footerNav}`}>Graphic Design</a>
                                </Link>
                                <Link href="/services/ui-ux-design">
                                    <a className={`nav-link ${style.footerNav}`}>Ui Ux Design</a>
                                </Link>
                            </nav>
                        </Col>
                    </Row>
                    <div className={'w-100 text-center'}><p className={style.copyright}>© Copyrights 2021 | <span
                        className={style.copyMax}>MaximumCode LLC</span></p></div>
                </Row>
            </Container>

        </footer>
    )
};

export default Footer;
