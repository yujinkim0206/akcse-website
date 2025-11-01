export default function TextBlock({ text }: { text: string }) {
  return (
    <div>
      <p className="mt-4 sm:mt-6 leading-7">{text}</p>
    </div>
  );
}
