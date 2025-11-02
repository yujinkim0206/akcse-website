export default function TextBlock({ text }: { text: string }) {
  return (
    <div>
      <p
        className="mt-4 leading-7 sm:mt-6"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}
