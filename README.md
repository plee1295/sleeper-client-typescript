# Sleeper API Client

This is an open source project that can be found at <https://github.com/fantasy-football-league/sleeper-api-client>.

> **_NOTE:_** This package is in active development. Breaking changes can be made at any time.

## Usage

```javascript
import { Request, Response } from 'express';
import sleeper from 'sleeper-api-client';

// Example using Express and Typescript
const getDraftById = async (req: Request, res: Response) => {
  const leagueId = req.params.id;

  const { status, data } = await sleeper.getDrafts(leagueId);
  return res.status(status).json(data);
};
```

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

### getDrafts (leagueId: string)

Returns drafts for the league based on league ID.

### getDraftPicks (draftId: string)

Returns draft picks based on draft ID.

### getNFLState ()

Returns the current state of the NFL.

### getLeague (leagueId: string)

Returns league based on league ID.

### getMatchupsByWeek (leagueId: string, week: number)

Returns matchups for the given week.

### getWinnersBracket (leagueId: string)

Returns winner's bracket info for a given league.

### getLosersBracket (leagueId: string)

Returns winner's bracket info for a given league.

### getUsers (leagueId: string)

Returns league owners.

### getPlayers ()

Returns a complete list of NFL players.

### getRosters (leagueId: string)

Returns roster's for teams in the league.

### getTransactionsByWeek (leagueId: string, week: number)

Returns list of transactions made in the league by week.
