export type ProjectData = {
    image: string,
    descriptionFile: string,
    githubLink?: string,
    liveDeploymentLink?: string,
    dateDeveloped: Date,
}

export const projectsData: ProjectData[] = [
    {
        image: "https://cdn.discordapp.com/attachments/1361020215860924599/1361020242578641078/snooker3.gif?ex=67fd3c60&is=67fbeae0&hm=024a0323d3fba5169cd04cefe00997fc3b7af0e792397c0e8843414f2eb0cb26&",
        descriptionFile: "markdown/projects/pool.md",
        dateDeveloped: new Date(Date.parse("1 Apr 2016")),
    },
    {
        image: "https://cdn.discordapp.com/attachments/1361020215860924599/1361024026339709138/krooza.gif?ex=67fd3fe6&is=67fbee66&hm=0318a440ea986db645b1e456e20c3fd88e225c8f266d2853957357546ad3259d&",
        descriptionFile: "markdown/projects/krooza.md",
        dateDeveloped: new Date(Date.parse("1 Oct 2016")),
    },
    {
        image: "/images/placeholder.jpg",
        descriptionFile: "markdown/projects/portfolio-v1.md",
        dateDeveloped: new Date(Date.parse("1 Jul 2019")),
    },
    {
        image: "/images/placeholder.jpg",
        descriptionFile: "markdown/projects/ar-mobile-app.md",
        dateDeveloped: new Date(Date.parse("1 Oct 2018")),
    },
    {
        image: "/images/placeholder.jpg",
        descriptionFile: "markdown/projects/microbit-mesh.md",
        dateDeveloped: new Date(Date.parse("1 Oct 2017")),
    },
    {
        image: "/images/placeholder.jpg",
        descriptionFile: "markdown/projects/nlp-language-classifier.md",
        dateDeveloped: new Date(Date.parse("1 Oct 2018")),
    },
    {
        image: "/images/placeholder.jpg",
        descriptionFile: "markdown/projects/enterprise-social-network.md",
        dateDeveloped: new Date(Date.parse("1 Jan 2019")),
    },
    {
        image: "/images/placeholder.jpg",
        descriptionFile: "markdown/projects/distributed-auction-system.md",
        dateDeveloped: new Date(Date.parse("1 Nov 2017")),
    },
    {
        image: "/images/placeholder.jpg",
        descriptionFile: "markdown/projects/distributed-storage-worker.md",
        dateDeveloped: new Date(Date.parse("1 Nov 2018")),
    }
]
