const limitText = (
  text = "",
  maxWords = 100,
  options = { delimiter: "..." }
) => {
  const limitedText = text
    .split(" ")
    .reduce(
      (acum, word, index) =>
        index < maxWords - 1 ? acum.concat(" ", word) : acum,
      ""
    );
  return text.length > limitedText.length
    ? limitedText.concat(options.delimiter)
    : limitedText;
};

export default limitText;
