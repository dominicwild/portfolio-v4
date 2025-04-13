export type ProjectData = {
    image: string,
    descriptionFile: string,
    githubLink?: string,
    liveDeploymentLink?: string,
    dateDeveloped: Date,
}

export const projectsData: ProjectData[] = [
    {
        image: "",
        descriptionFile: "",
        dateDeveloped: new Date(),
    }
]