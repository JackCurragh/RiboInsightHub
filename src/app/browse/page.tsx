'use client';

import React from 'react';
import MainNav from '@/components/Navigation/MainNav';
import UCSCBrowser from '@/components/TrackHub/UCSCBrowser';

// Mock data for development - replace with actual data later
const mockTools = [
  {
    id: 'tool1',
    name: 'ORF Tool 1',
    version: '1.0.0',
    description: 'First ORF calling tool',
    performanceMetrics: {
      runtime: 3600,
      memoryUsage: 4096
    }
  },
  {
    id: 'tool2',
    name: 'ORF Tool 2',
    version: '2.1.0',
    description: 'Second ORF calling tool',
    performanceMetrics: {
      runtime: 2800,
      memoryUsage: 3584
    }
  }
];

const mockSamples = [
  {
    id: 'sample1',
    name: 'Pancreas 1',
    dataset: 'GSE144682',
    type: 'pancreas',
    isPooled: false,
    metadata: {
      riboSeqFile: 'SRR11005875_to_79.Aligned.sortedByCoord.out.bam',
      rnaSeqFile: 'SRR11005905.Aligned.sortedByCoord.out.bam',
      gseAccession: 'GSE144682'
    }
  },
  {
    id: 'sample2',
    name: 'Fibroblast Pooled',
    dataset: 'GSE182371',
    type: 'fibroblast',
    isPooled: true,
    metadata: {
      riboSeqFile: 'Ribo_Fib_pooled.bam',
      rnaSeqFile: 'RNA_fib_pooled.bam',
      gseAccession: 'GSE182371'
    }
  }
] as const;

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Genome Browser Integration
          </h1>
          <p className="mt-2 text-gray-600">
            Visualize and compare ORF calls across different tools and samples using the UCSC Genome Browser
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <UCSCBrowser
            tools={mockTools}
            samples={mockSamples}
            baseUrl="https://example.com"
            hubName="riboinsight_hub"
          />
        </div>
      </main>
    </div>
  );
} 