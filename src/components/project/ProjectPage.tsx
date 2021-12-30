import React, {useEffect, useState} from "react";
import {Navbar} from "../navbar/Navbar";
import {Projects} from "../../types/apis";
import {SideBar} from "./sidebar/SideBar";
import {ProjectList} from "./ProjectList";
import {useSelector} from "react-redux";
import {getProjectState} from "../../selector";

export const ProjectPage: React.FC = () => {
    const [projects, setProjects] = useState({} as Projects);
    const getProject = () => {
        fetch('./json/projects.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json()).then(data => setProjects(data))
    }

    let filteredProjects = {projects: []} as Projects;
    let {filter} = useSelector(getProjectState)

    useEffect(() => {
        getProject()
    }, [])

    useEffect(() => {
        filteredProjects = projects
        if (filter.length != 0) {
            filteredProjects.projects.filter(function (item) {
                return item.type === filter
            })
        }

    }, [filter, projects])

    return (<>
        <Navbar/>
        <main className="profile-page relative min-h-screen flex">
            <SideBar/>
            <div className={"flex flex-wrap"}>
                <ProjectList projects={projects}/>
            </div>
        </main>
    </>);
}