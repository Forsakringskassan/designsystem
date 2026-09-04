// node_modules/@forsakringskassan/docs-generator/dist/processors/search.mjs
var cmp = (a, b) => a > b ? 1 : a < b ? -1 : 0;
var inf = Infinity;
var escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var EXACT_HERE = "eexxaacctt";
var PUNCT_RE = /\p{P}/gu;
var LATIN_UPPER = "A-Z";
var LATIN_LOWER = "a-z";
var COLLATE_ARGS = ["en", { numeric: true, sensitivity: "base" }];
var swapAlpha = (str, upper, lower) => str.replace(LATIN_UPPER, upper).replace(LATIN_LOWER, lower);
var OPTS = {
  // whether regexps use a /u unicode flag
  unicode: false,
  alpha: null,
  // term segmentation & punct/whitespace merging
  interSplit: "[^A-Za-z\\d']+",
  intraSplit: "[a-z][A-Z]",
  // inter bounds that will be used to increase lft2/rgt2 info counters
  interBound: "[^A-Za-z\\d]",
  // intra bounds that will be used to increase lft1/rgt1 info counters
  intraBound: "[A-Za-z]\\d|\\d[A-Za-z]|[a-z][A-Z]",
  // inter-bounds mode
  // 2 = strict (will only match 'man' on whitepace and punct boundaries: Mega Man, Mega_Man, mega.man)
  // 1 = loose  (plus allowance for alpha-num and case-change boundaries: MegaMan, 0007man)
  // 0 = any    (will match 'man' as any substring: megamaniac)
  interLft: 0,
  interRgt: 0,
  // allowance between terms
  interChars: ".",
  interIns: inf,
  // allowance between chars in terms
  intraChars: "[a-z\\d']",
  // internally case-insensitive
  intraIns: null,
  intraContr: "'[a-z]{1,2}\\b",
  // multi-insert or single-error mode
  intraMode: 0,
  // single-error bounds for errors within terms, default requires exact first char
  intraSlice: [1, inf],
  // single-error tolerance toggles
  intraSub: null,
  intraTrn: null,
  intraDel: null,
  // can post-filter matches that are too far apart in distance or length
  // (since intraIns is between each char, it can accum to nonsense matches)
  intraFilt: (term, match, index) => true,
  // should this also accept WIP info?
  toUpper: (str) => str.toLocaleUpperCase(),
  toLower: (str) => str.toLocaleLowerCase(),
  compare: null,
  // final sorting fn
  sort: (info, haystack, needle, compare = cmp) => {
    let {
      idx,
      chars,
      terms,
      interLft2,
      interLft1,
      //	interRgt2,
      //	interRgt1,
      start,
      intraIns,
      interIns,
      cases
    } = info;
    return idx.map((v, i) => i).sort((ia, ib) => (
      // most contig chars matched
      chars[ib] - chars[ia] || // least char intra-fuzz (most contiguous)
      intraIns[ia] - intraIns[ib] || // most prefix bounds, boosted by full term matches
      terms[ib] + interLft2[ib] + 0.5 * interLft1[ib] - (terms[ia] + interLft2[ia] + 0.5 * interLft1[ia]) || // highest density of match (least span)
      //	span[ia] - span[ib] ||
      // highest density of match (least term inter-fuzz)
      interIns[ia] - interIns[ib] || // earliest start of match
      start[ia] - start[ib] || // case match
      cases[ib] - cases[ia] || // alphabetic
      compare(haystack[idx[ia]], haystack[idx[ib]])
    ));
  }
};
var lazyRepeat = (chars, limit) => limit == 0 ? "" : limit == 1 ? chars + "??" : limit == inf ? chars + "*?" : chars + `{0,${limit}}?`;
var mode2Tpl = "(?:\\b|_)";
function uFuzzy(opts) {
  opts = Object.assign({}, OPTS, opts);
  let {
    unicode,
    interLft,
    interRgt,
    intraMode,
    intraSlice,
    intraIns,
    intraSub,
    intraTrn,
    intraDel,
    intraContr,
    intraSplit: _intraSplit,
    interSplit: _interSplit,
    intraBound: _intraBound,
    interBound: _interBound,
    intraChars,
    toUpper,
    toLower,
    compare
  } = opts;
  intraIns ??= intraMode;
  intraSub ??= intraMode;
  intraTrn ??= intraMode;
  intraDel ??= intraMode;
  compare ??= typeof Intl == "undefined" ? cmp : new Intl.Collator(...COLLATE_ARGS).compare;
  let alpha = opts.letters ?? opts.alpha;
  if (alpha != null) {
    let upper = toUpper(alpha);
    let lower = toLower(alpha);
    _interSplit = swapAlpha(_interSplit, upper, lower);
    _intraSplit = swapAlpha(_intraSplit, upper, lower);
    _interBound = swapAlpha(_interBound, upper, lower);
    _intraBound = swapAlpha(_intraBound, upper, lower);
    intraChars = swapAlpha(intraChars, upper, lower);
    intraContr = swapAlpha(intraContr, upper, lower);
  }
  let uFlag = unicode ? "u" : "";
  const quotedAny = '".+?"';
  const EXACTS_RE = new RegExp(quotedAny, "gi" + uFlag);
  const NEGS_RE = new RegExp(`(?:\\s+|^)-(?:${intraChars}+|${quotedAny})`, "gi" + uFlag);
  let { intraRules } = opts;
  if (intraRules == null) {
    intraRules = (p) => {
      let _intraSlice = OPTS.intraSlice, _intraIns = 0, _intraSub = 0, _intraTrn = 0, _intraDel = 0;
      if (/[^\d]/.test(p)) {
        let plen = p.length;
        if (plen <= 4) {
          if (plen >= 3) {
            _intraTrn = Math.min(intraTrn, 1);
            if (plen == 4)
              _intraIns = Math.min(intraIns, 1);
          }
        } else {
          _intraSlice = intraSlice;
          _intraIns = intraIns, _intraSub = intraSub, _intraTrn = intraTrn, _intraDel = intraDel;
        }
      }
      return {
        intraSlice: _intraSlice,
        intraIns: _intraIns,
        intraSub: _intraSub,
        intraTrn: _intraTrn,
        intraDel: _intraDel
      };
    };
  }
  let withIntraSplit = !!_intraSplit;
  let intraSplit = new RegExp(_intraSplit, "g" + uFlag);
  let interSplit = new RegExp(_interSplit, "g" + uFlag);
  let trimRe = new RegExp("^" + _interSplit + "|" + _interSplit + "$", "g" + uFlag);
  let contrsRe = new RegExp(intraContr, "gi" + uFlag);
  const split = (needle, keepCase = false) => {
    let exacts = [];
    needle = needle.replace(EXACTS_RE, (m) => {
      exacts.push(m);
      return EXACT_HERE;
    });
    needle = needle.replace(trimRe, "");
    if (!keepCase)
      needle = toLower(needle);
    if (withIntraSplit)
      needle = needle.replace(intraSplit, (m) => m[0] + " " + m[1]);
    let j = 0;
    return needle.split(interSplit).filter((t2) => t2 != "").map((v) => v === EXACT_HERE ? exacts[j++] : v);
  };
  const NUM_OR_ALPHA_RE = /[^\d]+|\d+/g;
  const prepQuery = (needle, capt = 0, interOR = false) => {
    let parts = split(needle);
    if (parts.length == 0)
      return [];
    let contrs = Array(parts.length).fill("");
    parts = parts.map((p, pi) => p.replace(contrsRe, (m) => {
      contrs[pi] = m;
      return "";
    }));
    let reTpl;
    if (intraMode == 1) {
      reTpl = parts.map((p, pi) => {
        if (p[0] === '"')
          return escapeRegExp(p.slice(1, -1));
        let reTpl2 = "";
        for (let m of p.matchAll(NUM_OR_ALPHA_RE)) {
          let p2 = m[0];
          let {
            intraSlice: intraSlice2,
            intraIns: intraIns2,
            intraSub: intraSub2,
            intraTrn: intraTrn2,
            intraDel: intraDel2
          } = intraRules(p2);
          if (intraIns2 + intraSub2 + intraTrn2 + intraDel2 == 0)
            reTpl2 += p2 + contrs[pi];
          else {
            let [lftIdx, rgtIdx] = intraSlice2;
            let lftChar = p2.slice(0, lftIdx);
            let rgtChar = p2.slice(rgtIdx);
            let chars = p2.slice(lftIdx, rgtIdx);
            if (intraIns2 == 1 && lftChar.length == 1 && lftChar != chars[0])
              lftChar += "(?!" + lftChar + ")";
            let numChars = chars.length;
            let variants = [p2];
            if (intraSub2) {
              for (let i = 0; i < numChars; i++)
                variants.push(lftChar + chars.slice(0, i) + intraChars + chars.slice(i + 1) + rgtChar);
            }
            if (intraTrn2) {
              for (let i = 0; i < numChars - 1; i++) {
                if (chars[i] != chars[i + 1])
                  variants.push(lftChar + chars.slice(0, i) + chars[i + 1] + chars[i] + chars.slice(i + 2) + rgtChar);
              }
            }
            if (intraDel2) {
              for (let i = 0; i < numChars; i++)
                variants.push(lftChar + chars.slice(0, i + 1) + "?" + chars.slice(i + 1) + rgtChar);
            }
            if (intraIns2) {
              let intraInsTpl = lazyRepeat(intraChars, 1);
              for (let i = 0; i < numChars; i++)
                variants.push(lftChar + chars.slice(0, i) + intraInsTpl + chars.slice(i) + rgtChar);
            }
            reTpl2 += "(?:" + variants.join("|") + ")" + contrs[pi];
          }
        }
        return reTpl2;
      });
    } else {
      let intraInsTpl = lazyRepeat(intraChars, intraIns);
      if (capt == 2 && intraIns > 0) {
        intraInsTpl = ")(" + intraInsTpl + ")(";
      }
      reTpl = parts.map((p, pi) => p[0] === '"' ? escapeRegExp(p.slice(1, -1)) : p.split("").map((c, i, chars) => {
        if (intraIns == 1 && i == 0 && chars.length > 1 && c != chars[i + 1])
          c += "(?!" + c + ")";
        return c;
      }).join(intraInsTpl) + contrs[pi]);
    }
    let preTpl = interLft == 2 ? mode2Tpl : "";
    let sufTpl = interRgt == 2 ? mode2Tpl : "";
    let interCharsTpl = sufTpl + lazyRepeat(opts.interChars, opts.interIns) + preTpl;
    if (capt > 0) {
      if (interOR) {
        reTpl = preTpl + "(" + reTpl.join(")" + sufTpl + "|" + preTpl + "(") + ")" + sufTpl;
      } else {
        reTpl = "(" + reTpl.join(")(" + interCharsTpl + ")(") + ")";
        reTpl = "(.??" + preTpl + ")" + reTpl + "(" + sufTpl + ".*)";
      }
    } else {
      reTpl = reTpl.join(interCharsTpl);
      reTpl = preTpl + reTpl + sufTpl;
    }
    return [new RegExp(reTpl, "i" + uFlag), parts, contrs];
  };
  const filter = (haystack, needle, idxs) => {
    let [query] = prepQuery(needle);
    if (query == null)
      return null;
    let out = [];
    if (idxs != null) {
      for (let i = 0; i < idxs.length; i++) {
        let idx = idxs[i];
        query.test(haystack[idx]) && out.push(idx);
      }
    } else {
      for (let i = 0; i < haystack.length; i++)
        query.test(haystack[i]) && out.push(i);
    }
    return out;
  };
  let withIntraBound = !!_intraBound;
  let interBound = new RegExp(_interBound, uFlag);
  let intraBound = new RegExp(_intraBound, uFlag);
  const info = (idxs, haystack, needle) => {
    let [query, parts, contrs] = prepQuery(needle, 1);
    let partsCased = split(needle, true);
    let [queryR] = prepQuery(needle, 2);
    let partsLen = parts.length;
    let _terms = Array(partsLen);
    let _termsCased = Array(partsLen);
    for (let j = 0; j < partsLen; j++) {
      let part = parts[j];
      let partCased = partsCased[j];
      let term = part[0] == '"' ? part.slice(1, -1) : part + contrs[j];
      let termCased = partCased[0] == '"' ? partCased.slice(1, -1) : partCased + contrs[j];
      _terms[j] = term;
      _termsCased[j] = termCased;
    }
    let len = idxs.length;
    let field = Array(len).fill(0);
    let info2 = {
      // idx in haystack
      idx: Array(len),
      // start of match
      start: field.slice(),
      // length of match
      //	span: field.slice(),
      // contiguous chars matched
      chars: field.slice(),
      // case matched in term (via term.includes(match))
      cases: field.slice(),
      // contiguous (no fuzz) and bounded terms (intra=0, lft2/1, rgt2/1)
      // excludes terms that are contiguous but have < 2 bounds (substrings)
      terms: field.slice(),
      // cumulative length of unmatched chars (fuzz) within span
      interIns: field.slice(),
      // between terms
      intraIns: field.slice(),
      // within terms
      // interLft/interRgt counters
      interLft2: field.slice(),
      interRgt2: field.slice(),
      interLft1: field.slice(),
      interRgt1: field.slice(),
      ranges: Array(len)
    };
    let mayDiscard = interLft == 1 || interRgt == 1;
    let ii = 0;
    for (let i = 0; i < idxs.length; i++) {
      let mhstr = haystack[idxs[i]];
      let m = mhstr.match(query);
      let start = m.index + m[1].length;
      let idxAcc = start;
      let disc = false;
      let lft2 = 0;
      let lft1 = 0;
      let rgt2 = 0;
      let rgt1 = 0;
      let chars = 0;
      let terms = 0;
      let cases = 0;
      let inter = 0;
      let intra = 0;
      let refine = [];
      for (let j = 0, k = 2; j < partsLen; j++, k += 2) {
        let group = toLower(m[k]);
        let term = _terms[j];
        let termCased = _termsCased[j];
        let termLen = term.length;
        let groupLen = group.length;
        let fullMatch = group == term;
        if (m[k] == termCased)
          cases++;
        if (!fullMatch && m[k + 1].length >= termLen) {
          let idxOf = toLower(m[k + 1]).indexOf(term);
          if (idxOf > -1) {
            refine.push(idxAcc, groupLen, idxOf, termLen);
            idxAcc += refineMatch(m, k, idxOf, termLen);
            group = term;
            groupLen = termLen;
            fullMatch = true;
            if (j == 0)
              start = idxAcc;
          }
        }
        if (mayDiscard || fullMatch) {
          let lftCharIdx = idxAcc - 1;
          let rgtCharIdx = idxAcc + groupLen;
          let isPre = false;
          let isSuf = false;
          if (lftCharIdx == -1 || interBound.test(mhstr[lftCharIdx])) {
            fullMatch && lft2++;
            isPre = true;
          } else {
            if (interLft == 2) {
              disc = true;
              break;
            }
            if (withIntraBound && intraBound.test(mhstr[lftCharIdx] + mhstr[lftCharIdx + 1])) {
              fullMatch && lft1++;
              isPre = true;
            } else {
              if (interLft == 1) {
                let junk = m[k + 1];
                let junkIdx = idxAcc + groupLen;
                if (junk.length >= termLen) {
                  let idxOf = 0;
                  let found = false;
                  let re = new RegExp(term, "ig" + uFlag);
                  let m2;
                  while (m2 = re.exec(junk)) {
                    idxOf = m2.index;
                    let charIdx = junkIdx + idxOf;
                    let lftCharIdx2 = charIdx - 1;
                    if (lftCharIdx2 == -1 || interBound.test(mhstr[lftCharIdx2])) {
                      lft2++;
                      found = true;
                      break;
                    } else if (intraBound.test(mhstr[lftCharIdx2] + mhstr[charIdx])) {
                      lft1++;
                      found = true;
                      break;
                    }
                  }
                  if (found) {
                    isPre = true;
                    refine.push(idxAcc, groupLen, idxOf, termLen);
                    idxAcc += refineMatch(m, k, idxOf, termLen);
                    group = term;
                    groupLen = termLen;
                    fullMatch = true;
                    if (j == 0)
                      start = idxAcc;
                  }
                }
                if (!isPre) {
                  disc = true;
                  break;
                }
              }
            }
          }
          if (rgtCharIdx == mhstr.length || interBound.test(mhstr[rgtCharIdx])) {
            fullMatch && rgt2++;
            isSuf = true;
          } else {
            if (interRgt == 2) {
              disc = true;
              break;
            }
            if (withIntraBound && intraBound.test(mhstr[rgtCharIdx - 1] + mhstr[rgtCharIdx])) {
              fullMatch && rgt1++;
              isSuf = true;
            } else {
              if (interRgt == 1) {
                disc = true;
                break;
              }
            }
          }
          if (fullMatch) {
            chars += termLen;
            if (isPre && isSuf)
              terms++;
          }
        }
        if (groupLen > termLen)
          intra += groupLen - termLen;
        if (j > 0)
          inter += m[k - 1].length;
        if (!opts.intraFilt(term, group, idxAcc)) {
          disc = true;
          break;
        }
        if (j < partsLen - 1)
          idxAcc += groupLen + m[k + 1].length;
      }
      if (!disc) {
        info2.idx[ii] = idxs[i];
        info2.interLft2[ii] = lft2;
        info2.interLft1[ii] = lft1;
        info2.interRgt2[ii] = rgt2;
        info2.interRgt1[ii] = rgt1;
        info2.chars[ii] = chars;
        info2.terms[ii] = terms;
        info2.cases[ii] = cases;
        info2.interIns[ii] = inter;
        info2.intraIns[ii] = intra;
        info2.start[ii] = start;
        let m2 = mhstr.match(queryR);
        let idxAcc2 = m2.index + m2[1].length;
        let refLen = refine.length;
        let ri = refLen > 0 ? 0 : Infinity;
        let lastRi = refLen - 4;
        for (let i2 = 2; i2 < m2.length; ) {
          let len2 = m2[i2].length;
          if (ri <= lastRi && refine[ri] == idxAcc2) {
            let groupLen = refine[ri + 1];
            let idxOf = refine[ri + 2];
            let termLen = refine[ri + 3];
            let j = i2;
            let v = "";
            for (let _len = 0; _len < groupLen; j++) {
              v += m2[j];
              _len += m2[j].length;
            }
            m2.splice(i2, j - i2, v);
            idxAcc2 += refineMatch(m2, i2, idxOf, termLen);
            ri += 4;
          } else {
            idxAcc2 += len2;
            i2++;
          }
        }
        idxAcc2 = m2.index + m2[1].length;
        let ranges = info2.ranges[ii] = [];
        let from = idxAcc2;
        let to = idxAcc2;
        for (let i2 = 2; i2 < m2.length; i2++) {
          let len2 = m2[i2].length;
          idxAcc2 += len2;
          if (i2 % 2 == 0)
            to = idxAcc2;
          else if (len2 > 0) {
            ranges.push(from, to);
            from = to = idxAcc2;
          }
        }
        if (to > from)
          ranges.push(from, to);
        ii++;
      }
    }
    if (ii < idxs.length) {
      for (let k in info2)
        info2[k] = info2[k].slice(0, ii);
    }
    return info2;
  };
  const refineMatch = (m, k, idxInNext, termLen) => {
    let prepend = m[k] + m[k + 1].slice(0, idxInNext);
    m[k - 1] += prepend;
    m[k] = m[k + 1].slice(idxInNext, idxInNext + termLen);
    m[k + 1] = m[k + 1].slice(idxInNext + termLen);
    return prepend.length;
  };
  const OOO_TERMS_LIMIT = 5;
  const _search = (haystack, needle, outOfOrder, infoThresh = 1e3, preFiltered) => {
    outOfOrder = !outOfOrder ? 0 : outOfOrder === true ? OOO_TERMS_LIMIT : outOfOrder;
    let needles = null;
    let matches = null;
    let negs = [];
    needle = needle.replace(NEGS_RE, (m) => {
      let neg = m.trim().slice(1);
      neg = neg[0] === '"' ? escapeRegExp(neg.slice(1, -1)) : neg.replace(PUNCT_RE, "");
      if (neg != "")
        negs.push(neg);
      return "";
    });
    let terms = split(needle);
    let negsRe;
    if (negs.length > 0) {
      negsRe = new RegExp(negs.join("|"), "i" + uFlag);
      if (terms.length == 0) {
        let idxs = [];
        for (let i = 0; i < haystack.length; i++) {
          if (!negsRe.test(haystack[i]))
            idxs.push(i);
        }
        return [idxs, null, null];
      }
    } else {
      if (terms.length == 0)
        return [null, null, null];
    }
    if (outOfOrder > 0) {
      let terms2 = split(needle);
      if (terms2.length > 1) {
        let terms22 = terms2.slice().sort((a, b) => b.length - a.length);
        for (let ti = 0; ti < terms22.length; ti++) {
          if (preFiltered?.length == 0)
            return [[], null, null];
          preFiltered = filter(haystack, terms22[ti], preFiltered);
        }
        if (terms2.length > outOfOrder)
          return [preFiltered, null, null];
        needles = permute(terms2).map((perm) => perm.join(" "));
        matches = [];
        let matchedIdxs = /* @__PURE__ */ new Set();
        for (let ni = 0; ni < needles.length; ni++) {
          if (matchedIdxs.size < preFiltered.length) {
            let preFiltered2 = preFiltered.filter((idx) => !matchedIdxs.has(idx));
            let matched = filter(haystack, needles[ni], preFiltered2);
            for (let j = 0; j < matched.length; j++)
              matchedIdxs.add(matched[j]);
            matches.push(matched);
          } else
            matches.push([]);
        }
      }
    }
    if (needles == null) {
      needles = [needle];
      matches = [preFiltered?.length > 0 ? preFiltered : filter(haystack, needle)];
    }
    let retInfo = null;
    let retOrder = null;
    if (negs.length > 0)
      matches = matches.map((idxs) => idxs.filter((idx) => !negsRe.test(haystack[idx])));
    let matchCount = matches.reduce((acc, idxs) => acc + idxs.length, 0);
    if (matchCount <= infoThresh) {
      retInfo = {};
      retOrder = [];
      for (let ni = 0; ni < matches.length; ni++) {
        let idxs = matches[ni];
        if (idxs == null || idxs.length == 0)
          continue;
        let needle2 = needles[ni];
        let _info = info(idxs, haystack, needle2);
        let order = opts.sort(_info, haystack, needle2, compare);
        if (ni > 0) {
          for (let i = 0; i < order.length; i++)
            order[i] += retOrder.length;
        }
        for (let k in _info)
          retInfo[k] = (retInfo[k] ?? []).concat(_info[k]);
        retOrder = retOrder.concat(order);
      }
    }
    return [
      [].concat(...matches),
      retInfo,
      retOrder
    ];
  };
  return {
    search: (...args) => {
      let out = _search(...args);
      return out;
    },
    split,
    filter,
    info,
    sort: opts.sort
  };
}
var latinize = (() => {
  let accents = {
    A: "\xC1\xC0\xC3\xC2\xC4\u0104\u0102\xC5",
    a: "\xE1\xE0\xE3\xE2\xE4\u0105\u0103\xE5",
    E: "\xC9\xC8\xCA\xCB\u0116\u011A",
    e: "\xE9\xE8\xEA\xEB\u0119\u011B",
    I: "\xCD\xCC\xCE\xCF\u012E\u0130",
    i: "\xED\xEC\xEE\xEF\u012F\u0131",
    O: "\xD3\xD2\xD4\xD5\xD6",
    o: "\xF3\xF2\xF4\xF5\xF6",
    U: "\xDA\xD9\xDB\xDC\u016A\u0172\u016E\u0170",
    u: "\xFA\xF9\xFB\xFC\u016B\u0173\u016F\u0171",
    C: "\xC7\u010C\u0106",
    c: "\xE7\u010D\u0107",
    D: "\u010E",
    d: "\u010F",
    G: "\u011E",
    g: "\u011F",
    L: "\u0141",
    l: "\u0142",
    N: "\xD1\u0143\u0147",
    n: "\xF1\u0144\u0148",
    S: "\u0160\u015A\u0218\u015E",
    s: "\u0161\u015B\u0219\u015F",
    T: "\u0162\u021A\u0164",
    t: "\u0163\u021B\u0165",
    Y: "\xDD",
    y: "\xFD",
    Z: "\u017B\u0179\u017D",
    z: "\u017C\u017A\u017E"
  };
  let accentsMap = {};
  let accentsTpl = "";
  for (let r2 in accents) {
    accents[r2].split("").forEach((a) => {
      accentsTpl += a;
      accentsMap[a] = r2;
    });
  }
  let accentsRe = new RegExp(`[${accentsTpl}]`, "g");
  let replacer = (m) => accentsMap[m];
  return (strings) => {
    if (typeof strings == "string")
      return strings.replace(accentsRe, replacer);
    let out = Array(strings.length);
    for (let i = 0; i < strings.length; i++)
      out[i] = strings[i].replace(accentsRe, replacer);
    return out;
  };
})();
function permute(arr) {
  arr = arr.slice();
  let length = arr.length, result = [arr.slice()], c = new Array(length).fill(0), i = 1, k, p;
  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = arr[i];
      arr[i] = arr[k];
      arr[k] = p;
      ++c[i];
      i = 1;
      result.push(arr.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}
var _mark = (part, matched) => matched ? `<mark>${part}</mark>` : part;
var _append = (acc, part) => acc + part;
function highlight(str, ranges, mark = _mark, accum = "", append = _append) {
  accum = append(accum, mark(str.substring(0, ranges[0]), false)) ?? accum;
  for (let i = 0; i < ranges.length; i += 2) {
    let fr = ranges[i];
    let to = ranges[i + 1];
    accum = append(accum, mark(str.substring(fr, to), true)) ?? accum;
    if (i < ranges.length - 3)
      accum = append(accum, mark(str.substring(ranges[i + 1], ranges[i + 2]), false)) ?? accum;
  }
  accum = append(accum, mark(str.substring(ranges[ranges.length - 1]), false)) ?? accum;
  return accum;
}
uFuzzy.latinize = latinize;
uFuzzy.permute = (arr) => {
  let idxs = permute([...Array(arr.length).keys()]).sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] != b[i])
        return a[i] - b[i];
    }
    return 0;
  });
  return idxs.map((pi) => pi.map((i) => arr[i]));
};
uFuzzy.highlight = highlight;
var t = (t2) => "object" == typeof t2 && null != t2 && 1 === t2.nodeType;
var e = (t2, e3) => (!e3 || "hidden" !== t2) && ("visible" !== t2 && "clip" !== t2);
var n = (t2, n2) => {
  if (t2.clientHeight < t2.scrollHeight || t2.clientWidth < t2.scrollWidth) {
    const o3 = getComputedStyle(t2, null);
    return e(o3.overflowY, n2) || e(o3.overflowX, n2) || ((t3) => {
      const e3 = ((t4) => {
        if (!t4.ownerDocument || !t4.ownerDocument.defaultView) return null;
        try {
          return t4.ownerDocument.defaultView.frameElement;
        } catch (t5) {
          return null;
        }
      })(t3);
      return !!e3 && (e3.clientHeight < t3.scrollHeight || e3.clientWidth < t3.scrollWidth);
    })(t2);
  }
  return false;
};
var o = (t2, e3, n2, o3, l2, r2, i, s) => r2 < t2 && i > e3 || r2 > t2 && i < e3 ? 0 : r2 <= t2 && s <= n2 || i >= e3 && s >= n2 ? r2 - t2 - o3 : i > e3 && s < n2 || r2 < t2 && s > n2 ? i - e3 + l2 : 0;
var l = (t2) => {
  const e3 = t2.parentElement;
  return null == e3 ? t2.getRootNode().host || null : e3;
};
var r = (e3, r2) => {
  var i, s, d, h;
  if ("undefined" == typeof document) return [];
  const { scrollMode: c, block: f, inline: u, boundary: a, skipOverflowHiddenElements: g } = r2, p = "function" == typeof a ? a : (t2) => t2 !== a;
  if (!t(e3)) throw new TypeError("Invalid target");
  const m = document.scrollingElement || document.documentElement, w = [];
  let W = e3;
  for (; t(W) && p(W); ) {
    if (W = l(W), W === m) {
      w.push(W);
      break;
    }
    null != W && W === document.body && n(W) && !n(document.documentElement) || null != W && n(W, g) && w.push(W);
  }
  const b = null != (s = null == (i = window.visualViewport) ? void 0 : i.width) ? s : innerWidth, H = null != (h = null == (d = window.visualViewport) ? void 0 : d.height) ? h : innerHeight, { scrollX: y, scrollY: M } = window, { height: v, width: E, top: x, right: C, bottom: I, left: R } = e3.getBoundingClientRect(), { top: T, right: B, bottom: F, left: V } = ((t2) => {
    const e4 = window.getComputedStyle(t2);
    return { top: parseFloat(e4.scrollMarginTop) || 0, right: parseFloat(e4.scrollMarginRight) || 0, bottom: parseFloat(e4.scrollMarginBottom) || 0, left: parseFloat(e4.scrollMarginLeft) || 0 };
  })(e3);
  let k = "start" === f || "nearest" === f ? x - T : "end" === f ? I + F : x + v / 2 - T + F, D = "center" === u ? R + E / 2 - V + B : "end" === u ? C + B : R - V;
  const L = [];
  for (let t2 = 0; t2 < w.length; t2++) {
    const e4 = w[t2], { height: l2, width: r3, top: i2, right: s2, bottom: d2, left: h2 } = e4.getBoundingClientRect();
    if ("if-needed" === c && x >= 0 && R >= 0 && I <= H && C <= b && (e4 === m && !n(e4) || x >= i2 && I <= d2 && R >= h2 && C <= s2)) return L;
    const a2 = getComputedStyle(e4), g2 = parseInt(a2.borderLeftWidth, 10), p2 = parseInt(a2.borderTopWidth, 10), W2 = parseInt(a2.borderRightWidth, 10), T2 = parseInt(a2.borderBottomWidth, 10);
    let B2 = 0, F2 = 0;
    const V2 = "offsetWidth" in e4 ? e4.offsetWidth - e4.clientWidth - g2 - W2 : 0, S = "offsetHeight" in e4 ? e4.offsetHeight - e4.clientHeight - p2 - T2 : 0, X = "offsetWidth" in e4 ? 0 === e4.offsetWidth ? 0 : r3 / e4.offsetWidth : 0, Y = "offsetHeight" in e4 ? 0 === e4.offsetHeight ? 0 : l2 / e4.offsetHeight : 0;
    if (m === e4) B2 = "start" === f ? k : "end" === f ? k - H : "nearest" === f ? o(M, M + H, H, p2, T2, M + k, M + k + v, v) : k - H / 2, F2 = "start" === u ? D : "center" === u ? D - b / 2 : "end" === u ? D - b : o(y, y + b, b, g2, W2, y + D, y + D + E, E), B2 = Math.max(0, B2 + M), F2 = Math.max(0, F2 + y);
    else {
      B2 = "start" === f ? k - i2 - p2 : "end" === f ? k - d2 + T2 + S : "nearest" === f ? o(i2, d2, l2, p2, T2 + S, k, k + v, v) : k - (i2 + l2 / 2) + S / 2, F2 = "start" === u ? D - h2 - g2 : "center" === u ? D - (h2 + r3 / 2) + V2 / 2 : "end" === u ? D - s2 + W2 + V2 : o(h2, s2, r3, g2, W2 + V2, D, D + E, E);
      const { scrollLeft: t3, scrollTop: n2 } = e4;
      B2 = 0 === Y ? 0 : Math.max(0, Math.min(n2 + B2 / Y, e4.scrollHeight - l2 / Y + S)), F2 = 0 === X ? 0 : Math.max(0, Math.min(t3 + F2 / X, e4.scrollWidth - r3 / X + V2)), k += n2 - B2, D += t3 - F2;
    }
    L.push({ el: e4, top: B2, left: F2 });
  }
  return L;
};
var o2 = (t2) => false === t2 ? { block: "end", inline: "nearest" } : ((t3) => t3 === Object(t3) && 0 !== Object.keys(t3).length)(t2) ? t2 : { block: "start", inline: "nearest" };
function e2(e3, r2) {
  if (!e3.isConnected || !((t2) => {
    let o3 = t2;
    for (; o3 && o3.parentNode; ) {
      if (o3.parentNode === document) return true;
      o3 = o3.parentNode instanceof ShadowRoot ? o3.parentNode.host : o3.parentNode;
    }
    return false;
  })(e3)) return;
  const n2 = ((t2) => {
    const o3 = window.getComputedStyle(t2);
    return { top: parseFloat(o3.scrollMarginTop) || 0, right: parseFloat(o3.scrollMarginRight) || 0, bottom: parseFloat(o3.scrollMarginBottom) || 0, left: parseFloat(o3.scrollMarginLeft) || 0 };
  })(e3);
  if (((t2) => "object" == typeof t2 && "function" == typeof t2.behavior)(r2)) return r2.behavior(r(e3, r2));
  const l2 = "boolean" == typeof r2 || null == r2 ? void 0 : r2.behavior;
  for (const { el: a, top: i, left: s } of r(e3, o2(r2))) {
    const t2 = i - n2.top + n2.bottom, o3 = s - n2.left + n2.right;
    a.scroll({ top: t2, left: o3, behavior: l2 });
  }
}
function isMoreSpecific(a, b) {
  if (b === null) {
    return true;
  }
  return a.matchType === "title" && b.matchType === "term";
}
function updateActive(items, active) {
  for (const [index, item2] of items.entries()) {
    item2.classList.toggle(
      "docs-search-result__item--active",
      index === active
    );
  }
  const item = items[active];
  e2(item, {
    scrollMode: "if-needed",
    block: "nearest",
    inline: "nearest"
  });
}
function isOutside(rect, point) {
  if (point.y < rect.top || point.y > rect.top + rect.height) {
    return true;
  }
  if (point.x < rect.left || point.x > rect.left + rect.width) {
    return true;
  }
  return false;
}
function setup() {
  const searchData = document.querySelector("#search-data");
  if (!searchData) {
    return;
  }
  const url = searchData.getAttribute("href");
  const dialog = document.querySelector("#search-dialog");
  const input = document.querySelector("#search-field");
  const form = document.querySelector("#search-form");
  const results = document.querySelector("#search-results");
  const template = document.querySelector(`#search-result-item`);
  const dialogCloseButton = dialog.querySelector("button");
  let index = null;
  let searchTerm = "";
  let active = 0;
  const uf = new uFuzzy({
    alpha: "a-z\xE5\xE4\xF6",
    intraIns: Infinity
  });
  function getSearchResults(searchTerm2) {
    if (!index || searchTerm2 === "") {
      return [];
    }
    const idxs = uf.filter(index.terms, searchTerm2);
    if (!idxs) {
      return [];
    }
    const info = uf.info(idxs, index.terms, searchTerm2);
    const order = uf.sort(info, index.terms, searchTerm2);
    const results2 = [];
    const documentMapping = /* @__PURE__ */ new Map();
    for (const infoIdx of order) {
      const termIdx = info.idx[infoIdx];
      const resultIdx = index.mapping[termIdx];
      const term = index.terms[termIdx];
      const result = index.results[resultIdx];
      const highlighted = uFuzzy.highlight(term, info.ranges[infoIdx]);
      const searchResult = {
        matchType: result.terms.includes(term) ? "term" : "title",
        highlighted,
        term,
        doc: {
          title: result.title,
          url: result.url
        }
      };
      if (documentMapping.has(result.url)) {
        const previousIndex = documentMapping.get(result.url);
        const previousResult = results2[previousIndex];
        if (isMoreSpecific(searchResult, previousResult)) {
          results2[previousIndex] = null;
        } else {
          continue;
        }
      }
      const resultIndex = results2.length;
      documentMapping.set(result.url, resultIndex);
      results2.push(searchResult);
    }
    return results2.filter((it) => it !== null);
  }
  function updateResults() {
    const searchResults = getSearchResults(searchTerm);
    if (searchResults.length === 0) {
      results.replaceChildren();
      return;
    }
    active = 0;
    const rootUrl = document.documentElement.dataset.rootUrl ?? ".";
    const fragment = new DocumentFragment();
    for (const [
      i,
      { matchType, highlighted, doc }
    ] of searchResults.entries()) {
      const item = template.content.cloneNode(true);
      const li = item.querySelector("li");
      const a = item.querySelector("a");
      if (matchType === "term") {
        a.innerHTML = `${doc.title} (${highlighted})`;
      } else {
        a.innerHTML = highlighted;
      }
      a.href = [rootUrl, doc.url].join("/");
      li.classList.toggle(
        "docs-search-result__item--active",
        i === active
      );
      fragment.append(li);
    }
    results.replaceChildren();
    results.append(fragment);
  }
  function clickOutside(event) {
    const rect = dialog.getBoundingClientRect();
    const point = { x: event.clientX, y: event.clientY };
    if (isOutside(rect, point)) {
      dialog.close();
    }
  }
  queueMicrotask(async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        index = await response.json();
        updateResults();
      }
    } catch (err) {
      console.error("Failed to fetch search index", err);
    }
  });
  dialog.addEventListener("close", () => {
    document.body.removeEventListener("click", clickOutside);
    document.body.classList.remove("docs-modal-active");
  });
  dialogCloseButton.addEventListener("click", () => {
    dialog.close();
  });
  input.addEventListener("input", () => {
    searchTerm = input.value.toLowerCase();
    updateResults();
  });
  input.addEventListener("keydown", (event) => {
    const items = Array.from(results.querySelectorAll("li"));
    const n2 = items.length;
    if (n2 === 0) {
      return;
    }
    switch (event.key) {
      case "Down":
      case "ArrowDown":
        active = (active + 1) % n2;
        updateActive(items, active);
        break;
      case "Up":
      case "ArrowUp":
        active = (active - 1 + n2) % n2;
        updateActive(items, active);
        break;
      default:
        return;
    }
    event.preventDefault();
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const items = Array.from(results.querySelectorAll("li"));
    const item = items[active].querySelector("a");
    if (item) {
      item.click();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (!(event.ctrlKey && event.key === "k")) {
      return;
    }
    event.preventDefault();
    input.value = searchTerm = "";
    updateResults();
    dialog.showModal();
    document.body.addEventListener("click", clickOutside);
    document.body.classList.add("docs-modal-active");
  });
  window.addEventListener("docs:navigation", () => {
    initButton();
  });
  initButton();
  return;
  function initButton() {
    const button = document.querySelector("#search");
    if (button) {
      button.addEventListener("submit", (event) => {
        event.preventDefault();
        input.value = searchTerm = "";
        dialog.showModal();
        document.body.addEventListener("click", clickOutside);
        document.body.classList.add("docs-modal-active");
      });
    }
  }
}
setup();
