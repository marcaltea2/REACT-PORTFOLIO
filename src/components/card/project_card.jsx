import ProjectsData from "../../data/projects_data";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import GitHubIcon from "../../assets/icons/GitHub.svg";

const Project = () => {
  const projects = ProjectsData();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 py-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.ID}
            className="card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            {/* Image */}
            <figure className="relative w-full h-52 bg-gray-50 flex items-center justify-center">
              <img
                src={project.URL}
                alt={project.Title}
                className="object-contain h-full w-full p-4"
              />
            </figure>

            {/* Card Body */}
            <div className="card-body p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {project.Title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2 flex-grow">
                {project.Tagline}
              </p>

              {/* Actions */}
              <div className="card-actions mt-4 flex items-center justify-between">
                {/* GitHub Link */}
                {project.Github && (
                  <a
                    href={project.Github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                  >
                    <img src={GitHubIcon} alt="GitHub" className="w-6 h-6" />
                    <span className="text-sm">GitHub</span>
                  </a>
                )}

                {/* Details Button */}
                <Link to={`/Project/${project.Slug}`}>
                  <button className="btn btn-primary flex items-center gap-2">
                    Details
                    <ArrowRightIcon className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
