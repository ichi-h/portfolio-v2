/**
 * Format date to "YYYY-MM-DD" format by default, or with a custom separator if provided.
 */
export const formatDate = (date: string, sep: string = "-"): string => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const day = d.getDate().toString().padStart(2, "0");
  return `${year}${sep}${month}${sep}${day}`;
};
