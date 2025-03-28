import React from "react";
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
        <div className="project">
                <a href="https://github.com/gittoit/pa1-tlee47-zowraizq/pa1" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" height="70%" width="100%"/></a>
                <a href="https://github.com/gittoit/pa1-tlee47-zowraizq/pa1" target="_blank" rel="noreferrer"><h2>C: Socket Programming</h2></a>
                <p>Developed a text chat application in C, employing concurrency patterns, secure TCP socket programming, and login logic for real-time communication across multiple servers.</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/drive/folders/1_AOm726Gj1hv6N3bEcRVsm9F-AwfZGYH?usp=sharing" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/drive/folders/1_AOm726Gj1hv6N3bEcRVsm9F-AwfZGYH?usp=sharing" target="_blank" rel="noreferrer"><h2>WireShark Labs</h2></a>
                <p>Utilized Wireshark to capture network traffic and analyze the protocols encapsulated within transmitted frames.</p>
            </div>    
            <div className="project">
                <a href="https://github.com/gittoit/campusfoodsocial" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" height="70%" width="100%"/></a>
                <a href="https://github.com/gittoit/campusfoodsocial" target="_blank" rel="noreferrer"><h2>Campus Food Social</h2></a>
                <p>Built a restaurant app for 30,000 UB students, enabling real-time reviews, chat, and dining info using React, Node.js, and Express.</p>
            </div>
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
                <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;