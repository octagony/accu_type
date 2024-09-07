import { FC } from 'react';
import { IGeneratedWordsProps } from './IGeneratedWords';

export const GeneratedWords: FC<IGeneratedWordsProps> = ({ words }) => {
  return <div className="text-3xl text-slate-300">{words}</div>;
};
