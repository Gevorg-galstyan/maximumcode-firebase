import AdminLayout from "../../components/admin/adminLayouts/AdminLayout";
import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {app} from "../../config/firebase";
import {set} from "mobx";


const Portfolio = () => {
    const db = app.firestore();
    const [project, setProject] = useState({
        name: '',
        img: '',
        description:'',
        category: 'web',
    });

    const handleChange = ({target}) => {
        if (target.name === 'category' && target.value === '') {
            return
        }

        if (target.name === 'img') {
            console.log('a')
            const file = target.files[0];
            setProject({
                ...project,
                [target.name]: file
            })
        } else {
            setProject({
                ...project,
                [target.name]: target.value
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!project || !project.name || !project.img || !project.category) {
            alert('Fill all fields');
            return;
        }

        if (project.img) {
            const storageRef = app.storage().ref();
            const imgRef = storageRef.child(`/${project.category}`).child(project.img.name)
            await imgRef.put(project.img);
            await db.collection('portfolio').doc(project.name).set({
                name: project.name,
                img : await imgRef.getDownloadURL(),
                description: project.description,
                category: project.category
            })
            setProject({
                name: '',
                img: '',
                description:'',
                category: 'web',
            })

        }


    }

    return (
        <AdminLayout title={'Portfolio'}>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        name={'name'}
                        value={project.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        as="select"
                        name={'category'}
                        value={project.category}
                        onChange={handleChange}
                    >
                        <option value={'web'}>Web</option>
                        <option value={'mobile'}>Mobile</option>
                        <option value={'graphic'}>Graphic</option>
                        <option value={'ui-ux'}>Ui/Ux</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <textarea
                        placeholder="Enter description"
                        name={'description'}
                        onChange={handleChange}
                        className={'w-100 p-2'}
                        value={project.description}
                        rows={10}
                    >
                    </textarea>
                </Form.Group>
                <Form.Group>
                    <Form.File
                        id="custom-file"
                        label="Choose img"
                        custom
                        accept={'.jpg,.png,.jpeg'}
                        name={'img'}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </AdminLayout>
    );
};

export default Portfolio;
