export default function AISettings() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
      <h2 className="text-2xl font-semibold">
        AI Preferences
      </h2>

      <div className="mt-8 space-y-6">

        <input
          type="range"
          min="50"
          max="100"
          defaultValue="80"
          className="w-full"
        />

        <select className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4">
          <option>Gemini</option>
          <option>OpenAI</option>
          <option>Claude</option>
        </select>

      </div>
    </div>
  );
}