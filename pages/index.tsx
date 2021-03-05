import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout';
import Section from '../components/common/Section';
import ListProjects from '../components/project/List';
import ListContacts from '../components/contact/List';
import { useEffect, useState } from 'react';
import { loadDataProjects } from '../data/projects';
import Project from '../data/models/Project';

export default function Home({ data }: any) {
    const [projects, setProjects] = useState<Array<any> | null>(null);
    
    useEffect(() => {
        async function loadData() {
            let datas = await loadDataProjects();
            setProjects(datas.map((p: any) => new Project(p)));
        }
        if (!data) {
            loadData();
        }
        return () => { };
    });

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
    return (
        <MainLayout title="Home">
            <Section
                id="main"
                childrenCenter
                nextSectionId="projects"
                bgImage="/images/header-bg.png"
            >
                <div className="column">
                    <h1>Projects - the list of projects</h1>
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
        </MainLayout>
    );
};
export async function getStaticProps({ req }: any) {
    if (!req) {
        return { props: { data: null } };
    }
    let data = await loadDataProjects();
    return { props: { data } };
}