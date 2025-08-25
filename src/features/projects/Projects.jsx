import ProjectCard from "../../components/card/project_card";

const Project = () => {
  return (
    <div className="px-4 sm:px-4 md:px-6 lg:px-10 py-20" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <ProjectCard />
    </div>
  );
};

export default Project;
