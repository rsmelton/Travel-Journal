import { FaLocationDot } from 'react-icons/fa6';

const Entry = () => {
  return (
    <section className="flex justify-center items-center gap-4 pt-10">
      <img className='rounded-[5px] w-[125px] h-[168px] object-cover object-center' src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Mount Fuji Image" />
      <div className="flex flex-col">
        <div className="flex gap-3 inter-regular text-[0.64rem]">
          <div className='flex items-center gap-1'>
            <FaLocationDot className='text-[#F55A5A]' />
            <span className='uppercase text-[#2B283A] tracking-widest'>
              japan
            </span>
          </div>
          <a className='text-[#918E9B] underline' href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">
            View on Google Maps
          </a>
        </div>
        <h1 className='text-[25px] text-[#2B283A] inter-bold mb-3'>
          Mount Fuji
        </h1>
        <span className='text-[0.64rem] text-[#2B283A] inter-bold mb-1'>
          12 Jan, 2023 - 24 Jan, 2023
        </span>
        <p className='text-[0.64rem] text-[#2B283A] inter-regular max-w-xs'>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </section>
  )
}

export default Entry