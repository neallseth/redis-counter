# redis-counter
Redis-backed counter service, designed for deployment via Vercel Functions.

## Endpoints
Counter service can be operated via REST interface – its endpoints are listed below:

#### New Counter
``/api/new?expiry=30`` initializes a new counter with an expiration of 30s.  Simply omit the ``expiry`` query param for a permanent counter.

#### Read counter
``/api/get?id=123`` returns the current count for a given ``id``.

#### Increment counter
``/api/inc?id=123`` increments the count for a given ``id``.

#### Decrement counter
``/api/dec?id=123`` decrements the count for a given ``id``.

#### Delete counter
``/api/delete?id=123`` deletes the counter corresponding to ``id``.

## Set up
To run the service locally, create a new ``.env`` file in the project's root directory, and [set](https://www.freecodecamp.org/news/how-to-use-node-environment-variables-with-a-dotenv-file-for-node-js-and-npm/) the following values based on your Redis configuration:
1. ``REDIS_PASS``
2. ``REDIS_URL``
3. ``REDIS_PORT``

See [redis-helpers.js](https://github.com/neallseth/redis-counter/blob/2ce2d735e90f84fd717e063f4f870b3c067d38f7/util/redis-helpers.js) to learn how the connection is made.
