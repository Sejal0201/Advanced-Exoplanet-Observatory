export default function AccountSettings() {
  return (
    <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-8">
      <h2 className="text-2xl font-semibold text-red-400">
        Account
      </h2>

      <div className="mt-8 flex gap-4">

        <button className="rounded-xl border border-slate-700 px-6 py-3">
          Export Data
        </button>

        <button className="rounded-xl bg-red-500 px-6 py-3 font-semibold">
          Delete Account
        </button>

      </div>
    </div>
  );
}