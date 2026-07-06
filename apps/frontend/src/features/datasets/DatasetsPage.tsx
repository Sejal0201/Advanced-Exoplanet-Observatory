import { useEffect, useState } from "react";
// import { Search } from "lucide-react";
import DatasetToolbar from "./components/DatasetToolbar";
import LoadingTable from "./components/LoadingTable";
import EmptyState from "./components/EmptyState";
import Pagination from "./components/Pagination";
import DeleteDialog from "./components/DeleteDialog";
import { DatasetService } from "../../services/dataset.service";
import DatasetTable from "./components/DatasetTable";
import { useNavigate } from "react-router-dom";

interface Dataset {
  id: number;
  name: string;
  mission: string;
  status: string;
  created_at: string;
}

export default function DatasetsPage() {
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [mission, setMission] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedDataset, setSelectedDataset] = useState<Dataset | null>(null);

  useEffect(() => {
    loadDatasets();
  }, []);

  async function loadDatasets() {
    try {
      const response = await DatasetService.getAll();
      setDatasets(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const filteredDatasets = datasets.filter((dataset) => {
    const matchesSearch = dataset.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesMission = mission === "" || dataset.mission === mission;

    const matchesStatus = status === "" || dataset.status === status;

    return matchesSearch && matchesMission && matchesStatus;
  });
  const pageSize = 10;

  const totalPages = Math.max(1, Math.ceil(filteredDatasets.length / pageSize));

  const paginatedDatasets = filteredDatasets.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  function openDeleteDialog(dataset: Dataset) {
    setSelectedDataset(dataset);

    setDeleteOpen(true);
  }

  function closeDeleteDialog() {
    setDeleteOpen(false);

    setSelectedDataset(null);
  }

  async function confirmDelete() {
    if (!selectedDataset) return;

    try {
      await DatasetService.delete(selectedDataset.id);

      loadDatasets();

      closeDeleteDialog();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Datasets</h1>

          <p className="mt-2 text-slate-400">
            Manage uploaded astronomical datasets.
          </p>
        </div>

        <button
          onClick={() => navigate("/dashboard/upload")}
          className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Upload Dataset
        </button>
      </div>

      <DatasetToolbar
        search={search}
        mission={mission}
        status={status}
        onSearchChange={setSearch}
        onMissionChange={setMission}
        onStatusChange={setStatus}
        onRefresh={loadDatasets}
        onUpload={() => navigate("/dashboard/upload")}
      />
      {/* {loading ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 py-12 text-center text-slate-400">
          Loading datasets...
        </div>
      ) : datasets.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 py-16 text-center text-slate-500">
          No datasets available.
        </div>
      ) : (
        <DatasetTable datasets={datasets} />
      )} */}

      {loading ? (
        <LoadingTable />
      ) : filteredDatasets.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <DatasetTable
            datasets={paginatedDatasets}
            onDelete={(id) => {
              const dataset = datasets.find((d) => d.id === id);

              if (dataset) {
                openDeleteDialog(dataset);
              }
            }}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPrevious={() => setCurrentPage((page) => Math.max(page - 1, 1))}
            onNext={() =>
              setCurrentPage((page) => Math.min(page + 1, totalPages))
            }
          />
        </>
      )}
      <DeleteDialog
        open={deleteOpen}
        datasetName={selectedDataset?.name ?? ""}
        onCancel={closeDeleteDialog}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
