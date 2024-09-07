import { FC } from 'react';
import { IContainerProps } from './IContainer';

export const Container: FC<IContainerProps> = ({ children, classnames, ...props }) => {
  return (
    <div
      className={`max-w-screen-2xl mx-auto p-4 pt-6 md:p-6 lg:p-12 font-mono ${classnames ? classnames : ''}`}
      {...props}>
      {children}
    </div>
  );
};
