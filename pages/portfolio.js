import {useEffect, useState} from 'react';
import MainContainer from "../components/MainContainer";
import Link from "next/link";
import {app} from "../config/firebase";
import {Col, Row} from "react-bootstrap";
import style from '../styles/Portfolio.module.css'
import {textEllipsis} from "../helpers/utils";

const Portfolio = ({projects}) => {

    const [project, setProject] = useState(projects && projects)

    useEffect(() => {
        const load = async () => {
            const db = app.firestore();
            const portfolioCollections = await db.collection('portfolio').get();
            setProject(portfolioCollections.docs.map(doc => doc.data()))
        }

        if (!projects) {
            load();
        }
    }, [])

    return (
        <MainContainer title={'PORTFOLIO'}>
            <Row className={'mt-5'}>
                <Col xs={12}>
                    <div className={'w-75 m-auto color-white'}>
                        <h1 className={'text-center w-100'}>OUR PORTFOLIO</h1>
                        <div className={'text-center w-lg-50'}>
                            <p className={`m-0 m-auto ${style.portfolioDescription}`}>
                                We cooperate with technology businesses globally to create brand-new web products and
                                implement market-leading solutions.

                                We strive to deliver the best work for every single project. Here's a few of them we'd
                                like you to see.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className={'mt-5'}>
                {
                    project && project.map(item => (
                        <div  key={item.id} className={'my-5 w-lg-75 ml-auto mr-auto'}>
                            <Link
                                href={`/portfolio/[id]`}
                                as={`/portfolio/${item.slug}`}
                            >
                                <a className={'d-flex flex-wrap portfolio-link'}>
                                    <div className={`${project.indexOf(item) % 2 ? style.leftSide : style.rightSide} ${style.portfolioInner}`}>
                                        <div className={`${project.indexOf(item) % 2 ? 'order-0' : 'order-1'} ${style.portfolioBg} col`}
                                             style={{backgroundImage: `url(${item.img})`}}>
                                            <img src={item.img} alt={item.name} className={'d-none'}/>
                                        </div>
                                        <div className={`${project.indexOf(item) % 2 ? 'text-right' : 'text-left'} col p-0`}>
                                            <h2 className={'mb-3'}>{item.name}</h2>
                                            <p>{textEllipsis(item.description, 70)}</p>
                                        </div>
                                    </div>
                                </a>
                            </Link>

                        </div>
                    ))
                }
            </Row>
        </MainContainer>
    );
};

Portfolio.getInitialProps = async ({req}) => {

    if (!req) {
        return {
            projects: null
        };
    }

    const db = app.firestore();
    const portfolioCollections = await db.collection('portfolio').get();
    const projects = portfolioCollections.docs.map(doc => doc.data())

    return {
        projects
    }

}

export default Portfolio;
