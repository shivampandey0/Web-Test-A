import { useEffect, useState } from 'react';

export const Clock = () => {
  const [time, setTime] = useState('Loading...');

  const calculateTime = () => {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    setTime(`${hour}:${minutes}:${seconds}`);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      calculateTime();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h2 className="text-lg font-bold">{time}</h2>;
};
