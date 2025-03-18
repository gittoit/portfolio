import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Spark",
    "Big Data",
    "CI/CD",
    "Trello",
    "JIRA"
];

const labelsThird = [
    "Cisco",
    "Juniper",
    "TCP/IP",
    "VLANs",
    "Subnets",
    "VMware",
    "VPNs",
    "Firewalls",
    "IDS",
    "Wireshark",
    "Cisco Packet Tracer",
    "AWS",
    "Azure",
    "Docker",
    "Power BI",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Web Application Development</h3>
                    <p>I have built and deployed a variety of web applications using modern frameworks like React.js and Flask. I am proficient in designing scalable architectures and integrating backend APIs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Cloud Infrastructure</h3>
                    <p>Experienced in setting up CI/CD pipelines, managing cloud deployments, and automating DevOps workflows for scalable production environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Networking & Infrastructure</h3>
                    <p>
                        Experienced in network design, virtualization, and security, with hands-on expertise in Cisco and Juniper networking equipment. 
                        Skilled in network planning, configuration, and performance optimization for large-scale deployments.                    </p>
                     <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;
