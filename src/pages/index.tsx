import type { NextPage } from "next";
import Head from "next/head";

import Header from "components/Header";

import { Hero } from "sections/index";

const Index: NextPage = () => {

    return (
        <>
            <Head>
                <title>TOP | ky-y. OGP</title>
            </Head>

            <Header />
            <input />

            <main>
                <Hero />
            </main>
        </>
    );
};
export default Index;
