import React from 'react';
import MainNav from '@/components/Navigation/MainNav';
import ComparisonMatrix from '@/components/Comparison/ComparisonMatrix';

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
  },
  {
    id: 'tool3',
    name: 'ORF Tool 3',
    version: '1.5.0',
    description: 'Third ORF calling tool',
    performanceMetrics: {
      runtime: 4200,
      memoryUsage: 5120
    }
  }
];

const mockComparisons = [
  {
    toolA: 'tool1',
    toolB: 'tool2',
    sample: 'sample1',
    metrics: {
      sharedORFs: 1500,
      uniqueToA: 300,
      uniqueToB: 250,
      overlapPercentage: 75.5
    }
  },
  {
    toolA: 'tool1',
    toolB: 'tool3',
    sample: 'sample1',
    metrics: {
      sharedORFs: 1200,
      uniqueToA: 600,
      uniqueToB: 400,
      overlapPercentage: 65.2
    }
  },
  {
    toolA: 'tool2',
    toolB: 'tool3',
    sample: 'sample1',
    metrics: {
      sharedORFs: 1350,
      uniqueToA: 450,
      uniqueToB: 350,
      overlapPercentage: 70.8
    }
  }
];

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Tool Comparison
          </h1>
          <p className="mt-2 text-gray-600">
            Compare the performance and results of different ORF calling tools
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              ORF Overlap Matrix
            </h2>
            <ComparisonMatrix
              tools={mockTools}
              comparisons={mockComparisons}
              selectedSample="sample1"
            />
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Performance Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockTools.map(tool => (
                <div key={tool.id} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-900">{tool.name}</h3>
                  <dl className="mt-2 space-y-1">
                    <div className="flex justify-between">
                      <dt className="text-sm text-gray-500">Runtime:</dt>
                      <dd className="text-sm text-gray-900">{tool.performanceMetrics.runtime}s</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-gray-500">Memory Usage:</dt>
                      <dd className="text-sm text-gray-900">{tool.performanceMetrics.memoryUsage}MB</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 