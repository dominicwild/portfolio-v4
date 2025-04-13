export type ProjectData = {
    image: string,
    descriptionFile: string,
    githubLink?: string,
    liveDeploymentLink?: string,
    dateDeveloped: Date,
}

const cdnRootUrl = "https://cdn.jsdelivr.net/gh/dominicwild/portfolio-v4@master/resources"

export const projectsData: ProjectData[] = [
    {
        image: `${cdnRootUrl}/snooker3.gif`,
        descriptionFile: "markdown/projects/pool.md",
        dateDeveloped: new Date(Date.parse("1 Apr 2016")),
    },
    {
        image: `${cdnRootUrl}/krooza-small.gif`,
        descriptionFile: "markdown/projects/krooza.md",
        dateDeveloped: new Date(Date.parse("1 Oct 2016")),
    },
    {
        image: `${cdnRootUrl}/portfolio-site.png`,
        descriptionFile: "markdown/projects/portfolio-v1.md",
        dateDeveloped: new Date(Date.parse("1 Jul 2019")),
    },
    {
        image: `${cdnRootUrl}/heart.gif`,
        descriptionFile: "markdown/projects/ar-mobile-app.md",
        dateDeveloped: new Date(Date.parse("1 Oct 2018")),
    },
    {
        image: `${cdnRootUrl}/microbit.jpg`,
        descriptionFile: "markdown/projects/microbit-mesh.md",
        dateDeveloped: new Date(Date.parse("1 Oct 2017")),
    },
    {
        image: `${cdnRootUrl}/nlp.png`,
        descriptionFile: "markdown/projects/nlp-language-classifier.md",
        dateDeveloped: new Date(Date.parse("1 Oct 2018")),
    },
    {
        image: `${cdnRootUrl}/social2.gif`,
        descriptionFile: "markdown/projects/enterprise-social-network.md",
        dateDeveloped: new Date(Date.parse("1 Jan 2019")),
    },
    {
        image: `${cdnRootUrl}/auction_system.gif`,
        descriptionFile: "markdown/projects/distributed-auction-system.md",
        dateDeveloped: new Date(Date.parse("1 Nov 2017")),
    },
    {
        image: `${cdnRootUrl}/dht.png`,
        descriptionFile: "markdown/projects/distributed-storage-worker.md",
        dateDeveloped: new Date(Date.parse("1 Nov 2018")),
    }
]
