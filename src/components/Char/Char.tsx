import cn from 'classnames';
import { FC } from 'react';
import { ICharProps } from './IChar';

export const Char: FC<ICharProps> = ({ actual, expected }) => {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === ' ';
  return (
    <span
      className={cn('text-3xl', {
        'text-red-500': !isCorrect && !isWhiteSpace,
        'text-yellow-400': isCorrect && !isWhiteSpace,
        'bg-red-500/50': !isCorrect && isWhiteSpace
      })}>
      {expected}
    </span>
  );
};
