export const formatToSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

export const formatBreadcrumbLabel = (value: string) =>
  value.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
