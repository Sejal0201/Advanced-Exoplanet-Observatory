import {
  Eye,
  Download,
  MoreHorizontal,
} from "lucide-react";

const uploads = [
  {
    id: 1,
    name: "Kepler_DR25.csv",
    mission: "Kepler",
    uploaded: "Today",
    status: "Processed",
  },
  {
    id: 2,
    name: "TESS_Sector_09.fits",
    mission: "TESS",
    uploaded: "Yesterday",
    status: "Processing",
  },
  {
    id: 3,
    name: "JWST_LightCurve.csv",
    mission: "JWST",
    uploaded: "2 days ago",
    status: "Completed",
  },
];

export default function RecentUploads() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800">
      <table className="w-full">
        <thead className="border-b border-slate-800 bg-slate-900">
          <tr className="text-left text-sm text-slate-400">
            <th className="px-6 py-4">Dataset</th>
            <th className="px-6 py-4">Mission</th>
            <th className="px-6 py-4">Uploaded</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {uploads.map((dataset) => (
            <tr
              key={dataset.id}
              className="border-b border-slate-800 transition hover:bg-slate-800/40"
            >
              <td className="px-6 py-5 font-medium text-white">
                {dataset.name}
              </td>

              <td className="px-6 py-5 text-slate-300">
                {dataset.mission}
              </td>

              <td className="px-6 py-5 text-slate-400">
                {dataset.uploaded}
              </td>

              <td className="px-6 py-5">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    dataset.status === "Processed"
                      ? "bg-green-500/15 text-green-400"
                      : dataset.status === "Processing"
                      ? "bg-yellow-500/15 text-yellow-400"
                      : "bg-cyan-500/15 text-cyan-400"
                  }`}
                >
                  {dataset.status}
                </span>
              </td>

              <td className="px-6 py-5">
                <div className="flex justify-center gap-3">
                  <button className="rounded-lg p-2 transition hover:bg-slate-700">
                    <Eye size={18} />
                  </button>

                  <button className="rounded-lg p-2 transition hover:bg-slate-700">
                    <Download size={18} />
                  </button>

                  <button className="rounded-lg p-2 transition hover:bg-slate-700">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}