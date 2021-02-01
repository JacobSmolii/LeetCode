// 824. Goat Latin
// A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

// The rules of Goat Latin are as follows:

// If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
// For example, the word 'apple' becomes 'applema'.

// If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".

// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
// Return the final sentence representing the conversion from S to Goat Latin.

// Example 1:

// Input: "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

var toGoatLatin = function (s) {
  function checkLet(c) {
    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) return true;
    return false;
  }

  let rest = '';
  let vowels = 'aeiouAEIOU';
  let wordCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (i == 0 || (checkLet(s[i]) && s[i - 1] == ' ')) {
      wordCount++;
      let firstLet = '';
      let vowFlag = 0;
      if (!vowels.includes(s[i])) {
        firstLet = s[i];
      } else {
        vowFlag = 1;
      }
      let count = 0;
      while (s[i] != ' ' && i < s.length) {
        if (vowFlag == 0 && count++ == 0) {
          i++;
          continue;
        }
        rest += s[i];
        i++;
      }

      if (vowFlag == 0) {
        rest += firstLet;
      }

      rest += 'ma';
      rest += 'a'.repeat(wordCount);
      rest += ' ';
    }
  }
  return rest.trimEnd();
  // vowels (a, e, i , o , u) => 'ma' to the end

  // word start with a consonant => remove first letter, append to the end, and add 'ma'

  // each word gets to the end increasing number of 'a' + 1
};

let s = 'I speak Goat Latin';
console.log(toGoatLatin(s));
