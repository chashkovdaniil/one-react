import Head from 'next/head'
import Header from '../components/common/Header';
import Section from '../components/common/Section';
import ListProjects from '../components/project/List';
import ListContacts from '../components/contact/List';
import { connectToDatabase } from '../util/mongodb';
import { useRouter } from 'next/router';
let one_db;
export default function Home({ isConnected }) {
    // const [data, setData] = useState(false);
    const to404 = () => useRouter().push('/404');
    const findDocuments = async function () {
        // Get the documents collection
        console.log('Run load data');
        // console.log('db -- '+client);
        // const collection = db.collection('projects');
        // // Find some documents
        // collection.find({}).toArray(function (err, docs) {
        //     // assert.equal(err, null);
        //     console.log("Found the following records");
        //     console.log(docs);
        // });
    }
    const contacts = [
        {
            name: 'Daniil Chashkov',
            photo: '',
            email: 'chashkovdaniil@gmail.com'
        },
        {
            name: 'Contact name',
            photo: '',
            email: 'name@gmail.com'
        }
    ];
    const projects = [
        {
            name: 'Winter in Russia',
            link: 'winter-in-russia',
            image: ''
        },
        {
            name: 'Ivan Grozny',
            link: 'ivan-grozny',
            image: ''
        },
        {
            name: 'Goverment is now',
            link: 'goverment-is-now',
            image: ''
        },
    ];
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                {/* <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                /> */}
                <meta name="og:title" content="One" />
                <title>One</title>
            </Head>
            <main>
                <Section
                    id="main"
                    childrenCenter
                    nextSectionId="projects"
                    bgImage="/images/header-bg.png"
                >
                    <div className="column">
                        <button onClick={findDocuments}>Load data</button>
                        <h1>{isConnected ? "Yes " : "no"} Projects - the list of projects</h1>
                        <blockquote>Quote - it is very important stuff of your life.</blockquote>
                    </div>
                </Section>
                <Section
                    id="projects"
                    title="Latest projects"
                    childrenCenter
                    forwardLink={{ href: '/all-projects', title: 'All' }}
                    nextSectionId="contacts"
                >
                    <ListProjects projects={projects} limit="3" />
                </Section>
                <Section
                    id="contacts"
                    title="Contacts"
                    childrenCenter
                    nextSectionId="aboutus"
                >
                    <ListContacts contacts={contacts} />
                </Section>
                <Section title="About us" childrenCenter id="aboutus">
                    <strong>
                        This site was created to host sites of RWH&DC.
                    </strong>
                </Section>
            </main>
        </div>
    );
};
export async function getServerSideProps(context) {
    const { client, db } = await connectToDatabase()

    const isConnected = await client.isConnected()
    one_db = db;
    return {
        props: { isConnected },
    }
}