interface DatasetPreviewProps {
  preview: Record<string, any>[];
}

export default function DatasetPreview({
  preview,
}: DatasetPreviewProps) {
  if (!preview || preview.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">
        No preview available.
      </div>
    );
  }

  const columns = Object.keys(preview[0]);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 px-6 py-4">
        <h2 className="text-2xl font-semibold">
          Dataset Preview
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          First {preview.length} rows of the uploaded dataset
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-950">
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  className="border-b border-slate-800 px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide text-slate-300"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {preview.map((row, index) => (
              <tr
                key={index}
                className="border-b border-slate-800 transition hover:bg-slate-800/40"
              >
                {columns.map((column) => (
                  <td
                    key={column}
                    className="px-6 py-4 text-sm text-slate-300"
                  >
                    {String(row[column])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}