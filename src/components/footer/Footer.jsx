import LinkedInIcon from "../../assets/icons/LinkedIn.svg";
import GitHubIcon from "../../assets/icons/GitHub.svg";

const socialIcons = [
  {
    Image: LinkedInIcon,
    Title: "LinkedIn",
    Link: "https://www.linkedin.com/in/marc-chino-altea/",
  },
  {
    Image: GitHubIcon,
    Title: "Github",
    Link: "https://github.com/marcaltea2",
  },
];

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal items-center p-4 px-20 mt-10">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <ul className="grid grid-flow-col gap-4">
          {socialIcons.map((icon) => (
            <li key={icon.Title}>
              <a href={icon.Link}>
                <img src={icon.Image} alt={icon.Title} width="24" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
