import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import {app} from "../../config/firebase";

const Login = dynamic(() => import('../../components/admin/Login'), {ssr: false})

const Admin = () => {
    const router = useRouter();
    const user = app.auth().currentUser;
    useEffect(() => {
        user && router.push('/admin/home')
    }, [])

    return (
        <>
            {!user && <Login/>}
        </>
    )
}

export default Admin;
