import { useLocation } from "react-router-dom";
import LightCurveChart from "../../components/charts/LightCurveChart";

export default function AnalysisPage() {
  const { state } = useLocation();

  const data = state?.analysis;

  if (!data) {
    return (
      <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-8">
        <h1 className="text-3xl font-bold text-red-400">
          No Analysis Available
        </h1>

        <p className="mt-4 text-slate-400">Upload a dataset first.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Dataset Analysis</h1>

        <p className="mt-2 text-slate-400">AI-generated scientific summary</p>
      </div>

      <pre className="overflow-auto rounded-2xl border border-slate-800 bg-slate-900 p-6 text-sm text-cyan-300">
        {JSON.stringify(data, null, 2)}
      </pre>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="mb-8 text-2xl font-semibold">
          Light Curve Visualization
        </h2>

        <LightCurveChart data={JSON.parse(data.plot)} />
      </section>
    </div>
  );
}
