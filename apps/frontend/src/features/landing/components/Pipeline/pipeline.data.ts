import {
  Upload,
  Database,
  BrainCircuit,
  Orbit,
  Sparkles,
  FileText,
} from "lucide-react";

export const pipelineSteps = [
  {
    step: "01",
    title: "Upload Dataset",
    description:
      "Upload telescope light curve data collected from Kepler, TESS, or other astronomical missions.",
    icon: Upload,
  },
  {
    step: "02",
    title: "Data Preprocessing",
    description:
      "Clean, normalize, and prepare astronomical observations for machine learning analysis.",
    icon: Database,
  },
  {
    step: "03",
    title: "AI Transit Detection",
    description:
      "Deep learning models identify transit signals and distinguish them from observational noise.",
    icon: BrainCircuit,
  },
  {
    step: "04",
    title: "Planet Classification",
    description:
      "Estimate planetary characteristics using detected transit features and stellar parameters.",
    icon: Orbit,
  },
  {
    step: "05",
    title: "Habitability Analysis",
    description:
      "Evaluate orbital conditions and environmental indicators to estimate habitability.",
    icon: Sparkles,
  },
  {
    step: "06",
    title: "Scientific Report",
    description:
      "Generate structured reports containing AI predictions, confidence scores, and visualizations.",
    icon: FileText,
  },
];