// Import images
import UIUXIcon from "../assets/img/3dicons-figma-dynamic-gradient.png";
import ColorPaletteIcon from "../assets/img/3dicons-color-palette-dynamic-gradient (1).png";
import BackendIcon from "../assets/img/3dicons-tea-cup-dynamic-gradient.png";
import DatabaseIcon from "../assets/img/3dicons-chart-dynamic-gradient.png";

const stackData = () => [
  {
    ID: 1,
    URL: UIUXIcon,
    Title: "UI/UX Design",
    Description:
      "Crafting intuitive and visually appealing user experiences through thoughtful design and user-centered interfaces.",
  },
  {
    ID: 2,
    URL: ColorPaletteIcon,
    Title: "Front-End Development",
    Description:
      "Building responsive and dynamic web interfaces with clean, efficient code for seamless user interactions.",
  },
  {
    ID: 3,
    URL: BackendIcon,
    Title: "Back-End Development",
    Description:
      "Developing robust server-side applications to ensure secure, scalable, and efficient data processing.",
  },
  {
    ID: 4,
    URL: DatabaseIcon,
    Title: "Database Management",
    Description:
      "Organizing, analyzing, and maintaining data to support informed decision-making and system reliability.",
  },
];

export default stackData;
