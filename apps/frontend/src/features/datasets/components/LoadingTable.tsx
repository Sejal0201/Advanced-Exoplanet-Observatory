export default function LoadingTable() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10">
      <div className="animate-pulse space-y-5">
        <div className="h-6 w-52 rounded bg-slate-700" />

        {[1, 2, 3, 4, 5].map((row) => (
          <div
            key={row}
            className="h-14 rounded bg-slate-800"
          />
        ))}
      </div>
    </div>
  );
}