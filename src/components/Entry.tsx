import React from "react";
import { FaLocationDot } from "react-icons/fa6";

// Typing for typescript
type Image = {
  src: string;
  alt: string;
}

type Entry = {
  image: Image;
  country: string;
  googleMapsURL: string;
  location: string;
  date: string;
  description: string;
}

type EntryProps = {
  entry: Entry;
};

// Component with passed in props with typing
const Entry: React.FC<EntryProps> = ({entry}) => {
  return (
    <article className="flex items-center gap-4">
      <img
        className="rounded-[5px] w-[125px] h-[168px] object-cover"
        src={entry.image.src}
        alt={entry.image.alt}
      />
      <div className="flex flex-col">
        <div className="flex gap-3 inter-regular text-[0.64rem]">
          <div className="flex items-center gap-1">
            <FaLocationDot className="text-[#F55A5A]" />
            <span className="uppercase text-[#2B283A] tracking-widest">
              {entry.country}
            </span>
          </div>
          <a className="text-[#918E9B] underline hover:text-[#F55A5A]" href={entry.googleMapsURL}>
            View on Google Maps
          </a>
        </div>
        <h1 className="text-[25px] text-[#2B283A] inter-bold mb-3">
          {entry.location}
        </h1>
        <span className="text-[0.64rem] text-[#2B283A] inter-bold mb-1">
          {entry.date}
        </span>
        <p className="text-[0.64rem] text-[#2B283A] inter-regular max-w-xs">
          {entry.description}
        </p>
      </div>
    </article>
  );
};

export default Entry;
