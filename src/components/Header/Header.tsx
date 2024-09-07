import { Info, Keyboard, RotateCcw } from 'lucide-react';

export const Header = () => {
  return (
    <header className="w-full flex justify-between">
      <div className="flex gap-2 items-center hover:cursor-pointer">
        <Keyboard />
        <span className="text-xl">AccuType</span>
      </div>
      <div className="flex gap-4">
        <RotateCcw className="hover:cursor-pointer" />
        <Info className="hover:cursor-pointer" />
      </div>
    </header>
  );
};
