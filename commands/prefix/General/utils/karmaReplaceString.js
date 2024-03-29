/**
 * @param {string} message
 */

const karmaAnswers = [
  "<replace> vincaa etyobaa ;DDDD",
  "<replace> tavi gabia",
  "trakshi aravis gaercho, <replace> shen xar",
  "<replace> me var? mouwoveli ylit ro darbixar",
];

const karmaReplaceString = (message) => {
  const findIndexOfSlur = message.split(" ").indexOf("xar");
  const randomKarmaIndex = Math.floor(Math.random() * karmaAnswers.length);
  let slurWord = message.split(" ")[findIndexOfSlur - 1];

  if (
    slurWord.at(-1) === "i" &&
    karmaAnswers[randomKarmaIndex].includes("<replace>o")
  ) {
    slurWord = slurWord.slice(0, -1)
  }

  const replaceWithSlur = karmaAnswers[randomKarmaIndex].replace(
    "<replace>",
    slurWord
  );

  return String(replaceWithSlur);
};

module.exports = { karmaReplaceString };
