# Sleeper API Client

This is an open source project that can be found at <https://github.com/fantasy-football-league/sleeper-api-client>.

> **_NOTE:_** This package is in active development. Breaking changes can be made at any time.

## Usage

```javascript
import { Request, Response } from 'express';
import Sleeper from 'sleeper-api-client';

const sleeper = new Sleeper({
  leagueId: '<your-league-id-here>',
  draftId: '<your-draft-id-here>',
});

// Example using Express and Typescript
const getDraftById = async (req: Request, res: Response) => {
  // By default sleeper.getDrafts() will use the `draftId` from the options object
  // It can be overriden: `sleeper.getDrafts('<any-other-draft-id-here>')`
  const { status, data } = await sleeper.getDrafts();
  return res.status(status).json(data);
};
```

As of version 0.1.2 your `leagueId` and `draftId` can be included in an optional options object when instantiating a new Sleeper class.

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

### getDrafts (leagueId?: string | undefined = options.leagueId)

Returns drafts for the league based on league ID.

### getDraftPicks (draftId?: string | undefined = options.draftId)

Returns draft picks based on draft ID.

### getNFLState ()

Returns the current state of the NFL.

### getLeague (leagueId?: string | undefined = options.leagueId)

Returns league based on league ID.

### getMatchupsByWeek (leagueId?: string | undefined = options.leagueId, week: number)

Returns matchups for the given week.

### getWinnersBracket (leagueId?: string | undefined = options.leagueId)

Returns winner's bracket info for a given league.

### getLosersBracket (leagueId?: string | undefined = options.leagueId)

Returns winner's bracket info for a given league.

### getUsers (leagueId?: string | undefined = options.leagueId)

Returns league owners.

### getPlayers ()

Returns a complete list of NFL players.

### getRosters (leagueId?: string | undefined = options.leagueId)

Returns roster's for teams in the league.

### getTransactionsByWeek (leagueId?: string | undefined = options.leagueId, week: number)

Returns list of transactions made in the league by week.
