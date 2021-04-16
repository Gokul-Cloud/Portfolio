import React from 'react'
import Project from '../layouts/Project'
import {Chrono} from 'react-chrono';
import { projects, section3Title, section4Title, items } from '../../profile'

const Works = () => {

    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                    </div>
                </>
                <div className="row">
                {projects && projects.map((x) => 
                <Project id={x.id} url={x.url} name={x.name} skills={x.skills}/>
                )}
                
                </div>
                
            </div>
            <div>
           
            </div>

            <div className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section4Title}</h1>
                    </div>
                </>
                <div className="timeline" style={ {fontOpticalSizing:"1.3rem", width: "600px", height: "400px" }}>
                    <Chrono items={items} mode="VERTICAL_ALTERNATING" />
                </div>
            </div>
        </>
    )
}

export default Works
