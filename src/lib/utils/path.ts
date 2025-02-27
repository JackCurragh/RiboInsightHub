export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

export function createPath(path: string): string {
  const basePath = getBasePath();
  // Remove any leading slashes from the path and add a single leading slash
  const cleanPath = path.replace(/^\/+/, '');
  return `${basePath}/${cleanPath}`.replace(/\/+$/, '');
} 