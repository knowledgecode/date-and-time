/*global expect */
import date from '../../../../esm/date-and-time.es.js';
import en from '../../../../esm/locale/en.es.js';
import hi from '../../../../esm/locale/hi.es.js';

const MMMM = ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितम्बर', 'अक्टूबर', 'नवम्बर', 'दिसम्बर'];
const MMM = ['जन.', 'फ़र.', 'मार्च', 'अप्रै.', 'मई', 'जून', 'जुल.', 'अग.', 'सित.', 'अक्टू.', 'नव.', 'दिस.'];
const dddd = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरूवार', 'शुक्रवार', 'शनिवार'];
const ddd = ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरू', 'शुक्र', 'शनि'];
const dd = ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श'];
const A = [
    'रात', 'रात', 'रात', 'रात',                                     // 0 - 3
    'सुबह', 'सुबह', 'सुबह', 'सुबह', 'सुबह', 'सुबह',                   // 4 - 9
    'दोपहर', 'दोपहर', 'दोपहर', 'दोपहर', 'दोपहर', 'दोपहर', 'दोपहर',     // 10 - 16
    'शाम', 'शाम', 'शाम',                                           // 17 - 19
    'रात', 'रात', 'रात', 'रात'                                      // 20 - 23
];

describe('format with "hi"', () => {
    before(() => date.locale(hi));

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

describe('parse with "hi"', () => {
    before(() => date.locale(hi));

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
