import { expectType } from 'tsd';

import date from './date-and-time';

import ar from './locale/ar';
import az from './locale/az';
import bn from './locale/bn';
import cs from './locale/cs';
import de from './locale/de';
import dk from './locale/dk';
import el from './locale/el';
import en from './locale/en';
import es from './locale/es';
import fa from './locale/fa';
import fr from './locale/fr';
import hi from './locale/hi';
import hu from './locale/hu';
import id from './locale/id';
import it from './locale/it';
import ja from './locale/ja';
import jv from './locale/jv';
import ko from './locale/ko';
import my from './locale/my';
import nl from './locale/nl';
import pa_in from './locale/pa-in';
import pl from './locale/pl';
import pt from './locale/pt';
import ro from './locale/ro';
import ru from './locale/ru';
import rw from './locale/rw';
import sr from './locale/sr';
import sv from './locale/sv';
import th from './locale/th';
import tr from './locale/tr';
import uk from './locale/uk';
import uz from './locale/uz';
import vi from './locale/vi';
import zh_cn from './locale/zh-cn';
import zh_tw from './locale/zh-tw';

import day_of_week from './plugin/day-of-week';
import meridiem from './plugin/meridiem';
import microsecond from './plugin/microsecond';
import ordinal from './plugin/ordinal';
import timespan from './plugin/timespan';
import timezone from './plugin/timezone';
import two_digit_year from './plugin/two-digit-year';

/* Core */

expectType<string[]>(date.compile('YYYY-MM-DDTHH:mm:ss.SSS[Z]'));

const compiledObj: string[] = date.compile('YYYY-MM-DDTHH:mm:ss.SSS[Z]');

expectType<string>(date.format(new Date(), 'YYYY-MM-DDTHH:mm:ss.SSS[Z]'));
expectType<string>(date.format(new Date(), 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', true));
expectType<string>(date.format(new Date(), compiledObj));
expectType<string>(date.format(new Date(), compiledObj, true));

expectType<Date>(date.parse('1970-01-01T12:59:59.999Z', 'YYYY-MM-DDTHH:mm:ss.SSS[Z]'));
expectType<Date>(date.parse('1970-01-01T12:59:59.999Z', 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', true));
expectType<Date>(date.parse('1970-01-01T12:59:59.999Z', compiledObj));
expectType<Date>(date.parse('1970-01-01T12:59:59.999Z', compiledObj, true));

expectType<date.PreparseResult>(date.preparse('1970-01-01T12:59:59.999Z', 'YYYY-MM-DDTHH:mm:ss.SSS[Z]'));
expectType<date.PreparseResult>(date.preparse('1970-01-01T12:59:59.999Z', compiledObj));

const preparseResult: date.PreparseResult = date.preparse('1970-01-01T12:59:59.999Z', 'YYYY-MM-DDTHH:mm:ss.SSS[Z]');

expectType<number>(preparseResult.Y);
expectType<number>(preparseResult.M);
expectType<number>(preparseResult.D);
expectType<number>(preparseResult.H);
expectType<number>(preparseResult.A);
expectType<number>(preparseResult.h);
expectType<number>(preparseResult.m);
expectType<number>(preparseResult.s);
expectType<number>(preparseResult.S);
expectType<number>(preparseResult.Z);
expectType<number>(preparseResult._index);
expectType<number>(preparseResult._length);
expectType<number>(preparseResult._match);

expectType<boolean>(date.isValid('1970-01-01T12:59:59.999Z', 'YYYY-MM-DDTHH:mm:ss.SSS[Z]'));
expectType<boolean>(date.isValid('1970-01-01T12:59:59.999Z', compiledObj));
expectType<boolean>(date.isValid(preparseResult));

const compiledObj2: string[] = date.compile('MMM D YYYY H:mm:ss');

expectType<string>(date.transform('1970-01-01T12:59:59.999Z', 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', 'MMM D YYYY H:mm:ss'));
expectType<string>(date.transform('1970-01-01T12:59:59.999Z', 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', 'MMM D YYYY H:mm:ss', true));
expectType<string>(date.transform('1970-01-01T12:59:59.999Z', 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', compiledObj2));
expectType<string>(date.transform('1970-01-01T12:59:59.999Z', 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', compiledObj2, true));
expectType<string>(date.transform('1970-01-01T12:59:59.999Z', compiledObj, 'MMM D YYYY H:mm:ss'));
expectType<string>(date.transform('1970-01-01T12:59:59.999Z', compiledObj, 'MMM D YYYY H:mm:ss', true));
expectType<string>(date.transform('1970-01-01T12:59:59.999Z', compiledObj, compiledObj2));
expectType<string>(date.transform('1970-01-01T12:59:59.999Z', compiledObj, compiledObj2, true));

expectType<Date>(date.addYears(new Date(), 1));
expectType<Date>(date.addYears(new Date(), 1, true));

expectType<Date>(date.addMonths(new Date(), 1));
expectType<Date>(date.addMonths(new Date(), 1, true));

expectType<Date>(date.addDays(new Date(), 1));
expectType<Date>(date.addDays(new Date(), 1, true));

expectType<Date>(date.addHours(new Date(), 1));
expectType<Date>(date.addHours(new Date(), 1, true));

expectType<Date>(date.addMinutes(new Date(), 1));
expectType<Date>(date.addMinutes(new Date(), 1, true));

expectType<Date>(date.addSeconds(new Date(), 1));
expectType<Date>(date.addSeconds(new Date(), 1, true));

expectType<Date>(date.addMilliseconds(new Date(), 1));
expectType<Date>(date.addMilliseconds(new Date(), 1, true));

expectType<date.SubtractResult>(date.subtract(new Date(), new Date()));

const subtractResult: date.SubtractResult = date.subtract(new Date(), new Date());

expectType<number>(subtractResult.toDays());
expectType<number>(subtractResult.toHours());
expectType<number>(subtractResult.toMinutes());
expectType<number>(subtractResult.toSeconds());
expectType<number>(subtractResult.toMilliseconds());

expectType<boolean>(date.isLeapYear(2000));

expectType<boolean>(date.isSameDay(new Date(), new Date()));

expectType<string>(date.locale());

expectType<string>(date.locale('locale'));

const extension: date.Extension = {
    res: {
        XXX: [
            ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7'],
            ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7']
        ],
        QQ: ['Q1', 'Q2', 'Q3', 'Q4']
    },
    formatter: {
        foo: (): void => {},
        bar: (): string => { return ''; },
        baz: (arg: number): number => { return arg; }
    },
    parser: {
        foo: (): void => {},
        bar: (): string => { return ''; },
        baz: (arg: number): number => { return arg; }
    },
    extender: {
        foo: (): void => {},
        bar: (): string => { return ''; },
        baz: (arg: number): number => { return arg; }
    }
};

expectType<void>(date.extend(extension));

expectType<void>(date.plugin('plugin'));

/* Locales */

expectType<string>(date.locale(ar));
expectType<string>(date.locale(az));
expectType<string>(date.locale(bn));
expectType<string>(date.locale(cs));
expectType<string>(date.locale(de));
expectType<string>(date.locale(dk));
expectType<string>(date.locale(el));
expectType<string>(date.locale(en));
expectType<string>(date.locale(es));
expectType<string>(date.locale(fa));
expectType<string>(date.locale(fr));
expectType<string>(date.locale(hi));
expectType<string>(date.locale(hu));
expectType<string>(date.locale(id));
expectType<string>(date.locale(it));
expectType<string>(date.locale(ja));
expectType<string>(date.locale(jv));
expectType<string>(date.locale(ko));
expectType<string>(date.locale(my));
expectType<string>(date.locale(nl));
expectType<string>(date.locale(pa_in));
expectType<string>(date.locale(pl));
expectType<string>(date.locale(pt));
expectType<string>(date.locale(ro));
expectType<string>(date.locale(ru));
expectType<string>(date.locale(rw));
expectType<string>(date.locale(sr));
expectType<string>(date.locale(sv));
expectType<string>(date.locale(th));
expectType<string>(date.locale(tr));
expectType<string>(date.locale(uk));
expectType<string>(date.locale(uz));
expectType<string>(date.locale(vi));
expectType<string>(date.locale(zh_cn));
expectType<string>(date.locale(zh_tw));

/* Plugins */

expectType<void>(date.plugin(day_of_week));
expectType<void>(date.plugin(meridiem));
expectType<void>(date.plugin(microsecond));
expectType<void>(date.plugin(ordinal));
expectType<void>(date.plugin(timespan));
expectType<void>(date.plugin(timezone));
expectType<void>(date.plugin(two_digit_year));

expectType<date.TimeSpanResult>(date.timeSpan(new Date(), new Date()));

const timeSpanResult: date.TimeSpanResult = date.timeSpan(new Date(), new Date());

expectType<string>(timeSpanResult.toDays('D H m s S'));
expectType<string>(timeSpanResult.toHours('H m s S'));
expectType<string>(timeSpanResult.toMinutes('m s S'));
expectType<string>(timeSpanResult.toSeconds('s S'));
expectType<string>(timeSpanResult.toMilliseconds('S'));

expectType<string>(date.formatTZ(new Date(), 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', 'America/Los_Angeles'));
expectType<string>(date.formatTZ(new Date(), 'YYYY-MM-DDTHH:mm:ss.SSS[Z]'));
expectType<string>(date.formatTZ(new Date(), compiledObj, 'America/Los_Angeles'));
expectType<string>(date.formatTZ(new Date(), compiledObj));

expectType<Date>(date.parseTZ('1970-01-01T12:59:59.999Z', 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', 'America/Los_Angeles'));
expectType<Date>(date.parseTZ('1970-01-01T12:59:59.999Z', 'YYYY-MM-DDTHH:mm:ss.SSS[Z]'));
expectType<Date>(date.parseTZ('1970-01-01T12:59:59.999Z', compiledObj, 'America/Los_Angeles'));
expectType<Date>(date.parseTZ('1970-01-01T12:59:59.999Z', compiledObj));

expectType<string>(date.transformTZ('1970-01-01T12:59:59.999Z', 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', 'MMM D YYYY H:mm:ss', 'America/Los_Angeles'));
expectType<string>(date.transformTZ('1970-01-01T12:59:59.999Z', 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', 'MMM D YYYY H:mm:ss'));
expectType<string>(date.transformTZ('1970-01-01T12:59:59.999Z', 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', compiledObj2, 'America/Los_Angeles'));
expectType<string>(date.transformTZ('1970-01-01T12:59:59.999Z', 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', compiledObj2));
expectType<string>(date.transformTZ('1970-01-01T12:59:59.999Z', compiledObj, 'MMM D YYYY H:mm:ss', 'America/Los_Angeles'));
expectType<string>(date.transformTZ('1970-01-01T12:59:59.999Z', compiledObj, 'MMM D YYYY H:mm:ss'));
expectType<string>(date.transformTZ('1970-01-01T12:59:59.999Z', compiledObj, compiledObj2, 'America/Los_Angeles'));
expectType<string>(date.transformTZ('1970-01-01T12:59:59.999Z', compiledObj, compiledObj2));

expectType<Date>(date.addYearsTZ(new Date(), 1));
expectType<Date>(date.addYearsTZ(new Date(), 1, 'America/Los_Angeles'));

expectType<Date>(date.addMonthsTZ(new Date(), 1));
expectType<Date>(date.addMonthsTZ(new Date(), 1, 'America/Los_Angeles'));

expectType<Date>(date.addDaysTZ(new Date(), 1));
expectType<Date>(date.addDaysTZ(new Date(), 1, 'America/Los_Angeles'));
