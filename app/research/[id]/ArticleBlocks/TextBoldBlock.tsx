export default function TextBoldBlock({ text }: { text: string }) {
  return (
    <div>
      <p className="mt-[8px] text-xl font-bold">{text}</p>
    </div>
  );
}
