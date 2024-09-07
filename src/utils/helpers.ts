export const shuffle = <T>(array: T[]): T[] => {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const idx = Math.floor(Math.random() * (i + 1));
    const tmp = result[i];
    result[i] = result[idx];
    result[idx] = tmp;
  }
  return result;
};

export const getRandomStrings = (arr: string[], limit: number) => {
  const randomStrings = new Set();
  while (randomStrings.size < limit) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    randomStrings.add(arr[randomIndex]);
  }

  return Array.from(randomStrings).join(' ');
};
