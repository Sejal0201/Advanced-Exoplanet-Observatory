import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import LandingPage from "../features/landing/LandingPage";
import DashboardPage from "../features/dashboard/DashboardPage";
import ReportsPage from "../features/reports/ReportsPage";
import DatasetsPage from "../features/datasets/DatasetsPage";
import SettingsPage from "../features/settings/SettingsPage";
import DatasetDetailsPage from "../features/datasets/DatasetDetailsPage";

import NotFoundPage from "../pages/NotFoundPage";
import UploadPage from "../features/datasets/UploadPage";
import AnalysisPage from "../features/analysis/AnalysisPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "upload",
        element: <UploadPage />,
      },
      {
        path: "datasets/:id",
        element: <DatasetDetailsPage />,
      },
      {
        path: "reports",
        element: <ReportsPage />,
      },

      {
        path: "settings",
        element: <SettingsPage />,
      },
      // {
      //   path: "upload",
      //   element: (
      //     <div className="text-white text-3xl">
      //       Upload Dataset
      //     </div>
      //   ),
      // },

      {
        path: "upload",
        element: <div className="text-white text-3xl">Upload Dataset</div>,
      },
      {
        path: "datasets",
        element: <DatasetsPage />,
      },

      // {
      //   path: "analysis",
      //   element: <div className="text-white text-3xl">Analysis</div>,
      // },

      {
        path: "analysis",
        element: <AnalysisPage />,
      },

      {
        path: "reports",
        element: <div className="text-white text-3xl">Reports</div>,
      },

      {
        path: "settings",
        element: <div className="text-white text-3xl">Settings</div>,
      },
    ],
  },
]);
