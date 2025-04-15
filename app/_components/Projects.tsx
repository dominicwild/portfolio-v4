import React, {ReactElement} from "react";
import {Card} from "@/components/ui/card";
import {ProjectData, projectsData} from "@/app/_components/projectsData";
import * as fs from "node:fs";
import ExpandableContent from "@/app/_components/ExpandableContent";
import {Button} from "@/components/ui/button";
import {SiGithub} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import {ExternalLink} from "lucide-react";
import {PopoutCard} from "@/app/_components/PopoutCard";

const GitHubButton = ({link}: { link: string }) => {
    return (
        <Button asChild className={"bg-[#181717] hover:bg-[#24292e] cursor-pointer"}>
            <Link href={link} target={"_blank"}>
                <SiGithub/>
                Repo
                <ExternalLink className={"ml-2"}/>
            </Link>
        </Button>
    )
}

const Project = ({project}: { project: ProjectData }) => {
    const markdown = fs.readFileSync(project.descriptionFile, "utf8");
    const buttons: ReactElement[] = []

    if (project.githubLink) {
        buttons.push(<GitHubButton link={project.githubLink} key="github"/>)
    }

    const dateString = new Intl.DateTimeFormat("en-GB", {
        month: "short",
        year: "numeric",
    }).format(project.dateDeveloped);

    return (
        <Card className={"lg:w-[31%] md:w-[45%] sm:w-full w-full flex flex-col gap-y-2"} key={project.descriptionFile}>
            <PopoutCard imageUrl={project.image}/>
            <div className={"px-6"}>
                {buttons}
            </div>
            <div className={"text-sm text-gray-500 px-6 italic"}>
                {dateString}
            </div>
            <ExpandableContent markdown={markdown}/>
        </Card>
    );
};

export const Projects = () => {
    return (
        <div className={"flex gap-x-4 gap-y-4 w-[75%] mx-auto flex-wrap items-start"}>
            {
                projectsData.map((data) => (
                    <Project project={data} key={data.descriptionFile}/>
                ))
            }
        </div>
    );
};