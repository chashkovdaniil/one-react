import Project from "./models/Project";

const loadDataProjects = async function () {
    // Todo: реализовать ограничения по выводу
    let response = await fetch('/api/projects');
    let data = await response.json();

    return data;
}
const loadDataProject = async function (url: string) {
    let response = await fetch(`/api/project/${url}`);
    let data = await response.json();

    return data;
}
export {
    loadDataProjects,
    loadDataProject
};