interface MetadataCardProps {
  title: string;
  value: string | number;
}

export default function MetadataCard({
  title,
  value,
}: MetadataCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-sm uppercase tracking-wider text-slate-500">
        {title}
      </p>

      <h2 className="mt-3 text-2xl font-bold">
        {value}
      </h2>
    </div>
  );
}