import StackData from "../../data/stack_data";
import StackIconsData from "../../data/StackIcons_data";

const Stack = () => {
  const data = StackData();
  const Icons = StackIconsData();
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-12">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-12">What I Do</h2>
      {/* Cards Container */}
      <div className="flex flex-col md:flex-col lg:flex-row flex-wrap justify-center gap-8">
        {data.map((stack) => (
          <div
            key={stack.ID}
            className="card card-side bg-base-100 shadow-xl rounded-xl overflow-hidden w-full sm:w-96 md:w-[450px] lg:w-[500px] transform hover:-translate-y-2 transition-transform duration-300"
          >
            {/* Image */}
            <figure className="w-1/3 md:w-1/3 lg:w-1/3">
              <img
                src={stack.URL}
                alt={stack.Title}
                className="object-contain h-48 md:h-full w-full p-4"
              />
            </figure>

            {/* Card Body */}
            <div className="card-body w-2/3 flex flex-col p-6">
              <h3 className="text-2xl font-bold mb-2">{stack.Title}</h3>
              <p className="text-gray-700">{stack.Description}</p>
              <ul className="flex flex-row gap-4 pt-1">
                {Icons.map((icon) =>
                  stack.Title === icon.Category ? (
                    <li key={icon.Title}>
                      <img
                        src={icon.URL}
                        alt={icon.Title}
                        className="w-5 h-5 object-contain"
                      />
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
