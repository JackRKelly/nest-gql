import "dotenv/config";

function validateEnv<T extends string = string>(key: keyof NodeJS.ProcessEnv, defaultValue?: T): T {
  const value = process.env[key] as T | undefined;

  if (!value) {
    if (typeof defaultValue !== "undefined") {
      return defaultValue;
    } else {
      throw new Error(`${key} is not defined in environment variables`);
    }
  }

  return value;
}

export class env {
  static readonly NodeEnv = validateEnv<"development" | "production">("NODE_ENV", "development");

  static readonly Port = validateEnv("PORT", "3000");
}
