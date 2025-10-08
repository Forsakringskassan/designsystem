// packages/date/lib/esm/index.js
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var dayjs_min$1 = { exports: {} };
var dayjs_min = dayjs_min$1.exports;
var hasRequiredDayjs_min;
function requireDayjs_min() {
  if (hasRequiredDayjs_min) return dayjs_min$1.exports;
  hasRequiredDayjs_min = 1;
  (function(module, exports) {
    !(function(t, e) {
      module.exports = e();
    })(dayjs_min, (function() {
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = (function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = (function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          })(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c) return this.set(c, this.$M + r2);
          if ($2 === h) return this.set(h, this.$y + r2);
          if ($2 === a) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, (function(t3, r3) {
            return r3 || (function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            })(t3) || i2.replace(":", "");
          }));
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      })(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach((function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      })), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    }));
  })(dayjs_min$1);
  return dayjs_min$1.exports;
}
var dayjs_minExports = requireDayjs_min();
var dayjs = /* @__PURE__ */ getDefaultExportFromCjs(dayjs_minExports);
var sv$1 = { exports: {} };
var sv = sv$1.exports;
var hasRequiredSv;
function requireSv() {
  if (hasRequiredSv) return sv$1.exports;
  hasRequiredSv = 1;
  (function(module, exports) {
    !(function(e, t) {
      module.exports = t(requireDayjs_min());
    })(sv, (function(e) {
      function t(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      var a = t(e), d = { name: "sv", weekdays: "s\xF6ndag_m\xE5ndag_tisdag_onsdag_torsdag_fredag_l\xF6rdag".split("_"), weekdaysShort: "s\xF6n_m\xE5n_tis_ons_tor_fre_l\xF6r".split("_"), weekdaysMin: "s\xF6_m\xE5_ti_on_to_fr_l\xF6".split("_"), months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e2) {
        var t2 = e2 % 10;
        return "[" + e2 + (1 === t2 || 2 === t2 ? "a" : "e") + "]";
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, relativeTime: { future: "om %s", past: "f\xF6r %s sedan", s: "n\xE5gra sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en m\xE5nad", MM: "%d m\xE5nader", y: "ett \xE5r", yy: "%d \xE5r" } };
      return a.default.locale(d, null, true), d;
    }));
  })(sv$1);
  return sv$1.exports;
}
requireSv();
var weekOfYear$2 = { exports: {} };
var weekOfYear$1 = weekOfYear$2.exports;
var hasRequiredWeekOfYear;
function requireWeekOfYear() {
  if (hasRequiredWeekOfYear) return weekOfYear$2.exports;
  hasRequiredWeekOfYear = 1;
  (function(module, exports) {
    !(function(e, t) {
      module.exports = t();
    })(weekOfYear$1, (function() {
      var e = "week", t = "year";
      return function(i, n, r) {
        var f = n.prototype;
        f.week = function(i2) {
          if (void 0 === i2 && (i2 = null), null !== i2) return this.add(7 * (i2 - this.week()), "day");
          var n2 = this.$locale().yearStart || 1;
          if (11 === this.month() && this.date() > 25) {
            var f2 = r(this).startOf(t).add(1, t).date(n2), s = r(this).endOf(e);
            if (f2.isBefore(s)) return 1;
          }
          var a = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
          return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
        }, f.weeks = function(e2) {
          return void 0 === e2 && (e2 = null), this.week(e2);
        };
      };
    }));
  })(weekOfYear$2);
  return weekOfYear$2.exports;
}
var weekOfYearExports = requireWeekOfYear();
var weekOfYear = /* @__PURE__ */ getDefaultExportFromCjs(weekOfYearExports);
dayjs.extend(weekOfYear);
function clamp(value, min, max) {
  if (value.isBefore(min)) {
    return min;
  }
  if (value.isAfter(max)) {
    return max;
  }
  return value;
}
var DateFormat;
(function(DateFormat2) {
  DateFormat2["FULL"] = "full";
  DateFormat2["LONG"] = "long";
  DateFormat2["ISO8601"] = "iso-8601";
  DateFormat2["YYYYMMDD"] = "YYYYMMDD";
})(DateFormat || (DateFormat = {}));
var Locale;
(function(Locale2) {
  Locale2["SWEDISH"] = "sv";
  Locale2["ENGLISH"] = "en";
})(Locale || (Locale = {}));
function getDefaultLocale() {
  return Locale.SWEDISH;
}
var _locale = /* @__PURE__ */ getDefaultLocale();
function resetLocale() {
  _locale = getDefaultLocale();
}
function setLocale(locale) {
  _locale = locale;
}
function isLocale(value) {
  if (!value) {
    return false;
  }
  const localeValues = Object.values(Locale);
  return localeValues.includes(value);
}
function getLocale() {
  return _locale;
}
var Weekday;
(function(Weekday2) {
  Weekday2[Weekday2["MONDAY"] = 1] = "MONDAY";
  Weekday2[Weekday2["TUESDAY"] = 2] = "TUESDAY";
  Weekday2[Weekday2["WEDNESDAY"] = 3] = "WEDNESDAY";
  Weekday2[Weekday2["THURSDAY"] = 4] = "THURSDAY";
  Weekday2[Weekday2["FRIDAY"] = 5] = "FRIDAY";
  Weekday2[Weekday2["SATURDAY"] = 6] = "SATURDAY";
  Weekday2[Weekday2["SUNDAY"] = 7] = "SUNDAY";
})(Weekday || (Weekday = {}));
var namings = {
  [Locale.SWEDISH]: [
    {
      weekday: Weekday.MONDAY,
      name: "m\xE5ndag",
      shortName: "m\xE5n"
    },
    {
      weekday: Weekday.TUESDAY,
      name: "tisdag",
      shortName: "tis"
    },
    {
      weekday: Weekday.WEDNESDAY,
      name: "onsdag",
      shortName: "ons"
    },
    {
      weekday: Weekday.THURSDAY,
      name: "torsdag",
      shortName: "tor"
    },
    {
      weekday: Weekday.FRIDAY,
      name: "fredag",
      shortName: "fre"
    },
    {
      weekday: Weekday.SATURDAY,
      name: "l\xF6rdag",
      shortName: "l\xF6r"
    },
    {
      weekday: Weekday.SUNDAY,
      name: "s\xF6ndag",
      shortName: "s\xF6n"
    }
  ],
  [Locale.ENGLISH]: [
    {
      weekday: Weekday.MONDAY,
      name: "Monday",
      shortName: "Mon"
    },
    {
      weekday: Weekday.TUESDAY,
      name: "Tuesday",
      shortName: "Tue"
    },
    {
      weekday: Weekday.WEDNESDAY,
      name: "Wednesday",
      shortName: "Wed"
    },
    {
      weekday: Weekday.THURSDAY,
      name: "Thursday",
      shortName: "Thu"
    },
    {
      weekday: Weekday.FRIDAY,
      name: "Friday",
      shortName: "Fri"
    },
    {
      weekday: Weekday.SATURDAY,
      name: "Saturday",
      shortName: "Sat"
    },
    {
      weekday: Weekday.SUNDAY,
      name: "Sunday",
      shortName: "Sun"
    }
  ]
};
function getWeekdayNamings(locale) {
  const resolvedLocale = locale ?? getLocale();
  return namings[resolvedLocale];
}
var ISO8601_YYYY_MM_DD = "YYYY-MM-DD";
var formatter = {
  [Locale.SWEDISH]: {
    [DateFormat.FULL]: "dddd D MMMM YYYY",
    [DateFormat.LONG]: "D MMMM YYYY",
    [DateFormat.ISO8601]: ISO8601_YYYY_MM_DD,
    [DateFormat.YYYYMMDD]: "YYYYMMDD"
  },
  [Locale.ENGLISH]: {
    [DateFormat.FULL]: "dddd, D MMMM YYYY",
    [DateFormat.LONG]: "D MMMM YYYY",
    [DateFormat.ISO8601]: ISO8601_YYYY_MM_DD,
    [DateFormat.YYYYMMDD]: "YYYYMMDD"
  }
};
var FDate = class _FDate {
  value;
  constructor(value) {
    this.value = dayjs(value, ISO8601_YYYY_MM_DD, true).startOf("day");
  }
  /**
   * Create {@link FDate} with an invalid state.
   *
   * @internal
   */
  static invalid() {
    return new _FDate("<invalid>");
  }
  /**
   * Create {@link FDate} from current date.
   *
   * ```
   * FDate.now()
   * ```
   *
   * @public
   */
  static now() {
    return new _FDate();
  }
  /**
   * Create {@link FDate} from ISO8601 string.
   *
   * ```
   * FDate.fromIso("2022-04-20")
   * ```
   *
   * @public
   */
  static fromIso(value) {
    const match = value.match(/^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/);
    if (match?.groups) {
      const date = new _FDate(value);
      const { month } = match.groups;
      if (date.isValid() && date.month === parseInt(month, 10)) {
        return date;
      }
    }
    return _FDate.invalid();
  }
  /**
   * Create {@link FDate} from `Date`.
   *
   * ```
   * FDate.fromDate(new Date())
   * ```
   *
   * @public
   */
  static fromDate(value) {
    return new _FDate(value);
  }
  /**
   * Create {@link FDate} from year, month, day.
   *
   * ```
   * FDate.fromYearMonthDay(2023, 1, 1) // => 2023-01-01
   * FDate.fromYearMonthDay("2023", "01", "01") // => 2023-01-01
   * ```
   *
   * @public
   */
  static fromYearMonthDay(year, month, day) {
    const paddedMonth = month.toString().padStart(2, "0");
    const paddedDay = day.toString().padStart(2, "0");
    const iso = `${String(year)}-${paddedMonth}-${paddedDay}`;
    return _FDate.fromIso(iso);
  }
  /**
   * Get the year.
   *
   * ```
   * FDate.now().year()// => 2022
   * ```
   *
   * @public
   */
  get year() {
    return this.value.year();
  }
  /**
   * Get the month.
   *
   * Months are one-indexed, so January is month 1.
   *
   * ```
   * FDate.now().month()// => 1-12
   * ```
   *
   * @public
   */
  get month() {
    return this.value.month() + 1;
  }
  /**
   * Get the week according to the Swedish locale.
   *
   * @public
   */
  get week() {
    return this.value.locale(Locale.SWEDISH).week();
  }
  /**
   * Get the day of the month.
   *
   * ```
   * FDate.now().day// => 1-31
   * ```
   *
   * @public
   */
  get day() {
    return this.value.date();
  }
  /**
   * Get the name of the month.
   *
   * ```
   * FDate.now().monthName// => January
   * ```
   *
   * @public
   */
  get monthName() {
    if (this.isValid()) {
      return this.value.locale(getLocale()).format("MMMM");
    } else {
      return "";
    }
  }
  /**
   * Get the short name of the month.
   *
   * ```
   * FDate.now().monthNameShort// => Jan
   * ```
   *
   * @public
   */
  get monthNameShort() {
    if (this.isValid()) {
      return this.value.locale(getLocale()).format("MMM");
    } else {
      return "";
    }
  }
  /**
   * Get the name of the day.
   *
   * ```
   * FDate.now().dayName// => Monday
   * ```
   *
   * @public
   */
  get dayName() {
    if (this.isValid()) {
      return this.value.locale(getLocale()).format("dddd");
    } else {
      return "";
    }
  }
  /**
   * Get the short name of the day.
   *
   * ```
   * FDate.now().dayNameShort// => Mon
   * ```
   *
   * @public
   */
  get dayNameShort() {
    if (this.isValid()) {
      return this.value.locale(getLocale()).format("ddd");
    } else {
      return "";
    }
  }
  /**
   * Get number of the day in a week.
   * Returns `Weekday` enum.
   * If date is invalid, `0` is returned.
   *
   * ```
   * FDate.now().weekDay// => Weekday.MONDAY / 1
   * ```
   *
   * @public
   */
  get weekDay() {
    if (!this.isValid()) {
      return 0;
    }
    const result = parseInt(this.value.format("d"), 10);
    if (!result) {
      return Weekday.SUNDAY;
    }
    return result;
  }
  /**
   * This returns a `boolean` indicating whether the FDate object contains a valid date or not.
   *
   * ```
   * FDate().isValid()// => boolean
   * ```
   *
   * @public
   */
  isValid() {
    return this.value.isValid();
  }
  /**
   * Returns a cloned {@link FDate} object and set it to the start of month.
   *
   * @public
   */
  startOfMonth() {
    return new _FDate(this.value.startOf("month"));
  }
  /**
   * Returns a cloned {@link FDate} object and set it to the end of month.
   *
   * @public
   */
  endOfMonth() {
    return new _FDate(this.value.endOf("month"));
  }
  /**
   * Returns a new {@link FDate} object with a specified amount of days added.
   * Specify a negative amount in order to subtract days.
   *
   * ```
   * FDate().addDays(7)// => FDate
   * ```
   *
   * @public
   */
  addDays(value) {
    return new _FDate(this.value.add(value, "day"));
  }
  /**
   * Returns a cloned {@link FDate} object with a specified amount of months added.
   * Specify a negative amount in order to subtract months.
   *
   * ```
   * FDate().addMonths(7)// => FDate
   * ```
   *
   * @public
   */
  addMonths(value) {
    return new _FDate(this.value.add(value, "month"));
  }
  /**
   * Returns a new {@link FDate} object with a specified amount of years added.
   * Specify a negative amount in order to subtract years.
   *
   * ```
   * FDate().addYears(7)// => FDate
   * ```
   *
   * @public
   */
  addYears(value) {
    return new _FDate(this.value.add(value, "year"));
  }
  /**
   * Returns a new {@link FDate} object with the date before This one.
   *
   * @public
   * @since v6.12.0
   */
  previous() {
    return this.addDays(-1);
  }
  next() {
    return this.addDays(1);
  }
  /**
   * Compares two {@link FDate} objects and returns `true` if they represent the
   * same date.
   *
   * Invalid dates always returns `false`.
   *
   * @public
   * @param rhs - The date to compare with.
   * @returns `true` if the dates represent the same date.
   */
  equals(rhs) {
    if (typeof rhs === "string") {
      rhs = _FDate.fromIso(rhs);
    }
    return this.value.isSame(rhs.value, "day");
  }
  /**
   * Returns true if this date is before given date.
   *
   * If the dates are the same this function returns false.
   */
  isBefore(rhs) {
    if (typeof rhs === "string") {
      rhs = _FDate.fromIso(rhs);
    }
    return this.value.isBefore(rhs.value, "day");
  }
  /**
   * Returns true if this date is after given date.
   *
   * If the dates are the same this function returns false.
   */
  isAfter(rhs) {
    if (typeof rhs === "string") {
      rhs = _FDate.fromIso(rhs);
    }
    return this.value.isAfter(rhs.value, "day");
  }
  /**
   * Compares two {@link FDate} objects. Returns and integer indicating whenever
   * `a` comes before or after or is equal to `b`.
   *
   * - `-1` if `a` beomes before `b`.
   * - `0` if `a` and `b` are the same date.
   * - `1` if `a` beomes after `b`.
   *
   * If either or both date is invalid the result is undefined behaviour and
   * should not be relied on. Use {@link FDate.isValid} to ensure validity
   * first, e.g. `myArray.filter(it => it.isValid())` before sorting.
   *
   * @public
   * @param a - First date object to compare.
   * @param b - Second date object to compare.
   * @returns `-1`, `0` or `1`
   */
  static compare(a, b) {
    if (typeof a === "string") {
      a = _FDate.fromIso(a);
    }
    if (typeof b === "string") {
      b = _FDate.fromIso(b);
    }
    const aInvalid = !a.isValid();
    const bInvalid = !b.isValid();
    if (aInvalid || bInvalid) {
      if (aInvalid && bInvalid) {
        return 0;
      } else if (aInvalid) {
        return 1;
      } else {
        return -1;
      }
    }
    if (a.equals(b)) {
      return 0;
    } else if (a.isBefore(b)) {
      return -1;
    } else {
      return 1;
    }
  }
  /**
   * Returns a string representation of the date.
   *
   * ```
   * FDate().toString() // "2022-05-04"
   * FDate().toString(DateFormat.FULL) // "onsdag 4 maj 2022"
   * FDate().toString(DateFormat.LONG) // "4 maj 2022"
   * FDate().toString(DateFormat.ISO8601) // "2022-04-20"
   * ```
   *
   * @public
   * @param format - Format to use.
   */
  toString(format = DateFormat.ISO8601) {
    if (this.isValid()) {
      const template = formatter[getLocale()][format];
      return this.value.locale(getLocale()).format(template);
    } else {
      return "";
    }
  }
  /**
   * To serialize as an ISO8601 string.
   *
   * ```
   * FDate().toJSON() // "2019-01-25"
   * ```
   *
   * @public
   */
  toJSON() {
    return this.toString(DateFormat.ISO8601);
  }
};
var FYear = class _FYear {
  _value;
  constructor(value) {
    if (Math.round(value) === value) {
      this._value = value;
    } else {
      this._value = NaN;
    }
  }
  /**
   * Create {@link FYear} from current date.
   *
   * @example
   *
   * ```ts
   * FYear.now();
   * ```
   *
   * @public
   */
  static now() {
    const value = (/* @__PURE__ */ new Date()).getFullYear();
    return new _FYear(value);
  }
  /**
   * Create {@link FYear} from a year (stored as number or string with four
   * digits).
   *
   * @example
   *
   * ```ts
   * FYear.fromYear(1999);
   * FYear.fromYear("1999");
   * ```
   *
   * @public
   * @param value - The year to set the `FYear` object to.
   */
  static fromYear(value) {
    const parsed = typeof value === "string" ? parseInt(value, 10) : value;
    return new _FYear(parsed);
  }
  /**
   * Create {@link FYear} from an `FDate` or `Date` object.
   *
   * @example
   *
   * ```ts
   * FYear.fromDate(FDate.now());
   * FYear.fromDate(new Date());
   * ```
   *
   * @public
   * @param value - The date to get year from.
   */
  static fromDate(value) {
    if (value instanceof Date) {
      return new _FYear(value.getFullYear());
    } else {
      return new _FYear(value.year);
    }
  }
  /**
   * Get the year as number (four digits)
   *
   * ```
   * FYear.now().value; // => 1999
   * ```
   *
   * @public
   */
  get value() {
    return this._value;
  }
  /**
   * This returns a `boolean` indicating whether the FYear object contains a
   * valid year or not.
   *
   * ```
   * FYear().isValid(); // => boolean
   * ```
   *
   * @public
   */
  isValid() {
    return !isNaN(this._value);
  }
  /**
   * Returns a new {@link FYear} object with a specified amount of years
   * added. Specify a negative amount in order to subtract years.
   *
   * ```
   * FYear().addYears(7); // => FYear
   * ```
   *
   * @public
   * @param amount - The amount of years to add to this one.
   */
  addYears(amount) {
    return new _FYear(this._value + amount);
  }
  /**
   * Returns a new {@link FYear} object with the year before this one.
   *
   * ```
   * FYear(2025).previous(); // => FYear { 2024 }
   * ```
   *
   * @public
   */
  previous() {
    return this.addYears(-1);
  }
  /**
   * Returns a new {@link FYear} object with the year after this one.
   *
   * ```
   * FYear(2025).next(); // => FYear { 2026 }
   * ```
   *
   * @public
   */
  next() {
    return this.addYears(1);
  }
  /**
   * Compares two {@link FYear} objects and returns `true` if they represent
   * the same year.
   *
   * Invalid dates always returns `false`.
   *
   * @public
   * @param rhs - The year to compare with.
   * @returns `true` if the years are the same.
   */
  equals(rhs) {
    return this._value === _FYear.toValue(rhs);
  }
  /**
   * Returns true if this year is before given year.
   *
   * If the years are the same this function returns false.
   *
   * @public
   * @param rhs - The year to compare with.
   * @returns `true` if this year is before given year.
   */
  isBefore(rhs) {
    return this._value < _FYear.toValue(rhs);
  }
  /**
   * Returns true if this year is after given year.
   *
   * If the years are the same this function returns false.
   *
   * @public
   * @param rhs - The year to compare with.
   * @returns `true` if this year is after given year.
   */
  isAfter(rhs) {
    return this._value > _FYear.toValue(rhs);
  }
  /**
   * Compares two {@link FYear} objects. Returns and integer indicating
   * whenever `a` comes before or after or is equal to `b`.
   *
   * - `-1` if `a` beomes before `b`.
   * - `0` if `a` and `b` are the same year.
   * - `1` if `a` beomes after `b`.
   *
   * If either or both years is invalid the result is undefined behaviour and
   * should not be relied on. Use {@link FYear.isValid} to ensure validity
   * first, e.g. `myArray.filter(it => it.isValid())` before sorting.
   *
   * @example
   *
   * ```ts
   * yearArray.sort(FYear.compare);
   * ```
   *
   * @public
   * @param a - First year object to compare.
   * @param b - Second year object to compare.
   * @returns `-1`, `0` or `1`
   */
  static compare(a, b) {
    const ax = _FYear.toFYear(a);
    const bx = _FYear.toFYear(b);
    const aInvalid = !ax.isValid();
    const bInvalid = !bx.isValid();
    if (aInvalid || bInvalid) {
      if (aInvalid && bInvalid) {
        return 0;
      } else if (aInvalid) {
        return 1;
      } else {
        return -1;
      }
    }
    return Math.max(Math.min(ax._value - bx._value, 1), -1);
  }
  /**
   * Returns a string representation of the year.
   *
   * @public
   */
  toString() {
    if (this.isValid()) {
      return this._value.toString();
    } else {
      return "";
    }
  }
  /**
   * Serializes to a JSON value.
   *
   * @public
   */
  toJSON() {
    if (this.isValid()) {
      return this._value;
    } else {
      return null;
    }
  }
  /**
   * @internal
   */
  static toFYear(value) {
    if (value instanceof _FYear) {
      return value;
    } else {
      return _FYear.fromYear(value);
    }
  }
  /**
   * @internal
   */
  static toValue(value) {
    return this.toFYear(value)._value;
  }
};
function* range(begin, end) {
  if (end.isBefore(begin)) {
    const message = `Begin (${begin.toString()}) must be earlier or equal to end (${end.toString()})`;
    throw new Error(message);
  }
  const last = end.next();
  for (let it = begin; !it.equals(last); it = it.next()) {
    yield it;
  }
}
function groupByWeek(begin, end) {
  const result = [];
  let days;
  for (const dayIterator of Array.from(range(begin, end))) {
    if (!days || dayIterator.weekDay === Weekday.MONDAY) {
      days = [];
      result.push({ week: dayIterator.week, days });
    }
    days.push(dayIterator);
  }
  return result;
}
export {
  DateFormat,
  FDate,
  FYear,
  Locale,
  Weekday,
  clamp,
  getLocale,
  getWeekdayNamings,
  groupByWeek,
  isLocale,
  range,
  resetLocale,
  setLocale
};
