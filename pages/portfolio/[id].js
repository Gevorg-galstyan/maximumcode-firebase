import MainContainer from "../../components/MainContainer";
import {app} from "../../config/firebase";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Col, Row} from "react-bootstrap";

const db = app.firestore();


const Single = ({serverProject}) => {

    const rout = useRouter();
    const [project, setProject] = useState(serverProject && {...serverProject})

    useEffect(() => {
        const load = async () => {
            const serverProject = (await db.collection('portfolio').doc(rout.query.id).get()).data();
            serverProject ? setProject({...serverProject}) : rout.push('/404')
        }
        if (!project) {
            load();
        }

    }, [])

    if(!project){
        return <MainContainer></MainContainer>
    }
    // console.log(rout)
    return (
        <MainContainer title={project.name}>
            <Row>
               <Col lg={4}>
                   <img src={project.img} alt={project.name} className={'img-fluid'} />
               </Col>
               <Col lg={8}>
                   <h1>{project.name}</h1>
                   <p>
                       {project.description}
                   </p>
               </Col>
           </Row>
        </MainContainer>
    );

};

Single.getInitialProps = async ({query, req}) => {
    if (!req) {
        return {
            serverProject: null
        };
    }
    const serverProject = (await db.collection('portfolio').doc(query.id).get()).data();

    return {
        serverProject
    }

}
export default Single;
