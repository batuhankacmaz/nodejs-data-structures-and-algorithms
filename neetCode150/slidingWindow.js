var characterReplacement = function (s, k) {
  let sCharacterSet = {};
  let result = 0;
  let l = 0;
  let maxLength = 0;

  for (let r = 0; r < s.length; r++) {
    if (sCharacterSet[s[r]] !== undefined) {
      sCharacterSet[s[r]] = 1 + sCharacterSet[s[r]];
    } else {
      sCharacterSet[s[r]] = 1;
    }

    maxLength = Math.max(maxLength, sCharacterSet[s[r]]);

    if (r - l + 1 - maxLength > k) {
      sCharacterSet[s[l]] -= 1;
      l += 1;
    }

    result = Math.max(result, r - l + 1);
  }
  return result;
};

// PERMUTATING IN STRING

function checkInclusion(s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }
  const s1Chars = Object.create(null);
  const s2Chars = Object.create(null);

  for (const ch of s1) {
    if (!(ch in s1Chars)) {
      s1Chars[ch] = 0;
      s2Chars[ch] = 0;
    }
    ++s1Chars[ch];
  }

  for (let i = 0; i < s1.length; ++i) {
    const ch = s2[i];
    if (ch in s1Chars) {
      ++s2Chars[ch];
    }
  }

  let matches = 0;
  let matched = 0;

  for (const ch in s1Chars) {
    if (s1Chars[ch] === s2Chars[ch]) {
      ++matches;
    }
    ++matched;
  }

  const last = s2.length - s1.length;
  for (let i = 0; i < last; ++i) {
    if (matches === matched) {
      return true;
    }

    const ch1 = s2[i];
    const ch2 = s2[i + s1.length];

    if (ch1 in s1Chars) {
      if (s1Chars[ch1] === s2Chars[ch1]--) {
        --matches;
      } else if (s1Chars[ch1] === s2Chars[ch1]) {
        ++matches;
      }
    }

    if (ch2 in s1Chars) {
      if (s1Chars[ch2] === s2Chars[ch2]++) {
        --matches;
      } else if (s1Chars[ch2] === s2Chars[ch2]) {
        ++matches;
      }
    }
  }
  return matches === matched;
}

//LENGTH OF LONGEST SUBSTRING

var lengthOfLongestSubstring = function (str) {
  const hash = {};
  let start = 0;
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i];

    if (!(rightChar in hash)) hash[rightChar] = 0;
    hash[rightChar] += 1;

    while (hash[rightChar] > 1) {
      let leftChar = str[start];
      start += 1;

      if (leftChar in hash) hash[leftChar] -= 1;
      if (hash[leftChar] === 0) delete hash[leftChar];
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
};
