export default function AppearanceSettings() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
      <h2 className="text-2xl font-semibold">
        Appearance
      </h2>

      <div className="mt-8 space-y-6">

        <select className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4">
          <option>Dark Theme</option>
          <option>Light Theme</option>
          <option>System Theme</option>
        </select>

        <select className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4">
          <option>Cyan</option>
          <option>Blue</option>
          <option>Purple</option>
        </select>

      </div>
    </div>
  );
}