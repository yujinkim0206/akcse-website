interface TableBlockProps {
  table: {
    headers?: string[];
    rows: string[][];
  };
}

export default function TableBlock({ table }: TableBlockProps) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="min-w-full border-collapse border border-gray-300">
        {table.headers && (
          <thead>
            <tr className="bg-gray-100">
              {table.headers.map((header, idx) => (
                <th key={idx} className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        )}

        <tbody>
          {table.rows.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="border border-gray-300 px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}