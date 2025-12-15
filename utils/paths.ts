export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // For production builds with relative base, ensure proper path resolution
  if (base === './' || base === './') {
    return `./${cleanPath}`;
  }
  
  // For absolute base paths, ensure proper concatenation
  if (base !== '/' && !base.endsWith('/')) {
    return `${base}/${cleanPath}`;
  }
  
  return base === '/' ? `/${cleanPath}` : `${base}${cleanPath}`;
};