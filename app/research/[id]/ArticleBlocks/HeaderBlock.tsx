export default function HeaderBlock({ header }: { header: string }) {
  return (
    <div>
      <h4 className="mt-[40px] text-3xl font-bold">{header}</h4>
    </div>
  );
}
