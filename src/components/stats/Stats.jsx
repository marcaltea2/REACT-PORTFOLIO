import { StarIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const Stats = ({ featuresCount, technologiesUsed }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-6 w-full">
      {/* Technologies Stat */}
      <div className="flex items-center bg-white shadow-md rounded-xl p-4 flex-1">
        <div className="mr-4">
          <div className="bg-blue-100 rounded-full p-3 flex items-center justify-center">
            <CodeBracketIcon className="w-6 h-6 text-blue-500" />
          </div>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-800">Technologies</div>
          <div className="text-2xl font-bold text-gray-800">
            {technologiesUsed}
          </div>
        </div>
      </div>

      {/* Key Features Stat */}
      <div className="flex items-center bg-white shadow-md rounded-xl p-4 flex-1">
        <div className="mr-4">
          <div className="bg-yellow-100 rounded-full p-3 flex items-center justify-center">
            <StarIcon className="w-6 h-6 text-yellow-400" />
          </div>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-800">Key Features</div>
          <div className="text-2xl font-bold text-gray-800">
            {featuresCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
