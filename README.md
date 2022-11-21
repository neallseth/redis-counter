# redis-counter
Redis-backed counter service.  Designed for deployment via Vercel Functions

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



