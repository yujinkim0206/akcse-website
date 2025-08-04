export default function TextBoldBlock({ text }: { text: string }) {
  return (
    <div>
      <p className="mt-[8px] font-bold">{text}</p>
    </div>
  );
}
