const stringLength = (string) => {
  const length = string.length;
    if(length < 1 || length > 10) {
      throw new Error('Length must be between 1 and 10')
    } else {
      return length;
    }
}

module.exports = stringLength;