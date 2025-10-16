import { FaGlobeAmericas } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-center items-center gap-2 bg-[#F55A5A] h-[60px] text-white">
      <FaGlobeAmericas className="text-[30px]" />
      <span className="inter-regular tracking-tighter">my travel journal.</span>
    </header>
  );
};

export default Header;
