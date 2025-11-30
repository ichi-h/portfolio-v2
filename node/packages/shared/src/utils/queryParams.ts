type QueryParam = string | number | boolean | undefined;

/**
 * Join query parameters into a query string
 */
export const joinQueryParams = (params: Record<string, QueryParam>): string => {
  const query = Object.entries(params)
    .map(([key, value]) =>
      value !== undefined ? `${key}=${encodeURIComponent(value)}` : "",
    )
    .filter(([, value]) => value !== "")
    .join("&");

  return query.length > 0 ? `?${query}` : "";
};
