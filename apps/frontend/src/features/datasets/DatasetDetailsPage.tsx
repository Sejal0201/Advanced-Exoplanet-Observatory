import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { DatasetService } from "../../services/dataset.service";
import DatasetPreview from "./components/DatasetPreview";
import LightCurveChart from "../../components/charts/LightCurveChart";
import MetadataCard from "./components/MetadataCard";

export default function DatasetDetailsPage() {
  const { id } = useParams();

  const [dataset, setDataset] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDataset();
  }, []);

  async function loadDataset() {
    try {
      const response = await DatasetService.getById(Number(id));

      setDataset(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!dataset) {
    return <div className="text-center py-20">Dataset not found.</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold">{dataset.name}</h1>

        <p className="mt-3 text-slate-400">Scientific Dataset Overview</p>
      </div>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <MetadataCard title="Mission" value={dataset.mission} />

        <MetadataCard title="Status" value={dataset.status} />

        <MetadataCard title="Rows" value={dataset.rows} />

        <MetadataCard title="Columns" value={dataset.columns} />
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        <MetadataCard
          title="Transit Candidates"
          value={dataset.candidate_count}
        />

        <MetadataCard title="Confidence" value={`${dataset.confidence}%`} />

        <MetadataCard title="Noise Removed" value={dataset.noise_removed} />
      </section>
      <DatasetPreview preview={dataset.preview ?? []} />
      <LightCurveChart data={dataset.plot ? JSON.parse(dataset.plot) : null} />
    </div>
  );
}
