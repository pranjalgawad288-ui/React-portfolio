function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub"];

  return (
    <section className="section">
      <h2>Skills</h2>

      <div className="skills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;