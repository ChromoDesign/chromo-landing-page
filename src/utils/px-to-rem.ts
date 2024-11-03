export const pxToRem = (...pxValues: number[]): string => {
  const remValues = pxValues.map((px) => px / 16); // Assuming 1rem = 16px

  return remValues.map((rem) => `${rem}rem`).join(" ");
};
