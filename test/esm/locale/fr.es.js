/*global expect */
import date from '../../../../esm/date-and-time.es.js';
import en from '../../../../esm/locale/en.es.js';
import fr from '../../../../esm/locale/fr.es.js';

const MMMM = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
const MMM = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
const dddd = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const ddd = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'];
const dd = ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'];
const A = [
    'matin', 'matin', 'matin', 'matin', 'matin', 'matin', 'matin', 'matin', 'matin', 'matin', 'matin', 'matin',
    'l\'après-midi', 'l\'après-midi', 'l\'après-midi', 'l\'après-midi', 'l\'après-midi', 'l\'après-midi', 'l\'après-midi', 'l\'après-midi', 'l\'après-midi', 'l\'après-midi', 'l\'après-midi', 'l\'après-midi'
];

describe('format with "fr"', () => {
    before(() => date.locale(fr));

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

    after(() => date.locale(en));
});

describe('parse with "fr"', () => {
    before(() => date.locale(fr));

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

    after(() => date.locale(en));
});
