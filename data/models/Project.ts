class Project {
    id: any;
    name: string;
    desc: string;
    site: string;
    photoURL: string;
    members: Array<string>;
    url: string;

    constructor(projectMap: any) {
        this.id = projectMap?._id;
        this.name = projectMap.name;
        this.desc = projectMap.desc;
        this.site = projectMap.site;
        this.photoURL = projectMap.photoURL;
        this.members = projectMap.members;
        this.url = projectMap?.name?.replaceAll(' ', '-');
    }

    toMap(project: Project): any {
        return {
            _id: project.id,
            name: project.name,
            desc: project.desc,
            photoURL: project.photoURL,
            site: project.site,
            members: project.members,
            url: project.url
        };
    }
}

export default Project;