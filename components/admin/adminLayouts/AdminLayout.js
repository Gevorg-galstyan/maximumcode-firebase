import Head from "next/head";
import AdminHeader from "./AdminHeader";
import {useEffect} from "react";
import {useRouter} from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {app} from "../../../config/firebase";

const AdminLayout = ({title, children}) => {
    const user = app.auth().currentUser;
    const router = useRouter();

    useEffect(() => {
        !user && router.push('/admin');
    }, [])

    return (
        <>
            <Head>
                <title>{`Admin | ${title}`}</title>
                <link rel="icon" href="/img/logo.png"/>
            </Head>
            <AdminHeader/>
            <main className={'container'}>
                {user && children}
            </main>
        </>
    );
};

export default AdminLayout;
