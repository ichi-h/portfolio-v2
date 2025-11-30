/**
 * Validate and retrieve environment variables
 * Note: This is a generic utility. Applications should provide their own
 * environment variable access (e.g., import.meta.env for Astro, process.env for Node)
 */
export const validateEnv = <T extends string>(
  env: Record<T, string | undefined>,
): Record<T, string> => {
  const missingEnv = Object.entries(env)
    .filter(([, value]) => value === undefined)
    .map(([key]) => key);

  if (missingEnv.length > 0) {
    throw new Error(`Missing environment variables: ${missingEnv.join(", ")}`);
  }

  return env as Record<T, string>;
};
