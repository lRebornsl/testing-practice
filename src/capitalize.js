const capitalize = (string) => {
  const capitalize = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalize;
};

module.exports = capitalize;