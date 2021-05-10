import {Button, Form, Modal} from "react-bootstrap";
import {app} from "../../../config/firebase";
import {v4 as uuidv4} from "uuid";
import {useState} from "react";

const AddProjectModal = (props) => {
    const db = app.firestore();
    const info = props.info ? props.info : {
        name: '',
        img: '',
        description: '',
        category: 'web',
    }

    const [project, setProject] = useState(info);

    const handleChange = ({target}) => {
        if (target.name === 'category' && target.value === '') {
            return
        }

        if (target.name === 'img') {
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
            alert('Please Fill all fields');
            return;
        }

        const storageRef = app.storage().ref();
        const imgRef = typeof project.img === 'object' ? storageRef.child(`/${project.category}`).child(project.name) : project.img
        typeof project.img === 'object' && await imgRef.put(project.img);

        if (!props.info) {
            await db.collection('portfolio').doc(project.name.toLowerCase().trim().split(' ').join('-')).set({
                id: uuidv4(),
                name: project.name.trim(),
                img: await imgRef.getDownloadURL(),
                description: project.description,
                category: project.category,
                slug: project.name.toLowerCase().trim().split(' ').join('-')
            })
        } else {
            await db.collection('portfolio').doc(project.slug).update({
                name: project.name.trim(),
                img: typeof imgRef === 'object' ? await imgRef.getDownloadURL() : imgRef,
                description: project.description,
                category: project.category,
                // slug: project.name.toLowerCase().trim().split(' ').join('-')
            })
        }


        setProject({
            name: '',
            img: '',
            description: '',
            category: 'web',
        })
        props.onHide();
        props.setIsAddedOrEdeted(!props.isAddedOrEdeted);

    }

    return (
            <Modal
                show={props.show}
                onHide={props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
    );
};

export default AddProjectModal;
