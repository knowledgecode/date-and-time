/**
 * @preserve date-and-time.js plugin
 * @preserve meridiem
 */

var plugin = function (date) {
    var name = 'meridiem';

    date.plugin(name, {
        res: {
            A: ['AM', 'PM', 'A.M.', 'P.M.', 'am', 'pm', 'a.m.', 'p.m.']
        },
        formatter: {
            AA: function (d) {
                // A.M. / P.M.
                return this.res.A[d.getHours() > 11 | 0 + 2];
            },
            a: function (d) {
                // am / pm
                return this.res.A[d.getHours() > 11 | 0 + 4];
            },
            aa: function (d) {
                // a.m. / p.m.
                return this.res.A[d.getHours() > 11 | 0 + 6];
            }
        },
        parser: {
            A: function (str) {
                var result = this.find(this.res.A, str);
                result.value %= 2;
                return result;
            }
        }
    });
    return name;
};

export default plugin;
