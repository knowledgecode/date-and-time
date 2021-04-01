/*global expect */
import date from '../../../../esm/date-and-time.es.js';
import en from '../../../../esm/locale/en.es.js';
import ar from '../../../../esm/locale/ar.es.js';

const MMMM = ['كانون الثاني يناير', 'شباط فبراير', 'آذار مارس', 'نيسان أبريل', 'أيار مايو', 'حزيران يونيو', 'تموز يوليو', 'آب أغسطس', 'أيلول سبتمبر', 'تشرين الأول أكتوبر', 'تشرين الثاني نوفمبر', 'كانون الأول ديسمبر'];
const MMM = ['كانون الثاني يناير', 'شباط فبراير', 'آذار مارس', 'نيسان أبريل', 'أيار مايو', 'حزيران يونيو', 'تموز يوليو', 'آب أغسطس', 'أيلول سبتمبر', 'تشرين الأول أكتوبر', 'تشرين الثاني نوفمبر', 'كانون الأول ديسمبر'];
const dddd = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
const ddd = ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'];
const dd = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'];
const A = [
    'ص', 'ص', 'ص', 'ص', 'ص', 'ص', 'ص', 'ص', 'ص', 'ص', 'ص', 'ص',
    'م', 'م', 'م', 'م', 'م', 'م', 'م', 'م', 'م', 'م', 'م', 'م'
];

describe('format with "ar"', () => {
    before(() => date.locale(ar));

    MMMM.forEach((m, i) => {
        it('"MMMM" equals to "' + m + '"', () => {
            const now = new Date(2015, i, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MMMM')).to.equal(m);
        });
    });
    MMM.forEach((m, i) => {
        it('"MMM" equals to "' + m + '"', () => {
            const now = new Date(2015, i, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MMM')).to.equal(m);
        });
    });
    dddd.forEach((d, i) => {
        it('"dddd" equals to "' + d + '"', () => {
            const now = new Date(2016, 0, i + 3, 12, 34, 56, 789);
            expect(date.format(now, 'dddd')).to.equal(d);
        });
    });
    ddd.forEach((d, i) => {
        it('"ddd" equals to "' + d + '"', () => {
            const now = new Date(2016, 0, i + 3, 12, 34, 56, 789);
            expect(date.format(now, 'ddd')).to.equal(d);
        });
    });
    dd.forEach((d, i) => {
        it('"dd" equals to "' + d + '"', () => {
            const now = new Date(2016, 0, i + 3, 12, 34, 56, 789);
            expect(date.format(now, 'dd')).to.equal(d);
        });
    });
    A.forEach((a, i) => {
        it('"A" equals to "' + a + '"', () => {
            const now = new Date(2016, 0, 1, i, 34, 56, 789);
            expect(date.format(now, 'A')).to.equal(a);
        });
    });
    it('numeric expression', () => {
        const now = new Date(2016, 0, 1, 2, 34, 56, 789),
            str = '٢٠١٦٠١٠١٠٢٣٤٥٦٧٨٩';
        expect(date.format(now, 'YYYYMMDDHHmmssSSS')).to.equal(str);
    });

    after(() => date.locale(en));
});

describe('parse with "ar"', () => {
    before(() => date.locale(ar));

    MMMM.forEach((m, i) => {
        it('"MMMM"', () => {
            const now = new Date(1970, i, 1);
            expect(date.parse(m, 'MMMM')).to.eql(now);
        });
    });
    MMM.forEach((m, i) => {
        it('"MMM"', () => {
            const now = new Date(1970, i, 1);
            expect(date.parse(m, 'MMM')).to.eql(now);
        });
    });
    A.forEach((a, i) => {
        it('h A', () => {
            const now = new Date(1970, 0, 1, i);
            expect(date.parse((i > 11 ? i - 12 : i) + ' ' + a, 'h A')).to.eql(now);
        });
    });
    it('numeric expression', () => {
        const now = new Date(2016, 0, 1, 2, 34, 56, 789),
            str = '٢٠١٦٠١٠١٠٢٣٤٥٦٧٨٩';
        expect(date.parse(str, 'YYYYMMDDHHmmssSSS')).to.eql(now);
    });

    after(() => date.locale(en));
});
