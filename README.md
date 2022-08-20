# Sleeper API Client

This is an open source project that can be found at <https://github.com/fantasy-football-league/sleeper-api-client>.

> **_NOTE:_** This package is in active development. Breaking changes can be made at any time.

## Usage

```javascript
import { Request, Response } from 'express';
import Sleeper from 'sleeper-api-client';

const sleeper = new Sleeper({ leagueId: '<your-league-id-here>' });

// Example using Express and Typescript
const getDraftById = async (req: Request, res: Response) => {
  const { status, data } = await sleeper.getDrafts();
  return res.status(status).json(data);
};
```

As of version 0.1.1 your `leagueId` can be included in the options object when instantiating a new Sleeper class.

All responses will return an object containing the `status` and `data` returned from the Sleeper API. Example responses below:

```javascript
// Successful reponse
{
  status: 200,
  data: { ... },
}

// Error
{
  status: 400,
  data: {
    error: 'Bad Request',
    message: '...',
  }
}
```

## Methods

### getDrafts ()

Returns drafts for the league based on league ID.

### getDraftPicks (draftId: string)

Returns draft picks based on draft ID.

### getNFLState ()

Returns the current state of the NFL.

### getLeague ()

Returns league based on league ID.

### getMatchupsByWeek (week: number)

Returns matchups for the given week.

### getWinnersBracket ()

Returns winner's bracket info for a given league.

### getLosersBracket ()

Returns winner's bracket info for a given league.

### getUsers ()

Returns league owners.

### getPlayers ()

Returns a complete list of NFL players.

### getRosters ()

Returns roster's for teams in the league.

### getTransactionsByWeek (week: number)

Returns list of transactions made in the league by week.
