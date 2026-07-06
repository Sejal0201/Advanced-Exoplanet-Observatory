interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const styles: Record<string, string> = {
    Processed:
      "bg-green-500/15 text-green-400 border border-green-500/20",

    Processing:
      "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20",

    Pending:
      "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20",

    Failed:
      "bg-red-500/15 text-red-400 border border-red-500/20",

    Uploaded:
      "bg-cyan-500/15 text-cyan-400 border border-cyan-500/20",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] ??
        "bg-slate-700 text-slate-300 border border-slate-600"
      }`}
    >
      {status}
    </span>
  );
}