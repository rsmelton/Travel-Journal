import React from "react";
import { FaLocationDot } from "react-icons/fa6";

// Typing for typescript
type EntryProps = {
  imageURL: string;
  imageAlt: string;
  country: string;
  googleMapsURL: string;
  location: string;
  date: string;
  description: string;
};

// Component with passed in props with typing
const Entry: React.FC<EntryProps> = ({
  imageURL,
  imageAlt,
  country,
  googleMapsURL,
  location,
  date,
  description,
}) => {
  return (
    <article className="flex items-center gap-4">
      <img
        className="rounded-[5px] w-[125px] h-[168px] object-cover"
        src={imageURL}
        alt={imageAlt}
      />
      <div className="flex flex-col">
        <div className="flex gap-3 inter-regular text-[0.64rem]">
          <div className="flex items-center gap-1">
            <FaLocationDot className="text-[#F55A5A]" />
            <span className="uppercase text-[#2B283A] tracking-widest">
              {country}
            </span>
          </div>
          <a className="text-[#918E9B] underline hover:text-[#F55A5A]" href={googleMapsURL}>
            View on Google Maps
          </a>
        </div>
        <h1 className="text-[25px] text-[#2B283A] inter-bold mb-3">
          {location}
        </h1>
        <span className="text-[0.64rem] text-[#2B283A] inter-bold mb-1">
          {date}
        </span>
        <p className="text-[0.64rem] text-[#2B283A] inter-regular max-w-xs">
          {description}
        </p>
      </div>
    </article>
  );
};

export default Entry;
