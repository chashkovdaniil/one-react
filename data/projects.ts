import Project from "./models/Project";

export const loadDataProjects = async function (props?: any): Promise<Project[] | null> {
  // Todo: реализовать ограничения по выводу
  let response = await fetch(`/api/projects`);
  if (props?.limit) {
    response = await fetch(`/api/projects?limit=${props.limit}`);
  }

  if (response.status >= 400) {
    return null;
  }

  let data = await response.json();
  return data.map((p: any) => new Project(p));
}
export const loadDataProject = async function (url: string): Promise<Project | null> {
  let response = await fetch(`/api/projects/${url}`);

  if (response.status >= 400) {
    return null;
  }

  let data = await response.json();

  return new Project(data);
}