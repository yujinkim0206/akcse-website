export default function TextBlock({ text }: { text: string }) {
  return (
    <div>
      <p
        className="mt-3 leading-7 sm:mt-5"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}
