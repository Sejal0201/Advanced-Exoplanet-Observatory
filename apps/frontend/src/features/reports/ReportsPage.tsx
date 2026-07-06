import { useMemo, useState } from "react";

import ReportCard from "./components/ReportCard";
import ReportToolbar from "./components/ReportToolbar";
import EmptyReports from "./components/EmptyReports";
import ReportPreviewModal from "./components/ReportPreviewModal";

import type { Report } from "./types";

export default function ReportsPage() {
  const [search, setSearch] = useState("");

  const [selectedReport, setSelectedReport] =
    useState<Report | null>(null);

  const [openPreview, setOpenPreview] =
    useState(false);

  const reports: Report[] = [
    {
      id: 1,
      datasetName: "Kepler DR25",
      mission: "Kepler",
      createdAt: new Date().toISOString(),
      status: "Completed",
      confidence: 95,
      candidateCount: 3,
    },
    {
      id: 2,
      datasetName: "TESS Sector 44",
      mission: "TESS",
      createdAt: new Date().toISOString(),
      status: "Completed",
      confidence: 89,
      candidateCount: 6,
    },
  ];

  const filteredReports = useMemo(() => {
    return reports.filter((report) =>
      report.datasetName
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [reports, search]);

  function handlePreview(report: Report) {
    setSelectedReport(report);
    setOpenPreview(true);
  }

  return (
    <>
      <div className="space-y-8">
        <div>
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Reports
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            Scientific Reports
          </h1>

          <p className="mt-4 max-w-3xl text-slate-400">
            Browse AI-generated reports,
            visualize detections and
            download scientific PDFs.
          </p>
        </div>

        <ReportToolbar
          search={search}
          setSearch={setSearch}
        />

        {filteredReports.length === 0 ? (
          <EmptyReports />
        ) : (
          <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
            {filteredReports.map((report) => (
              <div
                key={report.id}
                onClick={() => handlePreview(report)}
                className="cursor-pointer"
              >
                <ReportCard report={report} />
              </div>
            ))}
          </div>
        )}
      </div>

      <ReportPreviewModal
        report={selectedReport}
        open={openPreview}
        onClose={() => setOpenPreview(false)}
      />
    </>
  );
}
