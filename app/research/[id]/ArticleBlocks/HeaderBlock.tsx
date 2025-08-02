export default function HeaderBlock({ header }: { header: string }) {
  return (
    <div>
      <h4 className="mt-[40px] font-bold">{header}</h4>
    </div>
  );
}
