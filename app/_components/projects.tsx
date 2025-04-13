import React from "react";
import {Card, CardContent, CardImage} from "@/components/ui/card";
import {ProjectData, projectsData} from "@/app/_components/projectsData";

import * as fs from "node:fs";
import Markdown from "@/app/_components/Markdown";

const Project = ({project}: { project: ProjectData }) => {
    const markdown = fs.readFileSync(project.descriptionFile, "utf8");
    return (
        <Card className={"w-[32%]"} key={project.descriptionFile}>
            <CardImage
                src={project.image}
                alt=""
                className={"h-[20rem]"}
            />
            <CardContent className={" "}>
                <Markdown>
                    {markdown}
                </Markdown>
            </CardContent>
        </Card>
    );
};

export const Projects = () => {
    return (
        <div className={"flex gap-x-4 gap-y-4 w-[75%] mx-auto flex-wrap"}>
            {
                projectsData.map((data) => (
                    <Project project={data} key={data.descriptionFile}/>
                ))
            }
        </div>
    );
};