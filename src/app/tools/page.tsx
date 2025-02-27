import React from 'react';
import MainNav from '@/components/Navigation/MainNav';

export default function ToolsPage() {
  return (
    <React.Fragment>
      <MainNav />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            ORF Calling Tools
          </h1>
          <p className="mt-2 text-gray-600">
            Compare and analyze different ORF calling tools and their results
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900">RiboSeQC</h2>
            <p className="mt-2 text-gray-600">
              Comprehensive ORF caller with quality control features
            </p>
            <dl className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Version</dt>
                <dd className="text-sm text-gray-900">1.0.0</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Runtime</dt>
                <dd className="text-sm text-gray-900">1h</dd>
              </div>
            </dl>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900">PRICE</h2>
            <p className="mt-2 text-gray-600">
              Precise ORF identification tool
            </p>
            <dl className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Version</dt>
                <dd className="text-sm text-gray-900">2.0.0</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Runtime</dt>
                <dd className="text-sm text-gray-900">45m</dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
} 