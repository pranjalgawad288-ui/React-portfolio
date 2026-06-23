function Projects() {
  const projects = [
    {
      title: "To-Do App",
      description: "Task management app using React and LocalStorage"
    },
    {
      title: "Weather App",
      description: "Shows real-time weather using API"
    },
    {
      title: "Calculator",
      description: "Simple calculator built with React"
    }
  ];

  return (
    <section className="section">
      <h2>Projects</h2>

      {projects.map((p, i) => (
        <div className="card" key={i}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;