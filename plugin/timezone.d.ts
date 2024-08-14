declare module '../date-and-time' {
    /**
     * Formatting date and time objects using time zone names (Date -> String)
     * @param dateObj - A Date object
     * @param formatString - A format string
     * @param [timeZone] - Output as this time zone
     * @returns A formatted string
     */
    export function formatTZ(dateObj: Date, formatString: string, timeZone?: string): string;

    /**
     * Formatting date and time objects using time zone names (Date -> String)
     * @param dateObj - A Date object
     * @param compiledObj - A compiled object of format string
     * @param [timeZone] - Output as this time zone
     * @returns A formatted string
     */
    export function formatTZ(dateObj: Date, compiledObj: string[], timeZone?: string): string;

    /**
     * Parsing date and time strings using time zone names (String -> Date)
     * @param dateString - A date and time string
     * @param formatString - A format string
     * @param [timeZone] - Input as this time zone
     * @returns A Date object
     */
    export function parseTZ(dateString: string, formatString: string, timeZone?: string): Date;

    /**
     * Parsing date and time strings using time zone names (String -> Date)
     * @param dateString - A date and time string
     * @param compiledObj - A compiled object of format string
     * @param [timeZone] - Input as this time zone
     * @returns A Date object
     */
    export function parseTZ(dateString: string, compiledObj: string[], timeZone?: string): Date;

    /**
     * Format transformation of date and time strings using time zone names (String -> String)
     * @param dateString - A date and time string
     * @param formatString1 - A format string before transformation
     * @param formatString2 - A format string after transformation
     * @param [timeZone] - Output as this time zone
     * @returns A formatted string
     */
    export function transformTZ(dateString: string, formatString1: string, formatString2: string, timeZone?: string): string;

    /**
     * Format transformation of date and time strings using time zone names (String -> String)
     * @param dateString - A date and time string
     * @param formatString - A format string before transformation
     * @param compiledObj - A compiled object of format string after transformation
     * @param [timeZone] - Output as this time zone
     * @returns A formatted string
     */
    export function transformTZ(dateString: string, formatString: string, compiledObj: string[], timeZone?: string): string;

    /**
     * Format transformation of date and time strings using time zone names (String -> String)
     * @param dateString - A date and time string
     * @param compiledObj - A compiled object of format string before transformation
     * @param formatString - A format string after transformation
     * @param [timeZone] - Output as this time zone
     * @returns A formatted string
     */
    export function transformTZ(dateString: string, compiledObj: string[], formatString: string, timeZone?: string): string;

    /**
     * Format transformation of date and time strings using time zone names (String -> String)
     * @param dateString - A date and time string
     * @param compiledObj1 - A compiled object of format string before transformation
     * @param compiledObj2 - A compiled object of format string after transformation
     * @param [timeZone] - Output as this time zone
     * @returns A formatted string
     */
    export function transformTZ(dateString: string, compiledObj1: string[], compiledObj2: string[], timeZone?: string): string;

    /**
     * Adding years considering time zones
     * @param dateObj - A Date object
     * @param years - The number of years to add
     * @param [timeZone] - The time zone to use for the calculation
     * @returns The Date object after adding the specified number of years
     */
    export function addYearsTZ(dateObj: Date, years: number, timeZone?: string): Date;

    /**
     * Adding months considering time zones
     * @param dateObj - A Date object
     * @param months - The number of months to add
     * @param [timeZone] - The time zone to use for the calculation
     * @returns The Date object after adding the specified number of months
     */
    export function addMonthsTZ(dateObj: Date, months: number, timeZone?: string): Date;

    /**
     * Adding days considering time zones
     * @param dateObj - A Date object
     * @param days - The number of days to add
     * @param [timeZone] - The time zone to use for the calculation
     * @returns The Date object after adding the specified number of days
     */
    export function addDaysTZ(dateObj: Date, days: number, timeZone?: string): Date;
}

export default function (proto: unknown, date?: unknown): string;
