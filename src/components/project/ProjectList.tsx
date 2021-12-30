import React from "react";
import {Projects} from "../../types/apis";
interface Props {
    projects: Projects;
}
export const ProjectList: React.FC<Props> = ({projects}) => {
    return (
    <div
        className=" flex-col my-2 overflow-x-auto">
        <div
            className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div
                className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table
                    className="min-w-full divide-y divide-gray-200">
                    <thead
                        className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            id
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Project
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tag
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            updating?
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            description
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Project Link
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Demo Link
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {projects.projects && projects.projects.map((project, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center ">
                                    <div className="ml-0">
                                        <div
                                            className="text-sm font-medium text-gray-900">{project.name}</div>
                                        <div className="text-sm text-gray-500">{project.type}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.tag}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {(project.isUpdating ?
                                        <span
                                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                updating</span> :
                                        <span
                                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                completed</span>
                                )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.description}</td>
                            {project.demoLink.length > 0 && <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href={project.repoLink}
                                      className="text-indigo-600 hover:text-indigo-900">
                                    show Detail
                                </a>
                            </td>}
                            {project.demoLink.length > 0 && <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href={project.demoLink}
                                   className="text-indigo-600 hover:text-indigo-900">
                                    show demo
                                </a>
                            </td>}

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);
}