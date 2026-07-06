import api from "../api/client";

export const DashboardService = {
  getStats() {
    return api.get("/dashboard/stats");
  },
};