import '../App.css';
import { useEffect, useState } from 'react';

export default function Projects({getRandomColor}) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/portfolio.json')
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
      .catch((err) => console.error('Failed to load projects:', err));
  }, []);

  return (
    <div className="projects-container">
      {projects.map((project, idx) => (
        <div key={idx} className='project-card'>
          <div className='project-img-wrapper'>
            <img src={process.env.PUBLIC_URL + project.img} alt=""/>
          </div>
          &nbsp;
          <h4 className='project-title'>{project.title}</h4>
          &nbsp;
          <div className='project-line'>{project.description}</div>
          &nbsp;
          <div className='button-group'>
            <a className="braces-button" href={process.env.PUBLIC_URL + project.file} target="_blank">Open PDF</a>
            <a className="braces-button" href={process.env.PUBLIC_URL + project.file} download="cv.pdf">Download PDF</a>
          </div>          
        </div>
      ))}
    </div>
  );
}