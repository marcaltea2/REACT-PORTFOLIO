import { useParams } from "react-router-dom";
import ProjectsData from "../data/projects_data";
import StackIconsData from "../data/StackIcons_data";
import MainLayout from "../layouts/MainLayout";
import Footer from "../components/footer/Footer";
import Stats from "../components/stats/Stats";
import { StarIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { HashLink } from "react-router-hash-link";
import ImageSlider from "../components/imageslider/ImageSlider";

const ProjectPage = () => {
  const { Slug } = useParams();
  const projects = ProjectsData();
  const stackIcons = StackIconsData();

  const project = projects.find((p) => p.Slug === Slug);
  const projectStackIcons = stackIcons.filter((icon) =>
    project.TechnologiesUsed.includes(icon.Title)
  );

  if (!project) {
    return (
      <h1 className="text-center mt-32 text-3xl font-semibold text-gray-800">
        Project not found
      </h1>
    );
  }

  return (
    <MainLayout>
      <div className="px-4 sm:px-6 lg:px-20 py-12 max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="breadcrumbs text-sm mb-8 text-gray-500">
          <ul className="flex flex-wrap gap-2">
            <li>
              <HashLink smooth to={"/"} className="hover:underline">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={"/#projects"} className="hover:underline">
                Projects
              </HashLink>
            </li>
            <li className="text-gray-800 font-medium">{project.Title}</li>
          </ul>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight">
              {project.Title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              {project.Description}
            </p>

            {/* Stats Section */}
            <div className="mb-10">
              <Stats
                featuresCount={project.KeyFeatures.length}
                technologiesUsed={projectStackIcons.length}
              />
            </div>

            {/* Technologies Used */}
            <div className="p-6 rounded-2xl shadow-md mt-6">
              <h3 className="text-xl lg:text-2xl font-semibold mb-5 flex items-center text-gray-900">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <CodeBracketIcon className="w-6 h-6 text-blue-600" />
                </div>
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-5">
                {projectStackIcons.map((icon) => (
                  <div
                    key={icon.Title}
                    className="flex flex-col items-center text-xs lg:text-sm text-gray-700"
                  >
                    <div className="bg-white rounded-full p-3 shadow-sm">
                      <img
                        src={icon.URL}
                        alt={icon.Title}
                        className="w-10 h-10 lg:w-12 lg:h-12"
                      />
                    </div>
                    <span className="mt-2 font-medium">{icon.Title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <ImageSlider images={project.Images} />
            {/* Key Features */}
            <div className="bg-white rounded-2xl shadow-md p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-5 flex items-center">
                <div className="bg-yellow-100 rounded-full p-2 mr-3">
                  <StarIcon className="w-6 h-6 text-yellow-500" />
                </div>
                Key Features
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 text-base lg:text-lg leading-relaxed">
                {project.KeyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </MainLayout>
  );
};

export default ProjectPage;
