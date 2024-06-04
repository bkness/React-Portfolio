import * as projects from '../assets'
import './Project.css'

function Project({ project }) {
    const { name, repo, link, description, image } = project;
  
    return (
      <div className="project-item">
        <img src={projects[image]} alt={name} className="project-image" />
        <div className="project-title">
          <h1>
            <a href={link} target='_blank'>{name}</a>{' '}
            <a href={repo} target='_blank'>
              <i className="fab fa-github"></i>
            </a>
          </h1>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  
  export default Project;