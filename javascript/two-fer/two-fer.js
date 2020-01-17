export const twoFer = (name) => {
  if ((name = "")) {
    name = "you";
  }
  return `One for ${name || "you"}, one for me.`;
};
