import { createRedisClient } from "../util/redis-helpers";
import {
  handleErrorResponse,
  handleSuccessResponse,
} from "../util/server-helpers";

export default async function handler(request, response) {
  if (!request.query.id) {
    response.status(400).json({
      status: "Failure",
      message: "Invalid ID",
    });
    return;
  }

  const counterID = request.query.id;

  const redisClient = await createRedisClient();

  try {
    const currentCount = await redisClient.get(counterID);
    handleSuccessResponse(response, "Count retrieved", { currentCount });
  } catch (err) {
    handleErrorResponse(response, err);
  }

  redisClient.quit();
}
