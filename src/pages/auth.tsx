import type { NextPage } from "next";
import Head from "next/head";

import Header from "components/Header";

import { Form } from "sections/auth";

const Auth: NextPage = () => {

    return (
        <>
            <Head>
                <title>Login / Sign Up | ky-y. OGP</title>
            </Head>

            <Header />

            <main>

                <Form />
            </main>
        </>
    );
};

export default Auth;
