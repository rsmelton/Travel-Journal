import { FaGlobeAmericas } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='flex justify-center items-center gap-2 bg-[#E36560] h-[60px] text-white'>
      <FaGlobeAmericas className='text-[30px]' />
      <span className='inter-bold tracking-tighter'>my travel journal.</span>
    </div>
  )
};

export default Header;