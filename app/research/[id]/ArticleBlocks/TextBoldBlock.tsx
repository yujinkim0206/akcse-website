export default function TextBoldBlock({ text }: { text: string }) {
  return (
    <div>
      <p className="mt-4 md:mt-6 text-xl font-bold">{text}</p>
    </div>
  );
}
