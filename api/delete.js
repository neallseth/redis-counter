import { createRedisClient } from "../util/redis-helpers";
import {
  handleErrorResponse,
  handleSuccessResponse,
} from "../util/server-helpers";

export default async function handler(request, response) {
  if (!request.query.id) {
    response.status(400).json({
      status: "Error",
      message: "Invalid ID",
    });
    return;
  }

  const counterID = request.query.id;

  try {
    const redisClient = await createRedisClient();
    await redisClient.del(counterID);

    handleSuccessResponse(response, "Counter deleted", { counterID });
  } catch (err) {
    handleErrorResponse(response, err);
  }

  redisClient.quit();
}
