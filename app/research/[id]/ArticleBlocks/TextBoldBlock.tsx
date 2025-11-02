export default function TextBoldBlock({ text }: { text: string }) {
  return (
    <div>
      <p className="mt-4 sm:mt-6 font-bold">{text}</p>
    </div>
  );
}
