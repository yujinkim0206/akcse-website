interface OrderedListBlockProps {
  items: string[];
}

export default function OrderedListBlock({ items }: OrderedListBlockProps) {
  return (
    <ol className="list-decimal list-inside my-4 space-y-1">
      {items.map((item, idx) => (
        <li key={idx} className="text-gray-800">
          {item}
        </li>
      ))}
    </ol>
  );
}