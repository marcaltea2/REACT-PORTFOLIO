import ProjectsData from "../../data/projects_data";

const Project = () => {
  const projects = ProjectsData();

  return (
    <div className="flex justify-center flex-wrap gap-8">
      {projects.map((project) => (
        <div
          key={project.ID}
          className="card bg-base-100 shadow-xl rounded-xl overflow-hidden w-full sm:w-96 md:w-[450px] lg:w-[500px]"
        >
          {/* Image */}
          <figure>
            <img
              src={project.URL}
              alt={project.Title}
              className="object-contain h-48 md:h-full w-full p-4 rounded-lg"
            />
          </figure>

          {/* Card Body */}
          <div className="card-body p-6">
            <h3 className="text-2xl font-bold mb-2">{project.Title}</h3>
            <p className="text-gray-700">{project.Tagline}</p>
            <div className="card-actions justify-end pt-2">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
