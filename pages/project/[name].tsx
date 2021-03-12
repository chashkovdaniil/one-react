import { useState, useEffect } from 'react';
import Section from '../../components/common/Section';
import Project from "../../data/models/Project";
import { useRouter } from "next/router";
import MainLayout from "../../components/layouts/MainLayout";
import { loadDataProject } from '../../data/projects';
import User from '../../data/models/User';

function ProjectView(props: any) {
    const [isLoad, setLoad] = useState(true);
    const [project, setProject] = useState<Project>();
    const router = useRouter();

    useEffect(() => {
        async function loadData(url: any){
            let data = await loadDataProject(url);
            setProject(data);
            let members: Array<string> = data.members;
            console.log(members[0]);
        }
        if (router.isReady) {
            if (!project) {
                loadData(router.query.name);
            }
            setLoad(!router.isReady);
        }
        return () => { };
    });

    return isLoad ?
        (
            <MainLayout title="Loading">
                <h1>Loading</h1>
            </MainLayout>
        ) : (
            <MainLayout title={project?.name}>
                <Section title={project?.name}
                    forwardLink={{ title: 'Go to site', href: `${project?.siteURL}` }}
                    childrenOnTop
                >
                    <div className="center" style={{
                        width: "100%",
                        minHeight: "300px",
                        backgroundColor: "blueviolet",
                        backgroundImage: `url(${project?.photoURL})`
                    }}></div>
                    <div className="project-info">
                        <span>{project?.desc}</span>
                        <details>
                            <summary>Members</summary>
                            <ul><li>Chashkov Daniil</li></ul>
                        </details>
                    </div>
                </Section>
            </MainLayout>
        );
}
export default ProjectView;