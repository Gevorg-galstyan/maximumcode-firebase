import AdminLayout from "../../components/admin/adminLayouts/AdminLayout";
import {Button, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import {app} from "../../config/firebase";

const About = () => {

    const db = app.firestore();
    const [about, setAbout] = useState({
        title: '',
        description: ''
    });

    useEffect(()=>{
        const load = async ()=>{
            const serverAbout = (await db.collection('about').doc('about').get()).data()
            serverAbout && setAbout({...serverAbout})
        }
       load()
    }, [])

    const handleChange = ({target})=>{
        setAbout({
            ...about,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(about.title === '' || about.description === ''){
            alert('please fill all fields');
            return;
        }

        await db.collection('about').doc('about').set({
            title: about.title,
            description: about.description
        })
        setAbout({
            title: '',
            description: ''
        })
    }

    return (
        <AdminLayout title={'About'}>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        name={'title'}
                        value={about.title}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <textarea
                        placeholder="Enter description"
                        name={'description'}
                        onChange={handleChange}
                        className={'w-100 p-2'}
                        value={about.description}
                        rows={10}
                    >
                    </textarea>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </AdminLayout>
    );
};

export default About;
