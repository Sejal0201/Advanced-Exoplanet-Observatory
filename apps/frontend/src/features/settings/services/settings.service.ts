import api from "../../../api/client";

export const SettingsService = {
  getProfile() {
    return api.get("/settings/profile");
  },

  updateProfile(data: unknown) {
    return api.put("/settings/profile", data);
  },

  updateAppearance(data: unknown) {
    return api.put("/settings/appearance", data);
  },

  updateAI(data: unknown) {
    return api.put("/settings/ai", data);
  },

  updateNotifications(data: unknown) {
    return api.put("/settings/notifications", data);
  },
};