export default function ImageBlock({ image_src }: { image_src: string }) {
  return (
    <div className="my-10">
      <img
        src={image_src}
        className="mx-auto max-w-[75%] bg-gray-200 object-cover lg:aspect-auto"
      />
    </div>
  );
}
