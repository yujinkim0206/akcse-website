export default function ImageBlock({
  image_src,
  image_description,
}: {
  image_src: string;
  image_description?: string | null;
}) {
  return (
    <div className="my-10">
      <img
        src={image_src}
        className="mx-auto max-w-[75%] bg-gray-200 object-cover lg:aspect-auto"
      />
      <p className="mt-4 text-center leading-7 italic sm:mt-6">
        {image_description}
      </p>
    </div>
  );
}
