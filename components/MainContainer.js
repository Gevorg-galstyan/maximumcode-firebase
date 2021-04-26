import React from "react";
import Head from "next/head";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const MainContainer = ({children, description,keywords, title}) => {
    return (
        <>
            <Head>
                <title>{`MaximumCode | ${title}`}</title>
                <meta name={'description'} content={description} />
                <meta name={'keywords'} content={keywords} />
                <link rel="icon" href="/img/logo.png" />
            </Head>
            <Header />
            <main className={'container'}>
                { children }
            </main>
            <Footer/>
        </>
    );
};

export default MainContainer;
