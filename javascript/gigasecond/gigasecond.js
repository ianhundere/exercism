// A gigasecond is one billion (10**9) seconds.
// 1 Gs -> 1000000000             sec
//      -> 1000000000 / 60        min
//      -> 1000000000 / 3600      hour
//      -> 1000000000 / 86400     days
//      -> 1000000000 / 31536000  year
//                 or / 31622400  leap year

export const gigasecond = (dateOfBirth) => {
  const GIGASECOND_IN_MS = 1000000000000;
  const birthTime = dateOfBirth.getTime();
  return new Date(birthTime + GIGASECOND_IN_MS);
};
