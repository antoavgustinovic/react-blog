export const getResourceUrl = (resource: string) => {
  if (resource.startsWith('http')) {
    return resource;
  }

  return `${import.meta.env.VITE_API_BASE_URL}${resource}`;
};
