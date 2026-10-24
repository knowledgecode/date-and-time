const cache = new Map<string, Intl.DateTimeFormat>();

export const getDateTimeFormat = (zoneName: string): Intl.DateTimeFormat | undefined => {
  return cache.get(zoneName) ?? (() => {
    try {
      const dtf = new Intl.DateTimeFormat('en-US', {
        hour12: false, weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric', fractionalSecondDigits: 3,
        timeZone: zoneName
      });

      if (zoneName) {
        cache.set(zoneName, dtf);
      }
      return dtf;
    } catch {
      // Intl throws a RangeError for a zone name it does not recognize.
      return undefined;
    }
  })();
};
