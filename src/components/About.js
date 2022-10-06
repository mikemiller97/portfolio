import React from "react"
import "../styles/about.css"

export default function About() {
    return (
        <div className="about">
            <h1>About me</h1>
            <div className="about-me">
                <p>I am an online Computer Science student at Southern New Hampshire University and currently living in Austin, Texas. I have a passion for programming and learned web development so I can pursue that passion as a career while in school.</p>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ul className="skills-list">
                    <li>MERN Stack (MongoDB, Express, React, NodeJS)</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>Python</li>
                    <li>Git</li>
                    <li>HTML/CSS</li>
                </ul>
            </div>
        </div>
    )
}