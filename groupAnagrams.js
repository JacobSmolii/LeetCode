// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different
// word or phrase, typically using all the original letters exactly once.

var groupAnagrams = function (strs) {
  // let map = {};
  // for (let word of strs) {
  //   let tmp = word.split('').sort().join('');

  //   if (map[tmp]) {
  //     map[tmp] = [...map[tmp], word];
  //   } else {
  //     map[tmp] = [word];
  //   }
  // }
  // console.log(map);

  let map = new Map();

  for (let word of strs) {
    let tmp = word.split('').sort().join('');
    if (!map.has(tmp)) {
      map.set(tmp, []);
    }
    map.get(tmp).push(word);
  }

  // map.forEach((a) => console.log(a));

  return Array.from(map.values());
};

let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));
