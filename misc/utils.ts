export const randomAChar = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  return chars[Math.floor(Math.random() * chars.length)];
};

export const randomRange = (from: number, to: number) => {
  return Math.floor(Math.random() * (to - from + 1)) + from;
};
