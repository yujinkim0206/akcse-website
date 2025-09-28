export default function ImageBlock({ image_src }: { image_src: string }) {
  return (
    <div className="mt-[16px] mb-[16px]">
      <img
        src={image_src}
        className="mx-auto max-w-[75%] bg-gray-200 object-cover lg:aspect-auto"
      />
    </div>
  );
}
