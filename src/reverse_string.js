const reverseString = (string) => {
  const reverseArray = string.split('').reverse().join('');
  return reverseArray;
};

module.exports = reverseString;