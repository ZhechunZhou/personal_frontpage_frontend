import React, {useEffect, useState} from "react";
import {Navbar} from "../navbar/Navbar";
import {Link} from "react-router-dom";
import ForceGraph3D, {GraphData} from 'react-force-graph-3d';
import SpriteText from "three-spritetext";

export const HomePage: React.FC = () => {
    const [graph, setGraph] = useState({} as GraphData);
    const getGraph = () => {
        fetch('./forceGraph.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json()).then(data => setGraph(data))
    }
    useEffect(() => {
        getGraph()
    }, [])


    return (<><Navbar/>

        {/*Introduction Section*/}
        <section className="bg-white mt-10">
            <div className="inline-flex h-1/2">
                <div className="flex-auto ml-32 mr-40 mt-28">
                    <div className="max-w-2xl px-6 text-left mx-auto">
                        <h2 className="text-3xl font-semibold text-gray-800">Hi, I am <span
                            className="text-indigo-700">Andy</span><br/> Nice to meet you!</h2>
                        <p className="text-gray-600 mt-4">I am a book reader, a code crafter and a happy octocat!
                            <svg width="20px" height="20px" aria-hidden="true" focusable="false" data-prefix="fab"
                                 data-icon="github-alt"
                                 className="svg-inline--fa fa-github-alt fa-w-15 inline-flex" role="img"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 480 512">
                                <path fill="currentColor"
                                      d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
                            </svg>
                            <br/>
                            <Link
                                className={
                                    "bg-indigo-600 text-white rounded hover:text-gray-300 inline-flex font-bold p-1.5"}
                                to="/about">
                                Contact me?
                            </Link>
                            <Link
                                className={
                                    "mx-2 bg-gray-200 text-gray-400 rounded hover:text-gray-800 inline-flex font-bold p-1.5"}
                                to="/products">
                                see what I can do?
                            </Link>
                        </p>

                        <div className="flex items-end justify-center mt-16">
                            <svg width="189" height="60" viewBox="0 0 189 188" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">

                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="188.148" height="188.148" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="flex-autox">
                    {graph && graph.links != undefined && <ForceGraph3D
                        graphData={graph}
                        nodeAutoColorBy="group"
                        backgroundColor="white"
                        linkVisibility={true}
                        linkColor="black"
                        linkOpacity = {1}
                        width={800}
                        height={615}
                        showNavInfo = {false}
                        nodeThreeObject={(node: { id: string | undefined; color: string; }) => {
                            const sprite = new SpriteText(node.id);
                            sprite.color = node.color;
                            sprite.textHeight = 8;
                            return sprite;}}
                            />}
                        </div>
                        </div>
                        </section>


                            {/*About Me*/
                            }
                            <div className="bg-no-repeat bg-center bg-cover z-0 -mb-5 container w-40 mx-auto flex h-40"
                                 style={{
                                     backgroundImage: `url('octocat.jpeg')`
                                 }}>
                            </div>
                            <section className="z-30 bg-black pattern py-20">

                                <div className="max-w-5xl px-6 mx-auto text-center">
                                    <h2 className="text-2xl font-semibold text-white">About Me</h2>

                                    <p className="text-gray-400 mt-4">There are a lot to say.</p>
                                </div>
                            </section>

                        </>);
                        }