export default function HeaderBlock({ header }: { header: string }) {
  return (
    <div>
      <h4 className="mt-12 mb-4 text-2xl font-medium md:text-3xl">{header}</h4>
    </div>
  );
}
