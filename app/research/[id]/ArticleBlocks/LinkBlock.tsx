export default function LinkBlock({
  link,
  link_title,
}: {
  link: string;
  link_title: string;
}) {
  return (
    <div className="mt-[8px]">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text block text-blue-600 hover:underline break-all"
      >
        {link_title}
      </a>
    </div>
  );
}
