const cache = new Map<string, Intl.DateTimeFormat>();

export const getDateTimeFormat = (zoneName: string): Intl.DateTimeFormat => {
  return cache.get(zoneName) ?? (() => {
    const dtf = new Intl.DateTimeFormat('en-US', {
      hour12: false, weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric', fractionalSecondDigits: 3,
      timeZone: zoneName
    });

    if (zoneName) {
      cache.set(zoneName, dtf);
    }
    return dtf;
  })();
};
