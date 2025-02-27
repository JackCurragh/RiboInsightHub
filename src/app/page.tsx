import React from 'react';
import Link from 'next/link';
import MainNav from '@/components/Navigation/MainNav';
import { createPath } from '@/lib/utils/path';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            RiboInsightHub
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Explore and compare ORF caller outputs across different tools and datasets
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Quick Access Cards */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Genome Browser</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Visualize ORF calls in UCSC Genome Browser with custom track hubs
                </p>
                <Link
                  href={createPath('/browse')}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  Launch Browser
                </Link>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Compare Tools</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Compare ORF calls between different tools and analyze their performance
                </p>
                <Link
                  href={createPath('/compare')}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  Start Comparison
                </Link>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Tool Details</h3>
                <p className="mt-2 text-sm text-gray-500">
                  View detailed information about each ORF calling tool and their results
                </p>
                <Link
                  href={createPath('/tools')}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  View Tools
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Dataset Overview
          </h2>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500">
            <p>
              This platform provides analysis of ORF caller performance across:
            </p>
            <ul>
              <li>25 BAM files (22 individual samples + 3 pooled samples)</li>
              <li>6 complete workflow runs from FASTQ to ORF calling</li>
              <li>Multiple cell types: pancreatic progenitor, fibroblast, and endothelial cells</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
} 