import { useState, useEffect } from "react";
import Section from "../../components/common/Section";
import MainLayout from "../../components/layouts/MainLayout";
import ListProjects from "../../components/project/List";
import Project from "../../data/models/Project";
import { loadDataProjects } from "../../data/projects";

export default function AllProjects(props: any) {
    const [projects, setProjects] = useState<Array<any>>();

    useEffect(() => {
        async function loadData() {
            let data = await loadDataProjects();
            setProjects(data);
        }
        if (!projects) {
            loadData();
        }
        return () => { };
    });


    return (
        <MainLayout title="Projects">
            <Section title="All projects">
                {
                    projects == null ?
                        <div>loader</div> :
                        <ListProjects projects={projects} />
                }
            </Section>
        </MainLayout>
    );
}