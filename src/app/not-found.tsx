import Link from 'next/link';
import MainNav from '@/components/Navigation/MainNav';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto py-16 sm:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404 error</p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              The page you are looking for could not be found.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="text-base font-medium text-indigo-600 hover:text-indigo-500"
              >
                Go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 