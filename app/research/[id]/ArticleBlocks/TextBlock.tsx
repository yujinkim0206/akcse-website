export default function TextBlock({ text }: { text: string }) {
  return (
    <div>
      <p className="mt-[8px]">{text}</p>
    </div>
  );
}
