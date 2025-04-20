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
        image: `${cdnRootUrl}/blog.png`,
        descriptionFile: "markdown/projects/blog.md",
        dateDeveloped: new Date(Date.parse("2 Apr 2025")),
        githubLink: "https://github.com/dominicwild/dom-blog",
        liveDeploymentLink: "blog.dominicwild.com",
    },
    {
        image: `${cdnRootUrl}/portfolio-v4.png`,
        descriptionFile: "markdown/projects/portfolio-v4.md",
        dateDeveloped: new Date(Date.parse("1 Apr 2025")),
        githubLink: "https://github.com/dominicwild/portfolio-v4",
    },
    {
        image: `${cdnRootUrl}/portfolio-site.png`,
        descriptionFile: "markdown/projects/portfolio-v1.md",
        dateDeveloped: new Date(Date.parse("1 Jul 2019")),
        githubLink: "https://github.com/dominicwild/Portfolio-Site",
    },
    {
        image: `${cdnRootUrl}/snooker3.gif`,
        descriptionFile: "markdown/projects/pool.md",
        dateDeveloped: new Date(Date.parse("1 Apr 2016")),
        githubLink: "https://github.com/dominicwild/Java-Pool-Game",
    },
    {
        image: `${cdnRootUrl}/krooza-small.gif`,
        descriptionFile: "markdown/projects/krooza.md",
        dateDeveloped: new Date(Date.parse("1 Oct 2016")),
        githubLink: "https://github.com/dominicwild/Krooza",
    },
    {
        image: `${cdnRootUrl}/heart.gif`,
        descriptionFile: "markdown/projects/ar-mobile-app.md",
        dateDeveloped: new Date(Date.parse("1 Oct 2018")),
        githubLink: "https://github.com/dominicwild/HEART",
    },
    {
        image: `${cdnRootUrl}/microbit.jpg`,
        descriptionFile: "markdown/projects/microbit-mesh.md",
        dateDeveloped: new Date(Date.parse("1 Oct 2017")),
        githubLink: "https://github.com/dominicwild/MicroBitMesh",
    },
    {
        image: `${cdnRootUrl}/nlp.png`,
        descriptionFile: "markdown/projects/nlp-language-classifier.md",
        dateDeveloped: new Date(Date.parse("1 Oct 2018")),
        githubLink: "https://github.com/dominicwild/Java-Corpus-Language-Classifier",
    },
    {
        image: `${cdnRootUrl}/social2.gif`,
        descriptionFile: "markdown/projects/enterprise-social-network.md",
        dateDeveloped: new Date(Date.parse("1 Jan 2019")),
        githubLink: "https://github.com/dominicwild/SocialNetwork",
    },
    {
        image: `${cdnRootUrl}/auction_system.gif`,
        descriptionFile: "markdown/projects/distributed-auction-system.md",
        dateDeveloped: new Date(Date.parse("1 Nov 2017")),
        githubLink: "https://github.com/dominicwild/Auction-System",
    },
    {
        image: `${cdnRootUrl}/dht.png`,
        descriptionFile: "markdown/projects/distributed-storage-worker.md",
        dateDeveloped: new Date(Date.parse("1 Nov 2018")),
        githubLink: "https://github.com/dominicwild/Distributed-Storage-Worker-System",
    }
].sort(
    (project, otherProject) => otherProject.dateDeveloped.getTime() - project.dateDeveloped.getTime()
)
