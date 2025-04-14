import React from "react";
import {Card, CardContent, CardImage} from "@/components/ui/card";
import {ProjectData, projectsData} from "@/app/_components/projectsData";
import * as fs from "node:fs";
import ExpandableContent from "@/app/_components/ExpandableContent";

const Project = ({project}: { project: ProjectData }) => {
    const markdown = fs.readFileSync(project.descriptionFile, "utf8");

    return (
        <Card className={"w-[32%] flex flex-col"} key={project.descriptionFile}>
            <CardImage
                src={project.image}
                alt=""
                className={"h-[20rem]"}
            />
            <ExpandableContent markdown={markdown}/>
        </Card>
    );
};

export const Projects = () => {
    return (
        <div className={"flex gap-x-4 gap-y-3 w-[75%] mx-auto flex-wrap items-start"}>
            {
                projectsData.map((data) => (
                    <Project project={data} key={data.descriptionFile}/>
                ))
            }
        </div>
    );
};