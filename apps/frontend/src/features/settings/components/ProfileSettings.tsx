export default function ProfileSettings() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
      <h2 className="text-2xl font-semibold">
        Research Profile
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <input
          placeholder="Full Name"
          className="rounded-xl border border-slate-700 bg-slate-950 p-4"
        />

        <input
          placeholder="Email"
          className="rounded-xl border border-slate-700 bg-slate-950 p-4"
        />

        <input
          placeholder="Institution"
          className="rounded-xl border border-slate-700 bg-slate-950 p-4"
        />

        <input
          placeholder="Research Area"
          className="rounded-xl border border-slate-700 bg-slate-950 p-4"
        />
      </div>

      <button className="mt-8 rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-slate-950">
        Save Profile
      </button>
    </div>
  );
}