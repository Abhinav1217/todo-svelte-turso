import type { Config } from "drizzle-kit";

export default {
  dialect: "sqlite",
  driver: 'turso',
  schema: "./db/schema/*",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL as string,
    authToken: process.env.TURSO_AUTH_TOKEN as string,
}
} satisfies Config;