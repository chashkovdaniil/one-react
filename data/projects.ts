import Project from "./models/Project";

const loadDataProjects = async function () {
    // Todo: реализовать ограничения по выводу
    let response = await fetch('http://localhost:3000/api/projects');
    let data = await response.json();

    return data;
}
const loadDataProject = async function (name: string) { }
export {
    loadDataProjects,
    loadDataProject
};