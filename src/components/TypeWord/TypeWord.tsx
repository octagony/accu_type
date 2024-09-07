import { FC } from 'react';
import { Char } from '../Char/Char';
import { InputLine } from '../InputLine/InputLine';
import { ITypeWordProps } from './ITypeWord';

export const TypeWord: FC<ITypeWordProps> = ({ userInput, words, classNames }) => {
  const typedCharacter = userInput?.split('');

  return (
    <div className={classNames}>
      {typedCharacter?.map((char, idx) => (
        <Char key={`${char}_${idx}`} actual={char} expected={words[idx]} />
      ))}
      <InputLine />
    </div>
  );
};
