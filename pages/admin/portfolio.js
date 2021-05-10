import AdminLayout from "../../components/admin/adminLayouts/AdminLayout";
import AddProjectModal from "../../components/admin/adminModal/AddProject";
import DeleteConfirm from "../../components/admin/adminModal/DeleteConfirm";
import {useEffect, useState} from "react";
import {textEllipsis} from "../../helpers/utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, Col, Form, Row} from "react-bootstrap";
import {app} from "../../config/firebase";
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import style from "../../styles/Portfolio.module.css";
import adminStyle from "../../styles/admin/adminGlobal.module.css";

const Portfolio = ({serverPortfolio}) => {

    const [portfolio, setPortfolio] = useState(serverPortfolio && serverPortfolio)
    const [modalShow, setModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [isAddedOrEdited, setIsAddedOrEdited] = useState(false);
    const [single, setSingle] = useState(null)
    const [deleteProject, setDeleteProject] = useState(null)

    useEffect(() => {
        const load = async () => {
            const db = app.firestore();
            const portfolioCollections = await db.collection('portfolio').get();
            setPortfolio(portfolioCollections.docs.map(doc => doc.data()))
        }

        if (!serverPortfolio) {
            load();
        }
    }, [isAddedOrEdited])

    const handleEdit = (id)=>{
        const item = portfolio.filter(e=> e.id === id)
        setSingle(item[0])
        setModalShow(true)
    }

    const handleDelete = (id)=>{
        const item = portfolio.filter(e=> e.id === id)
        setDeleteProject(item[0])
        setDeleteModalShow(true)
    }

    return (
        <AdminLayout title={'Portfolio'}>
            <div className={'text-center'}>
                <Button
                    variant="primary"
                    onClick={() => setModalShow(true)}
                    className={'m-auto'}
                >
                    Add new project
                </Button>
            </div>

            <Row className={'mt-5'}>
                {
                    portfolio && portfolio.map(item => (
                        <Col key={item.id} lg={4} className={'mt-3'}>
                            <div className={`${adminStyle.openEditor} position-relative`}>
                                <div className={`${style.portfolioBg} ${adminStyle.globalPortfolioBg}`}
                                    style={{backgroundImage: `url(${item.img})`}}>
                                </div>
                                <div className={'color-white text-center'}>
                                    <h2 className={'mb-3'}>{item.name}</h2>
                                    <p>{textEllipsis(item.description, 70)}</p>
                                </div>
                                <div className={adminStyle.editedBlock}>
                                    <div>
                                        <Button
                                            variant={'primary'}
                                            className={adminStyle.editBtn}
                                            onClick={()=> handleEdit(item.id)}
                                        >
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Button>
                                        <Button
                                            variant={'danger'}
                                            className={`${adminStyle.deleteBtn} ml-3`}
                                            onClick={()=> handleDelete(item.id)}
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
            {
                modalShow &&
                <AddProjectModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    setIsAddedOrEdeted = {setIsAddedOrEdited}
                    isAddedOrEdeted = {isAddedOrEdited}
                    info = {single}
                />
            }
            {
                deleteModalShow &&
                <DeleteConfirm
                    show={deleteModalShow}
                    onHide={() => setDeleteModalShow(false)}
                    setIsAddedOrEdeted = {setIsAddedOrEdited}
                    isAddedOrEdeted = {isAddedOrEdited}
                    project={deleteProject}
                />
            }

        </AdminLayout>
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
    const serverPortfolio = portfolioCollections.docs.map(doc => doc.data())

    return {
        serverPortfolio
    }

}
export default Portfolio;
