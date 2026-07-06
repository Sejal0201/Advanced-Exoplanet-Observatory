
import DatasetRow from "./DatasetRow";
import type { Dataset } from "./DatasetRow";
interface DatasetTableProps {
  datasets: Dataset[];
//   onView?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export default function DatasetTable({
  datasets,
//   onView,
  onDelete,
}: DatasetTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800">
      <table className="w-full">
        <thead className="bg-slate-900">
          <tr className="text-left">
            <th className="px-6 py-4">
              Dataset
            </th>

            <th className="px-6 py-4">
              Mission
            </th>

            <th className="px-6 py-4">
              Status
            </th>

            <th className="px-6 py-4">
              Uploaded
            </th>

            <th className="px-6 py-4 text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {datasets.map((dataset) => (
            <DatasetRow
              key={dataset.id}
              dataset={dataset}
            //   onView={onView}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}