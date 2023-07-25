import { useState, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";
import BurgerIcon from "./BurgerIcon";
import { Link } from "react-scroll";
import LanguageSwitcher from "./LanguageSwitcher";
import LocalizedText from "./LocalizedText";

const Sidebar = ({ navbarOptions }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setShowSidebar(false));
  return (
    <div ref={ref}>
      {!showSidebar && (
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
        >
          <BurgerIcon />
        </button>
      )}
      <div
        className={`fixed top-0 right-0 z-40 h-screen bg-blue text-black  duration-300 ease-in-out ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="grid w-64 grid-flow-row items-center justify-center gap-5">
          <div className="grid items-center justify-end">
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className=" px-6 pt-5 text-3xl text-white"
            >
              x
            </button>
          </div>
          <div className="grid grid-flow-row gap-6">
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-8">
              <hr></hr>
              {navbarOptions.map((option) =>
                option.url ? (
                  <li key={option.name}>
                    <a
                      href={option.url}
                      className="bg-black-700 block rounded py-2 pr-4 pl-3 text-2xl font-bold text-black hover:text-blue md:bg-transparent md:p-0"
                    >
                      <LocalizedText textKey={option.name} />
                    </a>
                    <hr></hr>
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
                        <LocalizedText textKey={option.name} />
                      </Link>
                    )}{" "}
                    {window.location.pathname !== "/" && (
                      <a
                        href={"/#" + option.id}
                        className="bg-black-700 block rounded py-2 pr-4 pl-3 text-2xl font-bold text-black hover:text-blue md:bg-transparent md:p-0"
                      >
                        <LocalizedText textKey={option.name} />
                      </a>
                    )}
                    <hr></hr>
                  </li>
                )
              )}
              <li>
                <LanguageSwitcher />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
