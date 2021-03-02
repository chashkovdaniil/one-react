import Head from 'next/head';
import Section from "../components/common/Section";

function Page404() {
    return (
        <div>
            <Head>
                <title>One</title>
            </Head>
            <Section childrenCenter>
                <div><h1 style={{ color: "black" }}>Error 404</h1></div>
            </Section>
        </div>
    );
}

export default Page404;