import { FC, useEffect, useState } from 'react';
import { ICountdownProps } from './ICountdown';

export const Countdown: FC<ICountdownProps> = ({
  time,
  size,
  stroke,
  onComplete,
  strokeWidth,
  strokeLinecap = 'round'
}) => {
  const radius = size / 2;
  const milliseconds = time * 1000;
  const circumference = size * Math.PI;

  const [countdown, setCountdown] = useState(milliseconds);

  const seconds = (countdown / 1000).toFixed();

  const strokeDashoffset = circumference - (countdown / milliseconds) * circumference;

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 10);
      } else {
        clearInterval(interval);
        onComplete && onComplete();
      }
    }, 10);
    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div className="flex items-center justify-center relative">
      <label className="absolute">{seconds}</label>
      <div className="rotate-90">
        <svg className="scale-100" width={size} height={size}>
          <circle
            fill="none"
            r={radius}
            cx={radius}
            cy={radius}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
      </div>
    </div>
  );
};
