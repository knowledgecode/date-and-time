import date from '../../../esm/date-and-time.mjs';
import en from '../../../esm/locale/en.mjs';
import rw from '../../../esm/locale/rw.mjs';

import expect from 'expect.js';

const MMMM = ['Mutarama', 'Gashyantare', 'Werurwe', 'Mata', 'Gicurasi', 'Kamena', 'Nyakanga', 'Kanama', 'Nzeri', 'Ukwakira', 'Ugushyingo', 'Ukuboza'];
const MMM = ['Mtr', 'Gas', 'Wer', 'Mta', 'Gic', 'Kmn', 'Nyk', 'Knm', 'Nze', 'Ukw', 'Ugu', 'Uku'];
const dddd = ['Ku cyumweru', 'Ku wambere', 'Ku wakabiri', 'Ku wagatatu', 'Ku wakane', 'Ku wagatanu', 'Ku wagatandatu'];
const ddd = ['Cyu', 'Mbe', 'Kbr', 'Gtt', 'Kne', 'Gtn', 'Gtd'];
const dd = ['Cy', 'Mb', 'Kb', 'Gt', 'Kn', 'Gn', 'Gd'];

describe('format with "rw"', () => {
    before(() => date.locale(rw));

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

    after(() => date.locale(en));
});

describe('parse with "rw"', () => {
    before(() => date.locale(rw));

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

    after(() => date.locale(en));
});
