import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HashLink } from "react-router-hash-link";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Project", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleActiveNavItem = (item) => {
    setActiveNavItem(item);
  };

  return (
    <header className="sticky inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className={`navbar p-4 lg:px-8 transition-colors duration-300 ${
          isScrolled ? "bg-base-100" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <HashLink smooth to={"/#"} className="text-xl font-bold">
            CHINO
          </HashLink>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden ml-auto">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2"
          >
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <HashLink
                smooth
                to={`/${item.href}`}
                onClick={() => handleActiveNavItem(item.name)}
                className={`font-medium p-3 hover:text-gray-800 ${
                  activeNavItem === item.name ? "text-primary" : "text-gray-700"
                }`}
              >
                {item.name}
              </HashLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Dialog (Headless UI) */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />{" "}
        {/* overlay */}
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-base-100 p-6 sm:max-w-sm shadow-lg">
          <div className="flex items-center justify-between">
            <HashLink
              smooth
              to={"/#"}
              className="text-xl font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              CHINO
            </HashLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2"
            >
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6">
            <ul className="flex flex-col gap-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <HashLink
                    smooth
                    to={`/${item.href}`}
                    onClick={() => {
                      handleActiveNavItem(item.name);
                      setMobileMenuOpen(false); // close mobile menu
                    }}
                    className={`p-3 font-medium justify-start ${
                      activeNavItem === item.name
                        ? "text-primary"
                        : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
