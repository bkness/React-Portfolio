
import Project from "../components/Project";

function Portfolio() {
  // fill in the required data, image file should be in the assets/projects folder and name should match the "default as " statment in index.js
  const projects = [
    {
      name: "Tech Blog",
      description: "Node/JS/CSS/Handlebars",
      link: "https://mvc--tech-blog-715ec89956fb.herokuapp.com/",
      repo: "https://github.com/bkness/MVC-Tech-Blog",
      image: "blog",
    },
    {
      name: "Random Cocktail Generator",
      description: "HTML/JS/CSS ",
      link: "https://bkness.github.io/Random-Cocktail-API",
      repo: "https://github.com/bkness/Random-Cocktail-API",
      image: "cocktail",
    },
    {
      name: "Open Weather Database",
      description: "HTML/CSS/JS/OpenWeatherAPI",
      link: "https://bkness.github.io/open-weather-api",
      repo: "https://github.com/bkness/open-weather-api",
      image: "weather",
    },
    {
      name: "Video Game Hub",
      description: "React/Express/Graphql/Mongo/Redux",
      link: "https://video-game-hub.onrender.com/",
      repo: "https://github.com/bkness/video-game-hub-project3",
      image: "game",
    },
    {
      name: "Key Generator",
      description: "HTML/CSS/JS",
      link: "https://bkness.github.io/javascript-key-generator",
      repo: "https://github.com/bkness/javascript-key-generator",
      image: "keygen",
    }
  ]
  // for each project, use the Project component to build a project
  return (
    <div>
      <div className="projects">
        {projects.map((project) => (
          <Project project={project} key={"project-" + project.name} />
       ))}
      </div>
    </div>
  );
}

export default Portfolio;