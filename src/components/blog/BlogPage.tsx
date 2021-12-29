import React, {useEffect, useState} from "react";
import {Navbar} from "../navbar/Navbar";
import {Blogs} from "../../types/apis";


export const BlogPage: React.FC = () => {
    const [blogs, setBlogs] = useState({} as Blogs);
    const getBlogs = () => {
        fetch('./json/blogs.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json()).then(data => setBlogs(data))
    }

    useEffect(() => {
        getBlogs()
        console.log(blogs)
    }, [])
    return (<>
            <Navbar/>
            <div className="px-6 py-8">
                <div className="container flex justify-between mx-auto">
                    {/*Left Side*/}
                    <div className="w-full lg:w-8/12">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xxl font-bold text-gray-700 md:text-2xl">My Blogs</h1>
                        </div>

                        {/*blogs*/}
                        {blogs && blogs.blogs && blogs.blogs.map((blog, index) => {
                            return (
                                <div className="mt-6">
                                    <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                                        <div className="flex items-center justify-between">
                                            <span className="font-light text-gray-600">{blog.date}</span>
                                            <a href="#"
                                               className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">{blog.class}</a>
                                        </div>
                                        <div className="mt-2">
                                            <a href={blog.link}
                                               className="text-2xl font-bold text-gray-700 hover:underline">{blog.title}</a>
                                            <p className="mt-2 text-gray-600">{blog.description}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <a href={blog.link} className="text-blue-500 hover:underline">Read more</a>
                                            <div>
                                                <a href="#" className="flex items-center">
                                                    <img src={blog.image} alt="tag"
                                                         className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        })}

                    </div>

                    {/*category*/}
                    <div className="hidden w-4/12 -mx-8 lg:block">
                        <div className="px-8">
                            <h1 className="mb-4 text-xl font-bold text-gray-700">Topics</h1>
                            <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                                <ul className="-mx-4">
                                    <li className="flex items-center">
                                        <img src={`./image/AWS-logo-2.jpeg`} alt="tag"
                                             className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                                        <p>
                                            <a href="#" className="mx-1 font-bold text-gray-700 hover:underline">AWS</a>
                                            <span className="text-sm font-light text-gray-700">0  Posts</span>
                                        </p>
                                    </li>
                                    <li className="flex items-center mt-6">
                                        <img src={`./image/go-logo.png`} alt="tag"
                                             className="hidden object-contain scale-75 w-10 h-10 mx-4 rounded-full sm:block"/>
                                        <p><a href="#"
                                              className="mx-1 font-bold text-gray-700 hover:underline">GoLang</a><span
                                            className="text-sm font-light text-gray-700">0 Posts</span></p>
                                    </li>
                                    <li className="flex items-center mt-6">
                                        <img src={`./image/java-logo.png`} alt="tag"
                                             className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                                        <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Java</a><span
                                            className="text-sm font-light text-gray-700">0 Posts</span></p>
                                    </li>
                                    <li className="flex items-center mt-6"><img src={`./image/system-logo.png`}
                                                                                alt="tag"
                                                                                className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                                        <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">System
                                            design</a><span
                                            className="text-sm font-light text-gray-700">0 Posts</span></p>
                                    </li>
                                    <li className="flex items-center mt-6"><img src={`./image/LeetCode_logo.png`}
                                                                                alt="tag"
                                                                                className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                                        <p><a href="#"
                                              className="mx-1 font-bold text-gray-700 hover:underline">Algorithm</a><span
                                            className="text-sm font-light text-gray-700">0 Posts</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}