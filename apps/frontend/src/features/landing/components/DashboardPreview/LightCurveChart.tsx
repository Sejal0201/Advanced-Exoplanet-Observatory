export default function LightCurveChart() {
  return (
    <div className="flex h-72 items-center justify-center">
      <svg
        viewBox="0 0 600 220"
        className="h-full w-full"
      >
        <path
          d="
          M0 100
          L80 100
          L120 100
          Q145 140 170 100
          L300 100
          Q325 150 350 100
          L600 100
          "
          fill="none"
          stroke="#22d3ee"
          strokeWidth="4"
        />

        <line
          x1="0"
          y1="100"
          x2="600"
          y2="100"
          stroke="#334155"
          strokeDasharray="8"
        />
      </svg>
    </div>
  );
}