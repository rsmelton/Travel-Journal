import { FaGlobeAmericas } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='flex justify-center items-center gap-2 bg-[#E36560] h-[60px] text-white'>
      <FaGlobeAmericas className='text-[30px]' />
      <span className='inter-bold tracking-tighter'>my travel journal.</span>
    </header>
  )
};

export default Header;