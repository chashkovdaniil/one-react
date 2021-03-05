import { useState, useEffect } from "react";
import Section from "../../components/common/Section";
import MainLayout from "../../components/layouts/MainLayout";
import ListProjects from "../../components/project/List";
import Project from "../../data/models/Project";
import { connectToDatabase } from "../../util/mongodb";
import { loadDataProjects } from "../../data/projects";

export default function AllProjects({ data }: any) {
    const [projects, setProjects] = useState<Array<any> | null>(data);

    useEffect(() => {
        async function loadData() {
            let datas = await loadDataProjects();
            setProjects(datas.map((p: any) => new Project(p)));
        }
        if (!data) {
            loadData();
        }
        return ()=>{};
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
export async function getStaticProps({ req }: any) {
    if (!req) {
        return { props: { data: null } };
    }
    let data = await loadDataProjects();
    return { props: { data } };
}