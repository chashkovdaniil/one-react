import { useState } from "react";
import Section from "../../components/common/Section";
import ListProjects from "../../components/project/List";
import Project from "../../models/Project";

export default function AllProjects(props: any) {
    const [projects, setProjects] = useState<Array<any> | null>(null);

    const loadDataProjects = async function () {
        return new Promise<Array<any>>((resolve, reject) => {
            fetch('http://localhost:3000/api/projects').then(
                (res) => res.json()
            ).then(
                (data: Array<any>) => {
                    resolve(data);
                    return;
                }
            );
        });
    }
    loadDataProjects().then((data: Array<any>) => setProjects(data.map(p => new Project(p))));
    return (
        <Section title="All projects">
            {
                projects == null ?
                    <div>load</div> :
                    <ListProjects projects={projects} />
            }

        </Section>
    );
}
