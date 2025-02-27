export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

export function createPath(path: string): string {
  // Just clean the path and ensure proper slashes
  // Next.js will handle adding the base path
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  return cleanPath ? `/${cleanPath}` : '/';
} 