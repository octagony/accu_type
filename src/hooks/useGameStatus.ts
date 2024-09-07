import { useState } from 'react';
import { useGenerateWords } from './useGenerateWords';
import { useType } from './useType';

type State = 'start' | 'run' | 'finished';

const numberWords = 30;

export const useGameStatus = () => {
  const [state, setState] = useState<State>('start');
  const { words, updateWords } = useGenerateWords(numberWords);
  const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useType(state !== 'finished');

  return { state, words, typed };
};
