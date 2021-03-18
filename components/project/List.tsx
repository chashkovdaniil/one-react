import Card from "../common/Card";
import Project from "../../data/models/Project";
import CardProject from "./CardProject";

function ListProjects(props: any) {
  const projects: Array<any> | null = props.projects;

  if (!projects || projects.length == 0) {
    return <div className="loader" />;
  }

  const listProjects = projects.map((project: Project) => {
    return (
      <li key={project.id}>
        <CardProject project={project} />
      </li>
    );
  });
  return (
    <ul className="list-projects">{listProjects}</ul>
  );
}
export default ListProjects;