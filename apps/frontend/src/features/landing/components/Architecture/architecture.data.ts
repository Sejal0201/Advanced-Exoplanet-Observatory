import {
  BrainCircuit,
  Cloud,
  Database,
  Server,
  Cpu,
  Globe,
} from "lucide-react";

export const architecture = [
  {
    title: "Frontend",
    subtitle: "React • TypeScript • Tailwind",
    icon: Globe,
  },
  {
    title: "Backend",
    subtitle: "FastAPI • JWT • REST API",
    icon: Server,
  },
  {
    title: "AI Engine",
    subtitle: "TensorFlow • PyTorch",
    icon: BrainCircuit,
  },
  {
    title: "Database",
    subtitle: "PostgreSQL • SQLAlchemy",
    icon: Database,
  },
  {
    title: "Processing",
    subtitle: "Redis • Celery",
    icon: Cpu,
  },
  {
    title: "Deployment",
    subtitle: "Docker • AWS",
    icon: Cloud,
  },
];