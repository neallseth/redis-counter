import { createClient } from "redis";

export async function createRedisClient() {
  const client = createClient({
    url: `rediss://:${process.env.REDIS_PASS}@${process.env.REDIS_URL}:${process.env.REDIS_PORT}`,
  });
  client.on("error", (err) => console.log("Redis Client Error", err));
  await client.connect();
  return client;
}
