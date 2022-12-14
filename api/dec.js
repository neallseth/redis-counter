import { createRedisClient } from "../util/redis-helpers";
import {
  handleErrorResponse,
  handleSuccessResponse,
} from "../util/server-helpers";

export default async function handler(request, response) {
  const counterID = request.query.id;

  if (!counterID) {
    handleErrorResponse(response, "Invalid ID");
    return;
  }
  const redisClient = await createRedisClient();

  try {
    const currentCount = await redisClient.decr(counterID);
    handleSuccessResponse(response, "Count decremented", { currentCount });
  } catch (err) {
    handleErrorResponse(response, err);
  }

  redisClient.quit();
}
