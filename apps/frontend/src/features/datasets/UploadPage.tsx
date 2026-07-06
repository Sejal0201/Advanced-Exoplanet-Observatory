import { useState } from "react";
import { UploadCloud } from "lucide-react";
// import { uploadDataset } from "../../services/dataset.service";
import { DatasetService } from "../../services/dataset.service";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
  //   const [file, setFile] = useState<File | null>(null);

  const navigate = useNavigate();

  const [file, setFile] = useState<File | null>(null);

  const [datasetName, setDatasetName] = useState("");

  const [mission, setMission] = useState("Kepler");

  const [loading, setLoading] = useState(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a dataset.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);

      formData.append("mission", mission);

      formData.append("name", datasetName);
      const response = await DatasetService.upload(formData);

const result = response.data;
      navigate("/dashboard/analysis", {
        state: {
          analysis: result,
        },
      });
    } catch (error) {
      console.error(error);

      alert("Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="mb-2 text-4xl font-bold">Upload Dataset</h1>

      <p className="mb-10 text-slate-400">
        Upload astronomical datasets for preprocessing and AI analysis.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="mb-2 block">Dataset Name</label>

          <input
            value={datasetName}
            onChange={(e) => setDatasetName(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4"
            placeholder="Kepler DR25"
          />
        </div>

        <div>
          <label className="mb-2 block">Mission</label>
          {/* 
          <select className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4">
            <option>Kepler</option>
            <option>TESS</option>
            <option>JWST</option>
            <option>PLATO</option>
          </select> */}

          <select
            value={mission}
            onChange={(e) => setMission(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4"
          >
            <option value="Select Option">Select Option</option>
            <option value="Kepler">Kepler</option>
            <option value="TESS">TESS</option>
            <option value="JWST">JWST</option>
            <option value="PLATO">PLATO</option>
          </select>
        </div>

        <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-cyan-500/40 bg-slate-900 py-20 transition hover:border-cyan-400">
          <UploadCloud size={60} className="mb-5 text-cyan-400" />

          <p className="text-xl font-semibold">Click to upload dataset</p>

          <p className="mt-2 text-slate-400">CSV • TXT • FITS</p>

          {file && (
            <div className="mt-6 rounded-lg bg-cyan-500/20 px-4 py-2 text-cyan-400">
              {file.name}
            </div>
          )}

          <input
            type="file"
            hidden
            accept=".csv,.txt,.fits"
            onChange={handleFileChange}
          />
        </label>

        {/* <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400">
          Upload Dataset
        </button> */}

        <button
          disabled={loading}
          className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload Dataset"}
        </button>
      </form>
    </div>
  );
}
