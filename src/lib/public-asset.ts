const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const basePath = configuredBasePath.replace(/\/+$/, "");

export function publicAsset(path: string) {
  if (/^(https?:)?\/\//i.test(path) || path.startsWith("data:")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${basePath}${normalizedPath}`;
}
