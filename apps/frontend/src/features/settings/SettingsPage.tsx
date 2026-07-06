import ProfileSettings from "./components/ProfileSettings";
import AppearanceSettings from "./components/AppearanceSettings";
import AISettings from "./components/AISettings";
import NotificationSettings from "./components/NotificationSettings";
import AccountSettings from "./components/AccountSettings";

export default function SettingsPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
          Settings
        </p>

        <h1 className="mt-3 text-5xl font-bold">Observatory Settings</h1>

        <p className="mt-4 max-w-3xl text-slate-400">
          Manage your research profile, AI preferences, appearance and account
          settings.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <ProfileSettings />

        <AppearanceSettings />

        <AISettings />

        <NotificationSettings />

        <div className="xl:col-span-2">
          <AccountSettings />
        </div>
      </div>
    </div>
  );
}
