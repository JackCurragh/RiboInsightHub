import React from 'react';
import { ComparisonResult, Tool } from '@/lib/types/orf';

interface ComparisonMatrixProps {
  tools: Tool[];
  comparisons: ComparisonResult[];
  selectedSample?: string;
}

export default function ComparisonMatrix({ tools, comparisons, selectedSample }: ComparisonMatrixProps) {
  const filteredComparisons = selectedSample
    ? comparisons.filter(c => c.sample === selectedSample)
    : comparisons;

  const getComparisonForPair = (toolA: string, toolB: string) => {
    return filteredComparisons.find(
      c => (c.toolA === toolA && c.toolB === toolB) || (c.toolA === toolB && c.toolB === toolA)
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tool
            </th>
            {tools.map(tool => (
              <th
                key={tool.id}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {tool.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tools.map(toolA => (
            <tr key={toolA.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {toolA.name}
              </td>
              {tools.map(toolB => {
                const comparison = getComparisonForPair(toolA.id, toolB.id);
                return (
                  <td key={toolB.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {toolA.id === toolB.id ? (
                      '—'
                    ) : comparison ? (
                      <div className="text-center">
                        <div className="font-medium text-indigo-600">
                          {comparison.metrics.overlapPercentage.toFixed(1)}%
                        </div>
                        <div className="text-xs text-gray-500">
                          {comparison.metrics.sharedORFs} shared
                        </div>
                      </div>
                    ) : (
                      'No data'
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 