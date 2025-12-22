export default function HeaderBlock({ header }: { header: string }) {
  return (
    <div>
      <h4 className="mt-8 sm:mt-12 text-xl sm:text-3xl font-medium">{header}</h4>
    </div>
  );
}
