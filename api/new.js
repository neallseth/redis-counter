import { createRedisClient } from "../util/redis-helpers.js";
import {
  handleErrorResponse,
  handleSuccessResponse,
} from "../util/server-helpers.js";
import { nanoid } from "nanoid";

export default async function handler(request, response) {
  const newCounterID = nanoid();

  const expiration = request.query.expiry;

  const redisClient = await createRedisClient();

  try {
    if (expiration) {
      await redisClient.setEx(newCounterID, parseInt(expiration), "0");
    } else {
      await redisClient.set(newCounterID, 0);
    }

    handleSuccessResponse(
      response,
      `New counter created - ${
        expiration ? `set to expire in ${expiration} seconds` : "no expiration"
      }`,
      { newCounterID }
    );
  } catch (err) {
    handleErrorResponse(response, err);
  }

  redisClient.quit();
}
