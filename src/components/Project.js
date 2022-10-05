import React from "react"
import "../styles/project.css"

export default function Project(props) {
    return (
        <div className="project">
            <div className="project-info">
                <h2><a href={props.link}>{props.title}</a></h2>
                <p>{props.description}</p>
                <a href={props.githubLink}><img src="https://i.imgur.com/aHkrIvi.png" alt="github logo" /></a>
            </div>
            <img src={props.imageLink} alt={props.imageDescription} className="project-image" />
        </div>
    )
}