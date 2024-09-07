import { dictionary } from '@/utils/dictionary';
import { getRandomStrings } from '@/utils/helpers';
import { useCallback, useState } from 'react';

export const useGenerateWords = (count: number) => {
  const [words, setWords] = useState<string>(getRandomStrings(dictionary, count));

  const updateWords = useCallback(() => {
    setWords(getRandomStrings(dictionary, count));
  }, [count]);

  return { words, updateWords };
};
