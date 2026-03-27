import './App.css';
import ProfilePic from './ProfilePic.jpg';
import Education from './Education';
function App() {
  const projects = [
    {
      name: 'Killowat Calculator',
      tech: 'React',
      status: 'Finished',
      description: 'A clean electricity usage calculator with instant cost estimates and responsive UI.',
    },
    {
      name: 'POS System (PWA)',
      tech: 'HTML, CSS, JS',
      status: 'Ongoing',
      description: 'A progressive web app for quick checkout, inventory tracking, and offline-ready sales.',
    },
    {
      name: 'Jersey Online Shop',
      tech: 'HTML, CSS, JS',
      status: 'Finished',
      description: 'An ecommerce storefront for jersey catalogs, product details, and a simple cart flow.',
    },
  ];

  const skills = [
    { name: 'HTML', level: 35 },
    { name: 'CSS', level: 35 },
    { name: 'JavaScript', level: 60 },
    { name: 'React', level: 70 },
    { name: 'MySQL', level: 55 },
    { name: 'Photoshop', level: 75 },
  ];

  return (
    <div className="App">
      <title> Kurt Vincent Sintos | Portfolio </title>
      <header className="appHeader">
        <h3 className='headerTitle'> Portfolio </h3>
        <nav className="navBar">
          <a className='navOption' href="#education">Education</a>
          <a className='navOption' href="#projects">Projects</a>
          <a className='navOption' href="#experience">Experience</a>
          <a className='navOption' href="#skills">Skills</a>
        </nav>
      </header>
      <div className='divider'></div>

      <main className="mainContent">
        <div className="Introduction">
          <img src={ProfilePic} alt="Profile Picture" className="profilePicture" /> 
          <div className="namecrs">
          <h1> Kurt Vincent Sintos</h1>
          <h2> BS-Information Technology Student </h2>
          <p className="introText">
            Current BS-IT student at Ateneo de Davao University, passionate about expanding my
            repertoire to become knowledgeable in every aspect of tech.
          </p>
          </div>
          <div className="contactInfo"> 
            <div className="details">
              <span className="detailLabel">
                <span className="detailIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.01L12 12l8-4.99V7H4zm0 10h16V9.24l-8 5-8-5V17z" />
                  </svg>
                </span>
                Email
              </span>
              <span>kurtsintos30@gmail.com</span>
            </div>
            <div className="details">
              <span className="detailLabel">
                <span className="detailIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.3 21.01 3 13.7 3 4.99a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.23.2 2.42.57 3.56a1 1 0 0 1-.25 1.02l-2.2 2.22z" />
                  </svg>
                </span>
                Phone
              </span>
              <span>0992-2304-019</span>
            </div>
            <div className="details">
              <span className="detailLabel">
                <span className="detailIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7zm0 9.5A2.5 2.5 0 1 0 12 6a2.5 2.5 0 0 0 0 5.5z" />
                  </svg>
                </span>
                Address
              </span>
              <span>Panacan Relocation, Davao City</span>
            </div>
            <div className="details">
              <span className="detailLabel">
                <span className="detailIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <path d="M13 9h3V6h-3c-2.21 0-4 1.79-4 4v2H7v3h2v7h3v-7h3l1-3h-4v-2c0-.55.45-1 1-1z" />
                  </svg>
                </span>
                Facebook
              </span>
              <a href='https://www.facebook.com/KurtSintos30/'>Kurt Sintos</a>
            </div>
          </div>
        </div>
      </main>
      <div className='portDetails'>
        <section className="section" id="education">
          <h2 className="sectionTitle">Education</h2>
          <div className="cardGrid">
            <Education school = "Ateneo de Davao University" degree = "Bachelor of Science in Information Technology" timeline = "2024 - 2026" />
            <Education school = "Davao City National High School" degree = "TVL - Programming " timeline = "2022 - 2024" />
          </div>
        </section>

        <section className="section" id="projects">
          <h2 className="sectionTitle">Projects</h2>
          <div className="projectGrid">
            {projects.map((project) => (
              <div className="projectCard" key={project.name}>
                <div className="projectHeader">
                  <h3>{project.name}</h3>
                  <span className={`statusBadge ${project.status === 'Finished' ? 'isDone' : 'isWip'}`}>
                    {project.status}
                  </span>
                </div>
                <p className="projectMeta">Tech: {project.tech}</p>
                <p className="projectDesc">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <h2 className="sectionTitle">Work Experience</h2>
          <div className="experienceCard">
            <div>
              <div className="experienceRole">Jersey Layout Artist</div>
              <p className="experienceDesc">
                Designed jersey layouts, refined typography and color palettes, and prepared print-ready
                files in collaboration with production teams.
              </p>
            </div>
            <div className="experienceMeta">2023 - 2026</div>
          </div>
        </section>

        <section className="section" id="skills">
          <h2 className="sectionTitle">Tech Skills</h2>
          <div className="skillsGrid">
            {skills.map((skill) => (
              <div className="skillRow" key={skill.name}>
                <div className="skillLabel">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skillBar">
                  <div className="skillFill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

    </div>
  );
}

export default App;
