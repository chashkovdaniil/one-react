import Head from "next/head";

export default function MainLayout({ children, title }: any) {
    return <>
        <Head>
            <title>One | {title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="One! Host your project"
            />
        </Head>
        <main>{children}</main>
    </>;
}