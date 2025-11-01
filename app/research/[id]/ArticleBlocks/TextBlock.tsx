export default function TextBlock({ text }: { text: string }) {
  return (
    <div>
<<<<<<< Updated upstream
      <p className="text mt-[8px] leading-7">{text}</p>
=======
      <p
        className="mt-4 leading-7 sm:mt-6"
        dangerouslySetInnerHTML={{ __html: text }}
      />
>>>>>>> Stashed changes
    </div>
  );
}
