export interface Report {
  id: number;
  datasetName: string;
  mission: string;
  createdAt: string;
  status: string;
  confidence: number;
  candidateCount: number;
  reportUrl?: string;
}