function getYoutubeEmbedSrc(video_src: string): string | null {
  try {
    const url = new URL(video_src);
    if (url.hostname === "youtu.be") {
      return `https://www.youtube.com/embed${url.pathname}`;
    }
    if (url.hostname.endsWith("youtube.com")) {
      if (url.pathname === "/watch") {
        const videoId = url.searchParams.get("v");
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
      }
      if (url.pathname.startsWith("/embed/")) {
        return video_src;
      }
      if (url.pathname.startsWith("/shorts/")) {
        return `https://www.youtube.com/embed${url.pathname.replace("/shorts/", "/")}`;
      }
    }
    return null;
  } catch {
    return null;
  }
}

export default function VideoBlock({ video_src }: { video_src: string }) {
  const embedSrc = getYoutubeEmbedSrc(video_src);

  if (embedSrc) {
    return (
      <div className="mt-[16px] mb-[16px] mx-auto aspect-video w-[75%]">
        <iframe
          src={embedSrc}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <div className="mt-[16px] mb-[16px]">
      <video
        width="320"
        height="240"
        controls
        preload="metadata"
        className="mx-auto w-[75%] bg-gray-200 object-cover lg:aspect-auto"
      >
        <source src={video_src} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
