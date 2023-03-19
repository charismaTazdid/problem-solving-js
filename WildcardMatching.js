/**
Wildcard Matching 
 Problem Number 44 on leedCode.
 Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).
 */

const isMatch = (s, p) => {
    let dp = Array(p.length + 1).fill(0).map(_ => ({}));
    return test(s, p, 0, 0, dp);
  };
  
  const test =  (s, p, sIndex, pIndex, dp) => {
    if (dp[pIndex][sIndex] !== undefined) return dp[pIndex][sIndex];
  
    let sNow = s[sIndex];
    let pNow = p[pIndex];
    let res = false;
  
    if (pNow === undefined) return sNow === undefined;
    if (sNow === undefined) {
      for (let i = pIndex; i < p.length; i++) {
        if (p[i] !== '*') return false;
      }
      return true;
    }
  
    if (sNow === pNow || pNow === '?') {
      res = test(s, p, sIndex + 1, pIndex + 1, dp);
    } else if (pNow === '*') {
      res = test(s, p, sIndex, pIndex + 1, dp) || test(s, p, sIndex + 1, pIndex + 1, dp) || test(s, p, sIndex + 1, pIndex, dp);
    }
  
    dp[pIndex][sIndex] = res;
  
    return res;
  };