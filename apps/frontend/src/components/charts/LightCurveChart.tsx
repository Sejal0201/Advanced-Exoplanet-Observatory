import Plot from "react-plotly.js";

interface LightCurveChartProps {
  data: any;
}

export default function LightCurveChart({
  data,
}: LightCurveChartProps) {
  if (!data) {
    return (
      <div className="flex h-[500px] items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 text-slate-500">
        No visualization available.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 px-6 py-4">
        <h2 className="text-2xl font-semibold">
          Light Curve Visualization
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Interactive Plotly visualization
        </p>
      </div>

      <div className="p-6">
        <Plot
          data={data.data}
          layout={{
            ...data.layout,

            autosize: true,

            paper_bgcolor: "#0f172a",

            plot_bgcolor: "#0f172a",

            font: {
              color: "#ffffff",
            },

            margin: {
              t: 40,
              r: 20,
              l: 60,
              b: 60,
            },
          }}
          config={{
            responsive: true,

            displaylogo: false,

            scrollZoom: true,
          }}
          style={{
            width: "100%",
            height: "550px",
          }}
        />
      </div>
    </div>
  );
}