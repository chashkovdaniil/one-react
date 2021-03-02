class Project {
    name: string;
    description: string;
    site: string;
    photo: string;
    members: Array<string>;

    constructor(projectMap: any){
        this.name = projectMap.name;
        this.description = projectMap.description;
        this.site = projectMap.site;
        this.photo = projectMap.photo;
        this.members = projectMap.members;
    }

    toMap(project: Project): any{
        return {
            name: project.name,
            description: project.description,
            site: project.site,
            members: project.members
        };
    }
}
export default Project;