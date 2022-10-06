import React from "react"
import Project from "./Project"
import "../styles/projects.css"

// A list of all individual projects to display on the website
export default function Projects() {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <Project 
                link={"http://www.fantasycharactermaker.com/"}
                title={"Fantasy Character Creator"}
                description={"I made this website to help master the back end and front end skills I learned. It is made using the MERN Stack, and helps guide you through creating a fantasy character for a book, game, or short story."}
                githubLink={"https://github.com/mikemiller97/fantasy-character-creator"}
                imageLink={"https://i.imgur.com/ohwyjpt.png"}
            />
            <Project 
                link={"http://www.worldflagtest.com/"}
                title={"Flag Quiz"}
                description={"This websie is quiz game! The player must correctly guess which flag is displayed. If the player lets time run out or guesses incorrectly 3 times it's game over."}
                githubLink={"https://github.com/mikemiller97/flag-quiz"}
                imageLink={"https://i.imgur.com/vB9ZbNc.png"}
            />
            <Project 
                link={"http://www.randomciv5maps.com"}
                title={"Civilization V Random Map Selector"}
                description={"This was made as a companion to go with the video game Civilization V. The original game does not have a random map selector that cycles through all of the maps the game has to offer. This website does exactly that and recommends a map for the user to play."}
                githubLink={"https://github.com/mikemiller97/civ-v-map"}
                imageLink={"https://i.imgur.com/6oVJhlj.png"}
            />
        </div>
    )
}