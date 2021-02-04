// 468. Validate IP Address
// Given a string IP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.

// A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi cannot contain leading zeros. For example, "192.168.1.1" and "192.168.1.0" are valid IPv4 addresses but "192.168.01.1", while "192.168.1.00" and "192.168@1.1" are invalid IPv4 addresses.

// A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where:

// 1 <= xi.length <= 4
// xi is a hexadecimal string which may contain digits, lower-case English letter ('a' to 'f') and upper-case English letters ('A' to 'F').
// Leading zeros are allowed in xi.
// For example, "2001:0db8:85a3:0000:0000:8a2e:0370:7334" and "2001:db8:85a3:0:0:8A2E:0370:7334" are valid IPv6 addresses, while "2001:0db8:85a3::8A2E:037j:7334" and "02001:0db8:85a3:0000:0000:8a2e:0370:7334" are invalid IPv6 addresses.

// Example 1:

// Input: IP = "172.16.254.1"
// Output: "IPv4"
// Explanation: This is a valid IPv4 address, return "IPv4".
// Example 2:

// Input: IP = "2001:0db8:85a3:0:0:8A2E:0370:7334"
// Output: "IPv6"
// Explanation: This is a valid IPv6 address, return "IPv6".
// Example 3:

// Input: IP = "256.256.256.256"
// Output: "Neither"
// Explanation: This is neither a IPv4 address nor a IPv6 address.
// Example 4:

// Input: IP = "2001:0db8:85a3:0:0:8A2E:0370:7334:"
// Output: "Neither"
// Example 5:

// Input: IP = "1e1.4.5.6"
// Output: "Neither"

// Constraints:

// IP consists only of English letters, digits and the characters '.' and ':'.

var validIPAddress = function (ip) {
  // IPv4
  // contains '.'
  // can not contain leading '0'
  // number from 0 to <= 255
  function ipv4() {
    function checkNum(n) {
      return n >= '0' && n <= '9';
    }
    let num = 0;
    let count = 0;

    for (let i = 0; i < ip.length; i++) {
      if (Number(ip[i]) == NaN || ip[i] == ':') return 'Neither';
      if (
        ip[i] == '0' &&
        checkNum(ip[i + 1]) &&
        (ip[i - 1] == '.' || i == 0 || i + 1 > ip.length)
      ) {
        return 'Neither';
      }

      while (ip[i] != '.' && i < ip.length) {
        if (ip[i] >= '0' && ip[i] <= '9') {
          num = num * 10 + Number(ip[i]);
          i++;
        } else return 'Neither';
      }
      if (ip[i] == '.') count++;
      if (
        num > 255 ||
        (ip[i] == '.' && (ip[i + 1] == '.' || i + 1 > ip.length - 1))
      )
        return 'Neither';
      num = 0;
    }
    if (count != 3) return 'Neither';
    return 'IPv4';
  }

  // IPv6
  // contain ':'
  // the chunk should be from '1' to '<= 4'
  // only letters from 'a' - 'f' and 'A' - 'F'

  function ipv6() {
    function checkLetter(c) {
      return (c >= 'g' && c <= 'z') || (c >= 'G' && c <= 'Z');
    }

    let countRow = 0;
    let countCol = 0;

    for (let i = 0; i < ip.length; i++) {
      if (ip[i] == '.' || checkLetter(ip[i])) return 'Neither';

      while (ip[i] != ':' && i < ip.length) {
        if (checkLetter(ip[i])) return 'Neither';
        countRow++;
        i++;
      }
      if (ip[i] == ':') countCol++;

      if (
        countRow == 0 ||
        countRow > 4 ||
        (ip[i] == ':' && (ip[i + 1] == ':' || i + 1 > ip.length - 1))
      )
        return 'Neither';
      countRow = 0;
    }
    if (countCol != 7) return 'Neither';
    return 'IPv6';
  }

  let i = 0;
  if (ip.length == 0) return 'Neither';
  for (let i = 0; ip[i] != '.' || ip[i] != ':'; i++) {
    if (ip[i] == '.') return ipv4();
    else if (ip[i] == ':') return ipv6();
  }

  return 'Neither';
};

// let IP = '172.16.254.1';
// let IP = '1.0.1.';
// let IP = '192.0.0.1';
// let IP = '2001:0db8:85a3:0:0:8A2E:0370:7334';
// let IP = '256.256.256.256';
// let IP = '2001:0db8:85a3:0:0:8A2E:0370:7334:';
// let IP = '1e1.4.5.6';
// let IP = '12..33.4';
// let IP = '20EE:FGb8:85a3:0:0:8A2E:0370:7334';
// let IP = '';
// let IP = '00.0.0.0';
// let IP = '01.01.01.01';
let IP = '2001:db8:85a3:0:8a2E:8a2E:7334:';
console.log(validIPAddress(IP));
