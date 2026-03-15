import { useEffect, useState } from 'react';

export default function About({getRandomColor}) {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/portfolio.json')
      .then((res) => res.json())
      .then((data) => setAbout(data.about))
      .catch((err) => console.error('Failed to load data:', err));
  }, []);

  const profilePicture = about.profilePicture;
  const bio = about.bio;

  return (
    <div className="about-container">
      <div className="about-bio-container">
        <div className="about-bio">
          <h1>About Me</h1>

          <div className="button-group">
            <a className="braces-button" href={process.env.PUBLIC_URL + about?.contact?.cv?.eng} target="_blank" rel="noopener noreferrer">
              {"Open CV [ENG]"}
            </a>
            &nbsp;
            <a className="braces-button" href={process.env.PUBLIC_URL + about?.contact?.cv?.cz} target="_blank" rel="noopener noreferrer">
              {"Open CV [CZ]"}
            </a>
            &nbsp;
            <a className="braces-button" href={about?.contact?.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
            </a> 
          </div>
          &nbsp;
          {bio && <p>{bio}</p>}     
        </div> 
        {profilePicture && (
          <div className="about-profile-picture">
            <img
              src={process.env.PUBLIC_URL + profilePicture}
              alt="Profile"
            />
          </div>
        )}
      </div>

      {Object.entries(about)
        .filter(([sectionTitle]) => sectionTitle !== 'bio')
        .filter(([sectionTitle]) => sectionTitle !== 'profilePicture')
        .slice(1).map(([sectionTitle, content]) => (
        <section key={sectionTitle}>
          <h3 style={{color: getRandomColor()}}>{sectionTitle.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
          
          {typeof content === 'string' && (
            <p>{content}</p>
          )}

          {typeof content === 'object' && content !== null && (
            <ul className="subsection">
              {Object.entries(content).map(([subKey, subValue]) => (
                <li key={subKey}>
                  <strong>{subKey}:</strong> {subValue}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
