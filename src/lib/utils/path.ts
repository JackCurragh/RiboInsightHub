export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

export function createPath(path: string): string {
  const basePath = getBasePath();
  // Remove any leading or trailing slashes
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  // Combine base path with clean path, ensuring single slashes
  const fullPath = [basePath, cleanPath].filter(Boolean).join('/');
  // Add leading slash and handle root path
  return fullPath ? `/${fullPath}` : '/';
} 