/*global expect */
import date from '../../../../esm/date-and-time.es.js';
import en from '../../../../esm/locale/en.es.js';
import el from '../../../../esm/locale/el.es.js';

const MMMM = {
    nominative: ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'],
    genitive: ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']
};
const MMM = ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαϊ', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ'];
const dddd = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'];
const ddd = ['Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ'];
const dd = ['Κυ', 'Δε', 'Τρ', 'Τε', 'Πε', 'Πα', 'Σα'];
const A = [
    'πμ', 'πμ', 'πμ', 'πμ', 'πμ', 'πμ', 'πμ', 'πμ', 'πμ', 'πμ', 'πμ', 'πμ',
    'μμ', 'μμ', 'μμ', 'μμ', 'μμ', 'μμ', 'μμ', 'μμ', 'μμ', 'μμ', 'μμ', 'μμ'
];

describe('format with "el"', () => {
    before(() => date.locale(el));

    MMMM.nominative.forEach((m, i) => {
        it('"MMMM" equals to "' + m + '"', () => {
            const now = new Date(2015, i, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MMMM')).to.equal(m);
        });
    });
    MMMM.genitive.forEach((m, i) => {
        it('"MMMM" equals to "' + m + '"', () => {
            const now = new Date(2015, i, 1, 12, 34, 56, 789);
            expect(date.format(now, 'DD MMMM')).to.equal('01 ' + m);
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
    it('"hh" equals to "00"', () => {
        const now = new Date(2015, 0, 1, 0, 34, 56, 789);
        expect(date.format(now, 'hh')).to.equal('00');
    });
    it('"hh" equals to "00"', () => {
        const now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'hh')).to.equal('00');
    });
    it('"hh" equals to "11"', () => {
        const now = new Date(2015, 0, 1, 23, 34, 56, 789);
        expect(date.format(now, 'hh')).to.equal('11');
    });
    it('"h" equals to "0"', () => {
        const now = new Date(2015, 0, 1, 0, 34, 56, 789);
        expect(date.format(now, 'h')).to.equal('0');
    });
    it('"h" equals to "0"', () => {
        const now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'h')).to.equal('0');
    });
    it('"h" equals to "11"', () => {
        const now = new Date(2015, 0, 1, 23, 34, 56, 789);
        expect(date.format(now, 'h')).to.equal('11');
    });

    after(() => date.locale(en));
});

describe('parse with "el"', () => {
    before(() => date.locale(el));

    MMMM.nominative.forEach((m, i) => {
        it('"MMMM"', () => {
            const now = new Date(1970, i, 1);
            expect(date.parse(m, 'MMMM')).to.eql(now);
        });
    });
    MMMM.genitive.forEach((m, i) => {
        it('"MMMM"', () => {
            const now = new Date(1970, i, 1);
            expect(date.parse('01 ' + m, 'DD MMMM')).to.eql(now);
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

    after(() => date.locale(en));
});
