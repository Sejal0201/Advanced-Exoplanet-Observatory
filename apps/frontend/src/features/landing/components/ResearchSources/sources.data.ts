import {
  Rocket,
  Telescope,
  Satellite,
  Orbit,
 Stars,
  Globe,
} from "lucide-react";

export const sources = [
  {
    name: "NASA",
    icon: Rocket,
    description:
      "Open astronomical datasets powering AI-driven exoplanet discovery.",
    stats: "120K+ Light Curves",
  },
  {
    name: "ESA",
    icon: Satellite,
    description:
      "European Space Agency observational archives and stellar catalogues.",
    stats: "40+ Missions",
  },
  {
    name: "Kepler",
    icon: Telescope,
    description:
      "Historic mission responsible for thousands of confirmed exoplanets.",
    stats: "2,600+ Discoveries",
  },
  {
    name: "TESS",
    icon: Orbit,
    description:
      "Ongoing all-sky survey providing high-quality transit observations.",
    stats: "Millions of Observations",
  },
  {
    name: "Gaia",
    icon: Globe,
    description:
      "Ultra-precise stellar measurements used for planetary analysis.",
    stats: "1.8 Billion Stars",
  },
  {
    name: "JWST",
    icon: Stars,
    description:
      "James Webb observations enabling advanced atmospheric studies.",
    stats: "Deep Space Imaging",
  },
];