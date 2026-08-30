interface UnorderedListBlockProps {
  items: string[];
}

export default function UnorderedListBlock({ items }: UnorderedListBlockProps) {
  return (
    <ul className="list-disc list-inside my-4 space-y-1">
      {items.map((item, idx) => (
        <li key={idx} className="text-gray-800">
          {item}
        </li>
      ))}
    </ul>
  );
}