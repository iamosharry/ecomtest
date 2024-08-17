import { useEffect, useState } from "react";
import { assets, navList } from "../assets";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidBasket } from "react-icons/bi";
import { Link } from "react-router-dom";
import useSignIn from "../services/useSignIn";
import useCount from "../services/useCount";
import useScrollStore from "../services/useScrollStore";

const Header = () => {
  const [selectedList, setSelectedList] = useState(0);
  const { toggleSignIn } = useSignIn();
  const { total } = useCount();
  const [sticky, setSticky] = useState(false);
  const { sectionId, setSectionId } = useScrollStore();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        // Get the element's position
        const elementTop =
          element.getBoundingClientRect().top + window.pageYOffset;

        // Adjust this value to control how much offset you want
        const offset = -100; // Adjust this offset as needed

        // Scroll to the adjusted position
        window.scrollTo({
          top: elementTop + offset,
          behavior: "smooth",
        });
      }
    }
  }, [sectionId]);

  return (
    <header
      className={`z-50 flex items-center justify-between py-5 ${
        sticky
          ? "fixed top-0 bg-white w-[93%] lg:w-[80%] mx-auto shadow-md"
          : ""
      }`}
    >
      <Link to="/" aria-label="Home">
        <img
          className="w-[120px] sm:w-[170px] h-auto object-contain"
          src={assets.logo}
          alt="Company Logo"
        />
      </Link>
      <nav>
        <ul className="hidden md:flex items-center space-x-5 text-[#49557E]">
          {navList.map((list) => (
            <li
              key={list.id}
              onClick={() => setSelectedList(list.id)}
              className={`cursor-pointer ${
                selectedList === list.id ? "active relative" : ""
              }`}
            >
              <a onClick={() => setSectionId(list.title)}>{list.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center xsm:space-x-3 md:space-x-10">
        <button aria-label="Search">
          <IoSearchOutline className="text-[#49557e] xsm:text-[25px] md:text-[30px]" />
        </button>
        <Link to="/cart" className="relative cursor-pointer" aria-label="Cart">
          <BiSolidBasket className="text-[#49557e] xsm:text-[25px] md:text-[30px]" />
          <div className="counter">
            <span className="text-white">{total()}</span>
          </div>
        </Link>
        <button
          onClick={() => toggleSignIn()}
          className="text-[14px] md:text-[16px] border border-[#49557E] xsm:py-1 md:py-2 xsm:px-3 md:px-7 rounded-full text-[#49557E] hover:bg-[#49557E] hover:text-white"
          aria-label="Sign in"
        >
          Sign in
        </button>
      </div>
    </header>
  );
};

export default Header;
