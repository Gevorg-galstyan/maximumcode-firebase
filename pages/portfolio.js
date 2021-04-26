import React, {useEffect, useState} from 'react';
import MainContainer from "../components/MainContainer";
import {app} from "../config/firebase";
import {Col, Row} from "react-bootstrap";

const Portfolio = ({projects}) => {

    const [project, setProject] = useState(projects && projects)


    useEffect(()=>{
        const load = async ()=>{
            const db = app.firestore();
            const portfolioCollections = await db.collection('portfolio').get();
            setProject(portfolioCollections.docs.map(doc => doc.data()))
        }

        if(!projects){
            load();
        }

    }, [])

    return (
        <MainContainer title={'PORTFOLIO'}>
           <Row>
               {
                   project && project.map(item =>(
                       <Col lg={4} key={item.name}>
                           <div>
                               <img src={item.img} alt={item.name} className={'img-fluid'} />
                           </div>
                           <div>
                               <h2>{item.name}</h2>
                           </div>
                           <div>
                               <p>
                                   {item.description}
                               </p>
                           </div>
                       </Col>
                   ))
               }
           </Row>
        </MainContainer>
    );
};

Portfolio.getInitialProps  = async ({req})=>{

    if(!req){
        return {
            projects: null
        };
    }

    const db = app.firestore();
    const portfolioCollections = await db.collection('portfolio').get();
    const projects = portfolioCollections.docs.map(doc => doc.data())

    return{
        projects
    }

}

export default Portfolio;
