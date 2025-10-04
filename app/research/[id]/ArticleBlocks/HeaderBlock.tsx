export default function HeaderBlock({ header }: { header: string }) {
  return (
    <div>
      <h4 className="mt-12 text-3xl font-medium">{header}</h4>
    </div>
  );
}
