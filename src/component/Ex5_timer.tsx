import React, { useEffect, useState } from 'react';

const Ex5_Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div >
      <h2>Bộ đếm thời gian</h2>
      <div >{seconds} giây</div>
    </div>
  );
};

export default Ex5_Timer;
