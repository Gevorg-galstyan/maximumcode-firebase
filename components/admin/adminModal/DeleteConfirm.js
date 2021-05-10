import {Button, Form, Modal} from "react-bootstrap";
import {app} from "../../../config/firebase";

const DeleteConfirm = (props) => {

    const db = app.firestore();

    const deleteProject = () => {
        const storageRef = app.storage().ref();
        db.collection('portfolio').doc(props.project.slug).delete().then(()=>{
            const desertRef = storageRef.child(`/${props.project.category}`).child(props.project.name);
            desertRef && desertRef.delete().then(()=>{
                props.onHide()
            });
            props.setIsAddedOrEdeted(!props.isAddedOrEdeted);
        })
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
                Are you sure want to delete project
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant={'danger'}
                    onClick={deleteProject}
                >
                    YES
                </Button>
                <Button onClick={props.onHide}>NO</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteConfirm;
