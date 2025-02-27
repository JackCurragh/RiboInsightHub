import { Tool, Sample, ComparisonResult } from '@/lib/types/orf';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export async function loadToolData(): Promise<{ tools: Tool[]; samples: Sample[] }> {
  const response = await fetch(`${BASE_PATH}/data/tools.json`);
  if (!response.ok) {
    throw new Error('Failed to load tool data');
  }
  return response.json();
}

export async function loadComparisonData(): Promise<{ comparisons: ComparisonResult[] }> {
  const response = await fetch(`${BASE_PATH}/data/comparisons.json`);
  if (!response.ok) {
    throw new Error('Failed to load comparison data');
  }
  return response.json();
}

export function generateTrackHubUrl(toolId: string, sampleId: string): string {
  return `${BASE_PATH}/hubs/${toolId}_${sampleId}/hub.txt`;
}

// Helper function to format numbers
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

// Helper function to format memory usage
export function formatMemory(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = bytes;
  let unitIndex = 0;
  
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex++;
  }
  
  return `${value.toFixed(1)} ${units[unitIndex]}`;
}

// Helper function to format runtime
export function formatRuntime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  
  if (hours > 0) {
    return `${hours}h ${minutes}m ${remainingSeconds}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${remainingSeconds}s`;
  }
  return `${remainingSeconds}s`;
} 