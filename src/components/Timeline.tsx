import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faStar } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug. 2024 - Feb. 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Network Engineering Research Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Buffalo, NY</h4>
            <p>
            Network Planning, Network Architecture, Network Engineering, Network Device Configuration using Cisco and Juniper            
              Network Emulation/Virtualization, Network Analysis, and Network Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct. 2023 - June 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Computer Network Architect</h3>
            <h4 className="vertical-timeline-element-subtitle">Buffalo, NY</h4>
            <p>
            Network Emulation/Virtualization, Network Analysis, and Network Design           
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb. 2024 - May 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Technical Project Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Buffalo, NY</h4>
            <p>
              Agile Methodologies (Scrum, Kanban, JIRA), A/B Testing, Project Planning, Microsoft Excel, Code Quality
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Aug. 2021 - May 2025"
            iconStyle={{ background: 'rgb(0, 91, 187)', color: 'rgb(255, 255, 255)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">SUNY University at Buffalo</h3>
            <h4 className="vertical-timeline-element-subtitle">Buffalo, NY</h4>
            <p> 
            Bachelor of Science in Computer Science 
            </p>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug. 2019 - Aug. 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">After-School & Summer Camp Counselor</h3>
            <h4 className="vertical-timeline-element-subtitle">Brooklyn, NY</h4>
            <p>
              Developed strong leadership, effective communication, and mentoring skills.
              Supervised and engaged with students in after-school activities.   
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sept. 2017 - June 2021"
            iconStyle={{ background: 'rgb(0, 91, 187)', color: 'rgb(255, 255, 255)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">New Utrecht High School</h3>
            <h4 className="vertical-timeline-element-subtitle">Brooklyn, NY</h4>
            <p> 
            High School Diploma
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2003"
            icon={<FontAwesomeIcon icon={faStar} />}
            iconStyle={{ background: 'rgb(16, 204, 82)', color: 'rgb(255, 255, 255)' }}
          >
            <h3 className="vertical-timeline-element-title">Brooklyn, NY</h3>
          </VerticalTimelineElement>
          
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;