'use client';

import React, { useState } from 'react';
import { Tool, Sample } from '@/lib/types/orf';
import { generateTrackHubUrls } from '@/lib/utils/trackHub';

interface UCSCBrowserProps {
  tools: readonly Tool[];
  samples: readonly Sample[];
  baseUrl: string;
  hubName: string;
}

export default function UCSCBrowser({ tools, samples, baseUrl, hubName }: UCSCBrowserProps) {
  const [selectedRegion, setSelectedRegion] = useState('chr1:1-1000000');
  const [selectedTracks, setSelectedTracks] = useState<string[]>([]);
  
  const { hubUrl } = generateTrackHubUrls(baseUrl, hubName);
  const ucscUrl = `https://genome.ucsc.edu/cgi-bin/hgTracks?db=hg38&position=${selectedRegion}&hubUrl=${encodeURIComponent(hubUrl)}`;
  
  const handleTrackToggle = (trackId: string) => {
    setSelectedTracks(prev =>
      prev.includes(trackId)
        ? prev.filter(id => id !== trackId)
        : [...prev, trackId]
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <div className="flex-1">
          <label htmlFor="region" className="block text-sm font-medium text-gray-700">
            Genomic Region
          </label>
          <input
            type="text"
            id="region"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="e.g., chr1:1-1000000"
          />
        </div>
        
        <button
          onClick={() => window.open(ucscUrl, '_blank')}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Open in UCSC Browser
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map(tool => (
          <div key={tool.id} className="border rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-900">{tool.name}</h3>
            <div className="mt-2 space-y-2">
              {samples.map(sample => {
                const annotatedTrackId = `${tool.id}_${sample.id}_annotated`;
                const novelTrackId = `${tool.id}_${sample.id}_novel`;
                
                return (
                  <div key={sample.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={annotatedTrackId}
                      checked={selectedTracks.includes(annotatedTrackId)}
                      onChange={() => handleTrackToggle(annotatedTrackId)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <input
                      type="checkbox"
                      id={novelTrackId}
                      checked={selectedTracks.includes(novelTrackId)}
                      onChange={() => handleTrackToggle(novelTrackId)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor={annotatedTrackId} className="text-sm text-gray-700">
                      {sample.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-sm font-medium text-gray-900">Selected Tracks</h4>
        <div className="mt-2">
          {selectedTracks.length === 0 ? (
            <p className="text-sm text-gray-500">No tracks selected</p>
          ) : (
            <ul className="space-y-1">
              {selectedTracks.map(trackId => (
                <li key={trackId} className="text-sm text-gray-700">
                  {trackId.replace(/_/g, ' ')}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
} 