import MainContainer from "../components/MainContainer";
import {Container, Button, Media, Col, Row} from "react-bootstrap";
import style from "../styles/Home.module.css";
import ContactBlock from "../components/layouts/ContactBlock";
import PartnerCarousel from "../components/layouts/PartnerCarousel";

export default function Home() {
    return (
        <MainContainer title={'HOME'}>
            <>
                <Container className={'mt-5'}>
                    <Row>
                        <Col className='order-2 order-lg-1' lg={6}>
                            <h1 className={style.sliderPrimaryHead}>We do all the hard work for you. </h1>
                            <h3 className={style.sliderSecondaryHead}>We will do everything possible and impossible so that your projects are the best among the bests </h3>
                            <div className={style.btnGroup}>
                                <Button className={`${style.sliderBtn} ${style.sliderBtnBg}`}>Learn More</Button>
                                <Button className={`${style.sliderBtn} ${style.sliderBtnNoneBg} ml-5`}>Demo</Button>
                            </div>
                            <Media>
                                <Button className={style.videoButton}>
                                    <img src={"/img/home/play.png"} alt=""/>
                                </Button>

                                <Media.Body className={'ml-3'}>
                                    <h5 className={style.videoTitle}>Watch preview</h5>
                                    <p className={style.videoDescription}>
                                        The harder you work for something, the greater you’ll feel when you achieve it.
                                    </p>
                                </Media.Body>
                            </Media>
                        </Col>
                        <Col className='order-1 order-lg-2' lg={6}>
                            <div>
                                <img src="/img/home/slider.png" alt="Maximum Speed" className="img-fluid"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <section className={style.frame}>
                    <Container>
                        <Row><PartnerCarousel/></Row>
                        <Row>
                            <div className={'w-100 mb-5'}>
                                <h2 className={style.aboutPrimaryTitle}>Your choice</h2>
                                <h5 className={style.aboutSecondaryTitle}>There are many reasons to get down and start to
                                    get depressed about your situation. </h5>
                            </div>
                            <Col lg={4} md={6} className={'d-flex mb-4'}>
                                <div className={'mr-4'}>
                                    <img src={'/img/home/icons/f1.png'} alt=""/>
                                </div>
                                <div>
                                    <h6 className={style.servicesTitle}>Ecstatic elegance</h6>
                                    <p className={style.servicesDescription}>Article nor prepare chicken you him now. Shy
                                        merits say advice ten before lovers innate add.</p>
                                </div>

                            </Col>
                            <Col lg={4} md={6} className={'d-flex mb-4'}>
                                <div className={'mr-4'}>
                                    <img src={'/img/home/icons/f2.png'} alt=""/>
                                </div>
                                <div>
                                    <h6 className={style.servicesTitle}>Ecstatic elegance</h6>
                                    <p className={style.servicesDescription}>Article nor prepare chicken you him now. Shy
                                        merits say advice ten before lovers innate add.</p>
                                </div>

                            </Col>
                            <Col lg={4} md={6} className={'d-flex mb-4'}>
                                <div className={'mr-4'}>
                                    <img src={"/img/home/icons/f3.png"} alt=""/>
                                </div>
                                <div>
                                    <h6 className={style.servicesTitle}>Ecstatic elegance</h6>
                                    <p className={style.servicesDescription}>Article nor prepare chicken you him now. Shy
                                        merits say advice ten before lovers innate add.</p>
                                </div>

                            </Col>
                            <Col lg={4} md={6} className={'d-flex mb-4'}>
                                <div className={'mr-4'}>
                                    <img src={'/img/home/icons/f4.png'} alt=""/>
                                </div>
                                <div>
                                    <h6 className={style.servicesTitle}>Ecstatic elegance</h6>
                                    <p className={style.servicesDescription}>Article nor prepare chicken you him now. Shy
                                        merits say advice ten before lovers innate add.</p>
                                </div>

                            </Col>
                            <Col lg={4} md={6} className={'d-flex mb-4'}>
                                <div className={'mr-4'}>
                                    <img src={'/img/home/icons/f5.png'} alt=""/>
                                </div>
                                <div>
                                    <h6 className={style.servicesTitle}>Ecstatic elegance</h6>
                                    <p className={style.servicesDescription}>Article nor prepare chicken you him now. Shy
                                        merits say advice ten before lovers innate add.</p>
                                </div>

                            </Col>
                            <Col lg={4} md={6} className={'d-flex mb-4'}>
                                <div className={'mr-4'}>
                                    <img src={'/img/home/icons/f6.png'} alt=""/>
                                </div>
                                <div>
                                    <h6 className={style.servicesTitle}>Ecstatic elegance</h6>
                                    <p className={style.servicesDescription}>Article nor prepare chicken you him now. Shy
                                        merits say advice ten before lovers innate add.</p>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={style.homeAbout}>
                    <Container>
                        <Row className={'align-items-center'}>
                            <Col lg={5}>
                                <h2 className={`${style.homeAboutTitle} m-0`}>Increase your business <span
                                    className={style.innerOrange}>traffic</span></h2>
                                <p className={`${style.homeAboutDescription} my-4`}>
                                    We are committed to processing the information in order to contact you and talk about
                                    your project.
                                </p>
                                <Button className={'standartButton'}>Learn more</Button>
                            </Col>
                            <Col lg={7}>
                                <img src={'/img/home/about.png'} className={'img-fluid'} alt="About MaximumCode"/>
                            </Col>
                        </Row>
                    </Container>
                    <div className={style.homeFrame}>
                        <img src={'/img/home/frameTrans.png'} alt=""/>
                    </div>
                </section>
                <section className={style.orderWays}>
                    <Container>
                        <Row className={'justify-content-center'}>
                            <Col lg={10}>
                                <h2 className={`${style.homeAboutTitle} m-0 text-center`}>
                                    3 Simple Ways To <span className={style.innerOrange}>Save</span> A Bunch Of <span
                                    className={style.innerOrange}>Money</span> When Buying A New Computer
                                </h2>
                                <p className={`${style.homeAboutDescription} my-4 text-center w-50 mx-auto`}>
                                    Fully customizable and neatly organized components
                                    will help you work faster without limiting creative freedom.
                                </p>
                            </Col>
                        </Row>
                        <Row className={'justify-content-between mt-5'}>
                            <Col lg={3}>
                                <h5 className={`${style.homeAboutTitle} m-0 text-center`}>
                                    100+
                                </h5>
                                <p className={`${style.homeAboutDescription} my-4 text-center`}>
                                    5 Reasons To Purchase
                                    Desktop Computers
                                </p>
                            </Col>
                            <Col lg={3}>
                                <h5 className={`${style.homeAboutTitle} m-0 text-center`}>
                                    43,000+
                                </h5>
                                <p className={`${style.homeAboutDescription} my-4 text-center`}>
                                    3 Simple Ways To Save A Bunch Of Money When Buying A New Computer
                                </p>
                            </Col>
                            <Col lg={3}>
                                <h5 className={`${style.homeAboutTitle} m-0 text-center`}>
                                    30+
                                </h5>
                                <p className={`${style.homeAboutDescription} my-4 text-center`}>
                                    A Discount Toner Cartridge
                                    Is Better Than Ever And You
                                    Will Save 50 Or More
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={style.toOrder}>
                    <Container>
                        <Row className={'justify-content-center'}>
                            <Col lg={10}>
                                <h2 className={`${style.homeAboutTitle} m-0 text-center mb-5`}>
                                    Create your <span className={style.innerOrange}>next project</span> with startup framework
                                </h2>
                                <div className={'text-center'}>
                                    <Button className={'standartButton '}>Order Online</Button>
                                </div>
                            </Col>

                            <div className={`${style.orderFrame} w-100`}>
                                <img src={'/img/home/orderFrame.png'} alt="order online" className={'img-fluid'} />
                            </div>
                        </Row>

                    </Container>
                </section>
                <section className={style.team}>
                    <Container>
                        <Row className={'align-items-center'}>
                            <Col lg={6}>
                                <img src={'/img/home/team.png'} alt="MaximumCode team" className={'img-fluid'} />
                            </Col>
                            <Col lg={6}>
                                <h4 className={style.aboutTeamTitle}>Help Finding Information Online</h4>
                                <p className={style.aboutTeamDescription}>Fully customizable and neatly organized components
                                    will help you work faster without limiting creative freedom.</p>
                                <Row className={'m-0'}>
                                    <Col lg={6}>
                                        <div><img src={'/img/home/icons/Swiss-knife.png'} alt="switch" className={'img-fluid'} /></div>
                                        <h6 className={style.switcherTitle}>Feature One</h6>
                                        <p className={style.switcherDesc}>Fully customizable and neatly organized components will help you work faster </p>
                                    </Col>
                                    <Col lg={6}>
                                        <div><img src={'/img/home/icons/LTE.png'} alt="switch" className={'img-fluid'} /></div>
                                        <h6 className={style.switcherTitle}>Feature Two</h6>
                                        <p className={style.switcherDesc}>Fully customizable and neatly organized components will help you work faster </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <ContactBlock />
            </>
        </MainContainer>
    )
}
