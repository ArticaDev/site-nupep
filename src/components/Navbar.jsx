import Logo from "../assets/logo.jpg";
import LogoUfu from "../assets/logo-ufu.png";
import { Link } from "react-scroll";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = ({ isLoaded }) => {
  const navbarOptions = [
    { name: "Sobre nós", id: "about" },
    { name: "Pesquisa", id: "search" },
    { name: "Projetos", url: "/projetos" },
    { name: "Publicações", url: "/publicacoes" },
    { name: "Equipe", url: "/equipe" },
    { name: "Contato", id: "contact" },
  ];

  const hasWordInURL = (word) => {
    const url = window.location.href;
    return url.includes(word);
  };

  useEffect(() => {
    const possibleIds = ["about", "search", "contact"];
    possibleIds.forEach((id) => {
      if (hasWordInURL(id)) {
        document.getElementById(id).scrollIntoView();
        window.scrollBy(0, -130);
      }
    });
  }, [isLoaded]);

  return (
    <>
      <nav className="max-w-screen sticky top-0 z-10 block border-gray-200 bg-white px-4 py-5 shadow">
        <div className="flex flex-wrap items-center justify-between lg:px-12">
          <a href="/" className="flex items-center">
            <img
              src={Logo}
              className="h-16 self-center whitespace-nowrap font-semibold text-black "
            ></img>
          </a>
          <Sidebar navbarOptions={navbarOptions} />
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
              {navbarOptions.map((option) =>
                option.url ? (
                  <li key={option.name}>
                    <a
                      href={option.url}
                      className="bg-black-700 block rounded py-2 pr-4 pl-3 text-2xl font-bold text-black hover:text-blue md:bg-transparent md:p-0"
                    >
                      {option.name}
                    </a>
                  </li>
                ) : (
                  <li key={option.name}>
                    {window.location.pathname === "/" && (
                      <Link
                        activeClass="active"
                        to={option.id}
                        spy={true}
                        smooth={true}
                        offset={-130}
                        duration={500}
                        className="bg-black-700 block cursor-pointer rounded py-2 pr-4 pl-3 text-2xl font-bold text-black hover:text-blue md:bg-transparent md:p-0"
                      >
                        {option.name}
                      </Link>
                    )}{" "}
                    {window.location.pathname !== "/" && (
                      <a
                        href={"/#" + option.id}
                        className="bg-black-700 block rounded py-2 pr-4 pl-3 text-2xl font-bold text-black hover:text-blue md:bg-transparent md:p-0"
                      >
                        {option.name}
                      </a>
                    )}
                  </li>
                )
              )}
              <li>
                <LanguageSwitcher/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
