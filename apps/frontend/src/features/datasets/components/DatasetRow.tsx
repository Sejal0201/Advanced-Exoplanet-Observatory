import { Eye, Trash2 } from "lucide-react";

import StatusBadge from "./StatusBadge";
import { useNavigate } from "react-router-dom";

export interface Dataset {
  id: number;
  name: string;
  mission: string;
  status: string;
  created_at: string;
}

interface DatasetRowProps {
  dataset: Dataset;
  onView?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export default function DatasetRow({
  dataset,
  onView,
  onDelete,
}: DatasetRowProps) {
  const navigate = useNavigate();
  return (
    <tr className="border-b border-slate-800 transition hover:bg-slate-900/60">
      <td className="px-6 py-5 font-medium text-white">{dataset.name}</td>

      <td className="px-6 py-5">{dataset.mission}</td>

      <td className="px-6 py-5">
        <StatusBadge status={dataset.status} />
      </td>

      <td className="px-6 py-5 text-slate-400">
        {new Date(dataset.created_at).toLocaleDateString()}
      </td>

      <td className="px-6 py-5">
        <div className="flex justify-center gap-3">
          <button
            onClick={() => navigate(`/dashboard/datasets/${dataset.id}`)}
            className="rounded-lg p-2 transition hover:bg-slate-700"
          >
            <Eye size={18} />
          </button>

          <button
            onClick={() => onDelete?.(dataset.id)}
            className="rounded-lg p-2 text-red-400 transition hover:bg-red-500/10"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}
