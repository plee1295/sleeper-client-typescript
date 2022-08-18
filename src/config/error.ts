export default function handleError(res: any) {
  switch (res.status) {
    case 400:
      return {
        status: 400,
        error: 'Bad Request',
        message:
          'The request could not be understood by the server due to malformed syntax. The client SHOULD NOT repeat the request without modifications.',
      };
    case 404:
      return {
        status: 404,
        error: 'Not Found',
        message:
          'The server has not found anything matching the Request-URI. No indication is given of whether the condition is temporary or permanent.',
      };
    case 429:
      return {
        status: 429,
        error: 'Too Many Requests',
        message:
          'The user has sent too many requests in a given amount of time. Intended for use with rate limiting schemes.',
      };
    case 500:
      return {
        status: 500,
        error: 'Internal Server Error',
        message: 'The server encountered an unexpected condition which prevented it from fulfilling the request.',
      };
    case 503:
      return {
        status: 503,
        error: 'Service Unavailable',
        message:
          'The server is currently unable to handle the request due to a temporary overloading or maintenance of the server. The implication is that this is a temporary condition which will be alleviated after some delay. If known, the length of the delay MAY be indicated in a Retry-After header. If no Retry-After is given, the client SHOULD handle the response as it would for a 500 response.',
      };
    default:
      return res;
  }
}
