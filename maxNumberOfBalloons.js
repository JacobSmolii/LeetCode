// 1189. Maximum Number of Balloons
// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "leetcode"
// Output: 0

// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

var maxNumberOfBalloons1 = function (text) {
  let tmp = 'balloon';
  let rest = Infinity;

  for (let i = 0; i < tmp.length; i++) {
    let count = text.split(tmp[i]).length - 1;

    if (tmp[i] === 'l' || tmp[i] === 'o') {
      if (count / 2 < rest) {
        rest = Math.floor(count / 2);
      }
    }
    rest = Math.min(rest, count);
  }
  return rest;
};

var maxNumberOfBalloons = function (text) {
  let map = {};
  let rest = 0;

  for (el of text) {
    map[el] = (map[el] || 0) + 1;
  }

  while (
    map['b'] > 0 &&
    map['a'] > 0 &&
    map['l'] > 1 &&
    map['o'] > 1 &&
    map['n'] > 0
  ) {
    rest++;
    map['b']--;
    map['a']--;
    map['l'] -= 2;
    map['o'] -= 2;
    map['n']--;
  }
  return rest;
};

// let text = 'loonbalxballpoon';
// let text = 'nlaebolko';
// let text = 'leetcode';
// let text = 'balon';
let text =
  'krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw';

console.log(maxNumberOfBalloons(text));
