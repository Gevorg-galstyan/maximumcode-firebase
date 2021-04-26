import React, {useEffect, useState} from 'react';
import MainContainer from "../components/MainContainer";
import {app} from "../config/firebase";
import {Row} from "react-bootstrap";
const db = app.firestore();

const About = ({serverAbout}) => {
    const [about, setAbout] = useState(serverAbout && {...serverAbout})

    useEffect(()=>{
        const load = async ()=>{
            const serverAbout = (await db.collection('about').doc('about').get()).data();
            serverAbout && setAbout({...serverAbout})
        }
        if(!about){
            load();
        }

    }, [])

    return (
        <MainContainer title={'ABOUT'}>
           <Row>
               <h1 className={'text-center w-100'}>{about && about.title}</h1>

               <p>
                   {about && about.description}
               </p>
           </Row>
        </MainContainer>
    );
};


About.getInitialProps  = async ({req})=>{

    if(!req){
        return {
            serverAbout: null
        };
    }

    const serverAbout = (await db.collection('about').doc('about').get()).data();

    return{
        serverAbout
    }

}

export default About;
