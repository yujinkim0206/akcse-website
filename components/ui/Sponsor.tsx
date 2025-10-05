import Image from "next/image";

export default function Sponsor({
  name,
  description,
  image,
  url,
}: {
  name: string;
  description: string;
  image: string;
  url: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="group relative mb-3 aspect-[1/1]">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition duration-300 group-hover:brightness-50"
        />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex justify-end opacity-0 transition duration-300 group-hover:opacity-100 p-3"
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-8 w-8 fill-white"><path d="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z"/></svg></a>
      </div>
      <h3 className="font-medium sm:text-xl">{name}</h3>
      <p className="text-sm sm:text-base text-[var(--subtitle)]">{description}</p>
    </div>
  );
}
