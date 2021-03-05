import Card from "../common/Card";
import Project from "../../data/models/Project";
import CardProject from "./CardProject";

function ListProjects(props: any) {
    const listProjects = props.projects?.map((project: Project, index: number) => {
        if (props.limit && (index == props.limit)) { return };
        return <li key={index}>
            <CardProject project={project}/>
        </li>;
    });
    return (
        <ul className="list-projects">{listProjects}</ul>
    );
}
export default ListProjects;