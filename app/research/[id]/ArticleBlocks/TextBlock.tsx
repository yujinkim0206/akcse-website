export default function TextBlock({ text }: { text: string }) {
  return (
    <div>
      <p className="text mt-6 leading-7">{text}</p>
    </div>
  );
}
