export interface ORF {
  id: string;
  chromosome: string;
  start: number;
  end: number;
  strand: '+' | '-';
  exons: Array<{
    start: number;
    end: number;
  }>;
  type: 'annotated' | 'novel';
  tool: string;
  sample: string;
  score?: number;
  metadata?: Record<string, string | number | boolean>;
}

export interface Tool {
  id: string;
  name: string;
  version: string;
  description: string;
  performanceMetrics: {
    runtime: number;
    memoryUsage: number;
  };
}

export interface Sample {
  id: string;
  name: string;
  dataset: string;
  type: 'pancreas' | 'fibroblast' | 'endothelial';
  isPooled: boolean;
  metadata: {
    riboSeqFile?: string;
    rnaSeqFile?: string;
    gseAccession: string;
  };
}

export interface ComparisonResult {
  toolA: string;
  toolB: string;
  sample: string;
  metrics: {
    sharedORFs: number;
    uniqueToA: number;
    uniqueToB: number;
    overlapPercentage: number;
  };
} 