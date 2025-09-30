export default function TextBlock({ text }: { text: string }) {
  return (
    <div>
      <p className="text mt-[8px] leading-7">{text}</p>
    </div>
  );
}
