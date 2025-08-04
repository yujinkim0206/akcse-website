export default function VideoBlock({ video_src }: { video_src: string }) {
  return (
    <div className="mt-[16px] mb-[16px]">
      <video
        width="320"
        height="240"
        controls
        preload="metadata"
        className="w-[75%] mx-auto rounded-lg bg-gray-200 object-cover lg:aspect-auto"
      >
        <source src={video_src} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
