import Project from "./models/Project";

const loadDataProjects = async function (props: any): Promise<Project[]> {
    // Todo: реализовать ограничения по выводу
    let response = await fetch(`/api/projects`);
    if (props.limit) {
        response = await fetch(`/api/projects?limit=${props.limit}`);
    }
     
    let data = await response.json();

    return data.map((p: any) => new Project(p));
}
const loadDataProject = async function (url: string): Promise<Project> {
    let response = await fetch(`/api/projects/${url}`);
    let data = await response.json();

    return new Project(data);
}
export {
    loadDataProjects,
    loadDataProject
};