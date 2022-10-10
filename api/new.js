import { createRedisClient } from "../util/redis-helpers";
import {
  handleErrorResponse,
  handleSuccessResponse,
} from "../util/server-helpers";

export default async function handler(request, response) {
  const cleanedIP = request.socket.remoteAddress.replaceAll(".", "");
  const randomNum = Math.floor(Math.random() * 100);
  const newCounterID = `${randomNum}${cleanedIP}${Date.now()}`;

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
