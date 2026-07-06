export default function NotificationSettings() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
      <h2 className="text-2xl font-semibold">
        Notifications
      </h2>

      <div className="mt-8 space-y-5">

        <label className="flex justify-between">
          Dataset Completed
          <input type="checkbox" defaultChecked />
        </label>

        <label className="flex justify-between">
          Report Generated
          <input type="checkbox" defaultChecked />
        </label>

        <label className="flex justify-between">
          Weekly Summary
          <input type="checkbox" />
        </label>

      </div>
    </div>
  );
}